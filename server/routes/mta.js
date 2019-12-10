import express from "express";

import Mta from "mta-gtfs";
import { writeFile, readFileSync } from "fs";
import { interpolatePath } from "../utils/path";
const debug = require('debug')('mta');

export const router = express.Router();
export const prefix = '/mta';

const feed_ids = [1, 2, 11, 16, 26, 31, 36, 51];// 21 
const DIRS = [null, 'N', 'E', 'S', 'W'];
const lines = ['7', '123', '456', 'ACE', 'BDFM', 'G', 'JZ', 'L', 'NQR', 'S', 'SIR', 'FS', 'GS'];
const routeLine = (id) => {
  if(id == 'S') return id; // special case for s, which overlaps with SIR/shuttles
  if(id == 'H') return 'ACE'; // special case for weird H train
  return lines.find( ln => ln.indexOf(id) != -1 );
};

const mta = new Mta({
  key: 'cbb05c9de62e293fc58026f32050049f',
  feed_id: 1
});

/**
 * Get a list of MTA stations
 */
router.get('/stations', async function (req, res) {
  const stations = await mta.stop();
  res.send(stations);
});

/**
 * Get a specific MTA station
 */
router.get('/stations/:id', async function (req, res) {
  const station = await mta.stop(req.params.id);
  res.send(station);
});

/**
 * Get a specific MTA station schedule
 */
router.get('/stations/:id/schedule', async function (req, res) {
  const schedule = await mta.schedule(req.params.id);
  res.send(schedule);
});

/**
 * Get a list of MTA statuses
 */
router.get('/status', async function (req, res) {
  const status = (await mta.status('subway'))
    .reduce( (o,d) => {
      if(lines.indexOf(d.name) != -1)
        o[d.name] = d;
      return o;
    }, {});
  res.send({ type: "subway", lines: status });
});

/**
 * Get the current MTA schedule feed
 * (Updates evey 30 seconds)
 */
router.get('/live', async function(req, res){
  const stations = await mta.stop();
  debug('Loaded stations');

  // Get previous station arrivals, or the schedule
  const prevData = JSON.parse(readFileSync('data/trains.json'));
  debug(`Loaded ${prevData.trains.length} previous trains`);
  const prev = prevData.trains.reduce( (o,d) => ({...o, [d.train_id]: d}), {} );

  // Get latest predicted arrivals, merge with old data
  const trains = [];
  var updatedAt = new Date(0);
  await Promise.all(feed_ids.map( async feed => {
    const response = await mta.positions(feed);
    updatedAt = Math.max(updatedAt, new Date(response.updatedOn * 1000));
    
    const data = response.positions.map(t => {
      
      const next_stop = t.update.stop_time_update[0] && {
        ...stations[t.update.stop_time_update[0].stop_id],
        arrival: t.update.stop_time_update[0].arrival && new Date(t.update.stop_time_update[0].arrival.time.low*1000),
        departure: t.update.stop_time_update[0].departure && new Date(t.update.stop_time_update[0].departure.time.low*1000)
      };
      const prev_stop = !(prev[t.train_id] && prev[t.train_id].next_stop && next_stop) ? {} 
        : (prev[t.train_id].next_stop.stop_id == next_stop.stop_id) ? prev[t.train_id].prev_stop : prev[t.train_id].next_stop;
      
      const since_departure = prev_stop && new Date(response.updatedOn * 1000) - new Date(prev_stop.departure)
      const to_arrival = next_stop && next_stop.arrival - new Date(response.updatedOn * 1000)
      const pct_complete = Math.min(1, Math.max(0, since_departure / (to_arrival + since_departure)));

      return {
        train_id: t.train_id,
        train_dir: DIRS[+t.vehicle.trip['.nyct_trip_descriptor'].direction],
        trip_id: t.vehicle.trip.trip_id,
        route_id: t.vehicle.trip.route_id,
        last_moved: t.vehicle.timestamp && new Date(1000*t.vehicle.timestamp.low),
        next_stop, 
        prev_stop,
        since_departure,
        to_arrival,
        pct_complete,
        train_loc: prev_stop && next_stop 
          ? interpolatePath(t.vehicle.trip.trip_id, [prev_stop.stop_lon,prev_stop.stop_lat], [next_stop.stop_lon,next_stop.stop_lat], pct_complete)
          : next_stop && [+next_stop.stop_lon, +next_stop.stop_lat]
      }
    });

    trains.push(...data);
  }));
  debug(`Loaded ${trains.length} latest arrival times`);
  debug(`${trains.filter(t => !t.train_loc).length} trains have no location`);
  // Write new arrivals to file for next request
  new Promise( (pass, fail) => {
    writeFile('data/trains.json', JSON.stringify({trains, updatedAt }), (err) => err ? fail(err) : pass());
  }).then(() => {
    debug('Wrote new data to data/trains.json');
  });
  
  return res.send({type: 'subway', trains, updatedAt });
});


