import express from "express";

import Mta from "mta-gtfs";
import { writeFile, readFileSync } from "fs";
import { interpolatePath, getWaypoints } from "../utils/path";
const debug = require('debug')('mta');

export const router = express.Router();
export const prefix = '/mta';

const feed_ids = [1, 2, 11, 16, 21, 26, 31, 36, 51]; 
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
  const stations = Object.values(await mta.stop())
    .filter( s => !s.stop_id.toString().match(/[NS]$/));

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
  const schedules = (await Promise.all(
    feed_ids.map( feed =>
      mta.schedule(req.params.id, feed)
        .catch(e => console.log(`Error loading schedule for feed #${feed}.`))
    )
  )).filter(s => s.updatedOn)
    .reduce( (o,s) => {
      const line = routeLine(Object.values(s.schedule[req.params.id])[0][0].routeId);
      if(!o[line]) o[line] = {};
      if(!o[line].N) o[line].N = [];
      if(!o[line].S) o[line].S = [];

      o[line].N.push(...s.schedule[req.params.id].N)
      o[line].S.push(...s.schedule[req.params.id].S);

      return o;
    }, {});
  
  res.send({ stop_id: req.params.id, schedules });
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
  // Get previous station arrivals, or the schedule
  var cacheFile;
  try{ cacheFile = readFileSync('data/trains.json') } catch(e) {
    cacheFile =  null;
  }

  var prevData, prev;
  if(cacheFile){
    prevData = JSON.parse(cacheFile);
    
    // if cache is still valid, exit
    if( (Date.now()/1000 - prevData.updatedAt) < 30 && req.headers["cache-control"] != 'no-cache' ){
      debug('Falling back on cached data');
      return res.send({ type: "subway", cached: true, ...prevData })
    }

    debug(`Loaded ${prevData.trains.length} previous trains`);
    prev = prevData.trains.reduce( (o,d) => ({...o, [d.train_id]: d}), {} );
  }

  const stations = await mta.stop();
  debug(`Loaded ${Object.keys(stations).length} stations`);
  
  // Get latest predicted arrivals, merge with old data
  var trains = [];
  var updatedAt = 0;
  await Promise.all(feed_ids.map( async feed => {
    var response;
    try{
      response = await mta.positions(feed);
    }catch(e){
      debug('That error was for feed #', feed);
      return;
    }
    
    updatedAt = Math.max(updatedAt, response.updatedOn);
    
    const data = response.positions.map(t => {
      const stops = t.update.stop_time_update.map(t => ({
        ...stations[t.stop_id],
        arrival: t.arrival && t.arrival.time.low,
        departure: t.departure && t.departure.time.low
      }));
      
      const next_stop = stops[0];
      
      const prev_stop = !(prev && prev[t.train_id] && prev[t.train_id].next_stop && next_stop) ? {} 
        : (prev[t.train_id].next_stop.stop_id == next_stop.stop_id) ? prev[t.train_id].prev_stop : prev[t.train_id].next_stop;
      

      const since_departure = prev_stop && response.updatedOn - prev_stop.departure
      const to_arrival = next_stop && next_stop.arrival - response.updatedOn
      const pct_complete = Math.min(1, Math.max(0, since_departure / (to_arrival + since_departure)));

      const train_loc = prev_stop && next_stop 
        ? interpolatePath(t.vehicle.trip.trip_id, [prev_stop.stop_lon,prev_stop.stop_lat], [next_stop.stop_lon,next_stop.stop_lat], pct_complete)
        : next_stop && [+next_stop.stop_lon, +next_stop.stop_lat];
      
      const waypoints = train_loc && getWaypoints(t.vehicle.trip.trip_id, train_loc, stops, response.updatedOn);

      return {
        train_id: t.train_id,
        train_dir: DIRS[+t.vehicle.trip['.nyct_trip_descriptor'].direction],
        trip_id: t.vehicle.trip.trip_id,
        route_id: t.vehicle.trip.route_id,
        last_moved: t.vehicle.timestamp && t.vehicle.timestamp.low,
        next_stop, 
        prev_stop,
        since_departure,
        to_arrival,
        pct_complete,
        train_loc,
        waypoints
      }
    });

    trains.push(...data);
  }));

  debug(`Loaded ${trains.length} latest arrival times`);
  debug(`${trains.filter(t => !t.train_loc).length} trains have no location`);
  // Write new arrivals to file for next request
  new Promise( (pass, fail) => {
    writeFile('data/trains.json', JSON.stringify({ trains, updatedAt }), (err) => err ? fail(err) : pass());
  }).then(() => {
    debug('Wrote new data to data/trains.json');
  });
  
  return res.send({type: 'subway', trains: trains, updatedAt });
});


