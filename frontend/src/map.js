import { lineForRoute, renderLineIcons } from '../src/search.js';

// Helpers
const interpolate = (p1, p2, pct) => [ p2[0]*pct+p1[0]*(1-pct), p2[1]*pct+p1[1]*(1-pct) ];

mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVhLTMwMDAiLCJhIjoiY2szZGtmbnB3MHBlczNib2swM29iM3dyMCJ9.ND3AF3iabUCSJJvHse4Mjg";


export let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-73.9864468, 40.7417373],
    zoom: 12.15,
    trackResize: true
});

let train_data = {};

//40.7454736,-73.8995131,12.15
//40.7417373,-73.9864468,13.45

let lineColors = ({
    "A-C-E": "#0039A6",
    "B-D-F-M": "#FF6319",
    "G": "#6CBE45",
    "J-Z": "#996633",
    "L": "#A7A9AC",
    "N-Q-R-W": "#FCCC0A",
    "S": "#808183",
    "1-2-3": "#EE352E",
    "4-5-6": "#00933C",
    "7": "#B933AD",
});
let ERROR_COLOR = "#FFFF00"; /* bright yellow error color */

async function drawLines(map) {
    map.addLayer({
        id: "lines",
        type: "line",
        source: {
            type: "vector",
            url: "mapbox://andrea-3000.5v91wv8d"
        },
        "source-layer": "subway-lines-8mb22z",
        layout: {
            "line-cap": "round",
            "line-join": "round"
        },
        paint: {
            "line-width": 1.5,
            "line-color": getColor(["get", "rt_symbol"])
            /* something glitchy happening w/ the data that tthe offset is weird here, not going to do it for now */
            /* "line-offset":
                ["match", ["get", "rt_symbol"],
                    ["B", "D", "F", "M"], 2, 0
                ], */
        }

    }, "stops");
}

async function drawStops(map) {
    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    let stop_data = await response.json();
    let geojson = stop_data.map( s => ({
        type: "Feature",
        "properties": {
            "stop_id": s.stop_id,
            "stop_name": s.stop_name,
        },
        geometry: {
          type: "Point",
          coordinates: [s.stop_lon, s.stop_lat]
        }
    }));

    map.addLayer({
        id: "stops",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: geojson
          }
        },
        paint: {
          "circle-radius": 2.5,
          "circle-color": "#fff",
          "circle-stroke-width": 1,
          "circle-stroke-color": "#000"
        }
    });
}

async function updateTrains(map) {
    //console.log("UPDATING");
    let updated_response = await fetch("https://comp426.peterandringa.com/mta/live").then(d => d.json());

    train_data = updated_response.trains.map( t => {
        
        // Update sources
        let train_id = "train-"+t.train_id.replace(/ /g, "_");
        let source = map.getSource(train_id);
        if (!source){
            if (t.train_loc) addTrain(map, t);
        } else {
            if (t.train_loc) {
                let updated_loc = {
                    type: "Point",
                    coordinates: t.train_loc
                }
                source.setData(updated_loc);
            } else {
                console.error("Received invalid train location when updating, should we remove it?");
            }
        }

        // store data
        t.source = source || map.getSource(train_id);
        t.map_id = train_id;

        return t;
    });
}

function addTrain(map, t) {
    let train_id = "train-"+t.train_id.replace(/ /g, "_");
    map.addSource(train_id, {"type": "geojson", data: { "type": "Point", "coordinates": t.train_loc}});
    map.addLayer({
        id: train_id,
        type: "circle",
        source: train_id,
        paint: {
            "circle-radius": 4,
            "circle-color": getColor(t.route_id),
            "circle-stroke-width": 1,
            "circle-stroke-color": "#000"
        }
    });
}

function getColor(id) {
    return ["match", id,
                ["A", "C", "E"], lineColors["A-C-E"],
                ["B", "D", "F", "M"], lineColors["B-D-F-M"],
                ["G"], lineColors["G"],
                ["J", "Z"], lineColors["J-Z"],
                ["L"], lineColors["L"],
                ["N", "Q", "R"], lineColors["N-Q-R-W"],
                ["S"], lineColors["S"],
                ["1", "2", "3"], lineColors["1-2-3"],
                ["4", "5", "6"], lineColors["4-5-6"],
                ["7"], lineColors["7"],
                ERROR_COLOR, 
            ];
}

function tick(){
    
    var now = Date.now()/1000; 
    for(const t of train_data){
        if(!t.waypoints || !t.waypoints[0] || !t.train_loc) continue;
        
        var pct = (now - t.waypoints[0].start) / t.waypoints[0].duration;
        
        while(t.waypoints && t.waypoints.length && t.waypoints[0].duration && pct > 1){
            t.waypoints.shift(); // remove completed animations
            pct = !t.waypoints[0] ? -1 : (now - t.waypoints[0].start) / t.waypoints[0].duration;
        }
        if(!t.waypoints[0] || !t.waypoints[0].duration || pct < 0) continue;

        const new_loc = interpolate(t.train_loc, t.waypoints[0].loc, pct)
        t.source.setData({
            type: "Point",
            coordinates: new_loc
        });
        t.train_loc = new_loc;
    }

    // Loop every animation frame
    setTimeout(tick, 500);
}

const display_date = date => {
    let diff = (date - (new Date())) / 1000; // convert ms to sec
    console.log(diff);
    if( diff < 60 ){
        return 'now';
    }
    diff = Math.round(diff / 60); // convert sec to min
    if(diff < 60 ){
        return `${diff}m`;
    }
    diff = Math.round(diff / 60); // convert min to hour
    if( diff < 24 ){
        return `${diff}h`;
    }
    diff = Math.round(diff / 24); // convert hours to days
    if( diff < 30){
        return `${diff}d`;
    }
    return "LARGE TIME (probably wrong)";
}

export async function showPopup(id, name, coordinates) {
    //fetch from endpoint with stop_id
    const schedule_response = await fetch(`https://comp426.peterandringa.com/mta/stations/${id}/schedule`);
    let schedule_data = await schedule_response.json();

    let northbound = schedule_data.schedules[Object.keys(schedule_data.schedules)[0]].N;
    let southbound = schedule_data.schedules[Object.keys(schedule_data.schedules)[0]].S;

    

    let html = `
        <div class="popup">
            <h3>${name}</h3>
    `;

    if (northbound) {
        html += `<h6>NORTHBOUND</h6>`
        for (let i = 0; i < northbound.length; i++) {
            let train = northbound[i];
            html += `<p>${train.routeId}: ${display_date(new Date(train.arrivalTime * 1000))}</p>`
        }
    }

    if (southbound) {
        html += `<h6>SOUTHBOUND</h6>`
        for (let i = 0; i < southbound.length; i++) {
            let train = southbound[i];
            html += `<p>${train.routeId}: ${display_date(new Date(train.arrivalTime * 1000))}</p>`
        }
    }

    html += `</div>`;

    let popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true
    })
        .setLngLat(coordinates)
        .setHTML(html);

    popup.addTo(map);
}

map.on('click', 'stops', async function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var stop_id = e.features[0].properties["stop_id"];
    var stop_name = e.features[0].properties["stop_name"];

    await showPopup(stop_id, stop_name, coordinates);

});

map.on("load", async function() {
    await drawStops(map);
    await drawLines(map);
    await updateTrains(map);

    setInterval(() => {
        updateTrains(map);
    }, 30 * 1000);

    // Start the clock
    setTimeout(tick, 5000); // wait five seconds, then start movement
});