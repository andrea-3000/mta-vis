//import { V4MAPPED } from "dns";

mapboxgl.accessToken = "pk.eyJ1IjoiYW5kcmVhLTMwMDAiLCJhIjoiY2szZGtmbnB3MHBlczNib2swM29iM3dyMCJ9.ND3AF3iabUCSJJvHse4Mjg";
let station_json;

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [-73.9864468, 40.7417373],
    zoom: 12.15,
    trackResize: true
});

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
    station_json = await response.json();
    let stop_data = Object.values(station_json).filter( s => !s.stop_id.toString().match(/[NS]$/) );
    let geojson = stop_data.map( s => ({
        type: "Feature",
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
    let updated_response = await fetch("https://comp426.peterandringa.com/mta/live");
    let updated_data = await updated_response.json();
    let trains = updated_data.trains.map( t => {
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

map.on("load", async function() {
    await drawStops(map);
    await drawLines(map);
    await updateTrains(map);

    setInterval(() => {
        updateTrains(map);
    }, 30 * 1000);
});