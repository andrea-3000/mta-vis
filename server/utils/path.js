import { readFileSync } from 'fs';
import { equal } from 'assert';
const debug = require('debug')('pathfinder');

// Utility methods for vectors
const TOL = 0.0001; // four decimal points ~= 11 meters
const dist = (b,a) => Math.sqrt( (a[0]-b[0])**2 + (a[1]-b[1])**2 );
const len = a => Math.sqrt( a[0]**2 + a[1]**2 );
const dot = (a,b) => a[0]*b[0] + a[1]*b[1];
const sub = (a,b) => [a[0]-b[0], a[1]-b[1]];
const eq = (a,b) => Math.abs(a[0] - b[0]) < TOL && Math.abs(a[1] - b[1]) < TOL;
const interpolate = (a,b,pct) => [ a[0] + (b[0]-a[0])*pct, a[1] + (b[1]-a[1])*pct ];

// Load file from GTFS source
const path_file = readFileSync('node_modules/mta-gtfs/lib/data/gtfs/shapes.txt');

// Read CSV string from file
var path_keys = null;
const paths = {};
for(const line of path_file.toString().split('\n')){
  if(!path_keys) 
    path_keys = line.split(',');
  else{
    const d = line.split(',')
      .reduce( (o,d,i) => d ? ({...o, [path_keys[i]]: d}) : o, {});
    if(!paths[d.shape_id]) paths[d.shape_id] = [];
    paths[d.shape_id][d.shape_pt_sequence] = ([+d.shape_pt_lon, +d.shape_pt_lat]);
  }
}

// Pre-compute path lengths, for speed
for(const k of Object.keys(paths)){
  if(paths[k].length < 2) continue;
  paths[k][0].distance = 0;
  for(var i=1; i < paths[k].length; i++){
    paths[k][i].distance = dist(paths[k][i-1], paths[k][i]);
  }
}

// Finds the segment location closest to this point
// Returns tuple: [segment_i, percent]
function findSegment(id, pt){
  var min = {normal: 360, i: null, pct: null};
  for(var i=1; i < paths[id].length; i++){
    
    // if point is one of the endpoints, we're done
    if( eq(pt, paths[id][i-1]) ) return [i-1, 0];
    if( eq(pt, paths[id][i]) ) return [i-1, 1];

    // else, calculate projection
    const vS = sub(paths[id][i], paths[id][i-1]);
    const vP = sub(pt, paths[id][i-1]);
    const vP_len = len(vP);
    const vS_len = len(vS);
    var comp = dot(vP, vS) / (vS_len); // projection of pt onto seg
    var normal = Math.sqrt( vP_len**2 - comp**2 ); // basic pythagorean theorem
  
    // skip segment if we're beyond the line
    if(comp < -TOL || comp > vS_len+TOL) continue; 
    
    var pct = comp/vS_len;

    // if we're effectively on this line, return
    if(normal < TOL) return [i-1, pct]; 

    // update min if this is the minimum
    if(normal < min.normal) min = { normal, i:i-1, pct };
  }

  if(min.normal && min.i && min.pct){
    // debug('falling back to min normal,', min.normal, min.i, min.pct);
    return [min.i, min.pct];
  }else{
    // debug('no match on path for id', id);
    return [null, null];
  }
}

