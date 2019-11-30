import express from "express";

import Mta from "mta-gtfs";
import { promises } from "dns";

export const router = express.Router();
export const prefix = '/mta';

const feed_ids = [1, 2, 11, 16, 21, 26, 31, 36, 51];

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
  const times = {};
  
  const stop_ids = Object.entries(await mta.stop())
    .filter( ([id,s]) => s.parent_station == "" )
    .map( ([id,s]) => id);

  await Promise.all(feed_ids.map( async feed => {
    const schedule = (await mta.schedule(stop_ids, feed)).schedule;
    Object.entries(schedule).reduce( (lineTimes, [station, line]) => {
      for(const dir of ['N','S']){
        if(!line[dir] || !line[dir].length) continue;
        for(const train of line[dir]){
          const ln = routeLine(train.routeId);
          if(!lineTimes[ln]) lineTimes[ln] = [];
          lineTimes[ ln ].push({
            feedId: feed,
            station, 
            route: train.routeId,
            line: ln,
            arrivesAt: train.arrivalTime,
            departsAt: train.departureTime,
            delay: train.delay
          });
        }
      }
      return lineTimes;
    }, times);
  }));

  for(const line of Object.keys(times)){
    times[line].sort( (a,b) => b.station == a.station ? b.arrivesAt > a.arrivesAt : b.station > a.station)
  }
  
  res.send(times);
});