export function interpolatePath(trip_id, pt1, pt2, pct){
  var id = trip_id.split('_')[1];
  if(!paths[id]) {
    id = Object.keys(paths).find( k => k.replace('..', '.').indexOf(id.replace('..', '.')) == 0 );
    if(!id) {
      debug('no matching route found for trip', trip_id);
      return null;
    }
  }

  const [start_i, start_pct] = findSegment(id, pt1);
  const [end_i, end_pct] = findSegment(id, pt2);

  if(start_i == null || end_i == null) return null;

  // Quick return for endpoints
  if(pct == 0) return [...paths[id][start_i]];
  if(pct == 1) return [...paths[id][end_i]];

  // Count up total desired length
  var i = start_i+1;
  // console.log(start_i, i, start_pct, paths[id].length)
  var total_len = paths[id][i].distance * (1-start_pct);
  while(i < end_i){
    total_len += paths[id][++i].distance;
  }
  if(end_i == start_i && end_pct != null) paths[id][start_i+1].distance * (end_pct - start_pct);
  if(end_pct != null && paths[id][i+1]) total_len += paths[id][i+1].distance * end_pct; // last segment
  
  // Figure out our proportation
  var target_len = total_len * pct;  
  // Subtract from target until we figure out where our proportion ends
  var target_i = start_i;
  while( target_i <= end_i && target_len > 0 ){
    target_len -= paths[id][++target_i].distance;
  }
  var target_pct = (paths[id][target_i].distance + target_len) / paths[id][target_i].distance;

  // Interpolate the two points on either side of the target, to get the value
  return interpolate(paths[id][target_i-1], paths[id][target_i], target_pct);
}

export function getWaypoints(trip_id, pt, stops, now){
  var id = trip_id.split('_')[1];
  if(!paths[id]) {
    id = Object.keys(paths).find( k => k.replace('..', '.').indexOf(id.replace('..', '.')) == 0 );
    if(!id) {
      debug('no matching waypoint route found for trip', trip_id);
      return null;
    }
  }
  
  const waypoints = [];
  var total_time = now;
  var stop_i = 0;
  var [start_i, start_pct] = findSegment(id, pt);
  // debug(`Starting waypoints, now is ${now}`);
  while(stop_i < stops.length && total_time < now + 60){
    var [end_i, end_pct] = findSegment(id, [stops[stop_i].stop_lon, stops[stop_i].stop_lat])
    // debug(`Start_i is ${start_i}, ${start_pct}. End_i is ${end_i}, ${end_pct}`);
    
    // Count up total desired length
    var i = start_i+1;
    if(i >= paths[id].length) debug('uh oh')
    // console.log(start_i, i, start_pct, paths[id].length)
    var total_len = paths[id][i].distance * (1-start_pct);
    while(i < end_i){
      total_len += paths[id][++i].distance;
    }
    if(end_i == start_i) total_len = paths[id][start_i+1].distance * (end_pct - start_pct);
    if(end_pct && paths[id][i+1]) total_len += paths[id][i+1].distance * end_pct; // last segment

    // calculate speed
    const time_per = (stops[stop_i].arrival - (stop_i==0 ? now : stops[stop_i-1].departure)) / total_len;
    
    // negative speed means we already should be there
    if(time_per < 0) {
      start_i = end_i;
      start_pct = end_pct;
      stop_i++;
      continue;
    }

    // debug(`Total len is ${total_len} across ${end_i-start_i} (${start_pct}->${end_pct}) segments heading toward ${stops[stop_i].stop_name}. Time per is ${time_per}`);
    
    // build up waypoints array
    i = start_i;
    while(i < end_i){
      i++;
      waypoints.push({
        start: total_time,
        duration: time_per * paths[id][i].distance,
        loc: paths[id][i]
      });
      total_time += waypoints[waypoints.length-1].duration;
      
      if(i-1 == start_i) waypoints[waypoints.length-1].duration *= 1-start_pct;
    }

    // last waypoint
    if(paths[id][i+1] && paths[id][i+1].distance && end_pct){
      waypoints.push({
        start: total_time,
        duration: time_per * paths[id][i+1].distance * end_pct,
        loc: interpolate(paths[id][i], paths[id][i+1], end_pct)
      });
    }

    // pause for time at stop
    total_time += stops[stop_i].departure - stops[stop_i].arrival;
    
    // update start i / pct for the next stop
    start_i = end_i;
    start_pct = end_pct;
    stop_i++;
  }

  return waypoints;
}