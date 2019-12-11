//import { V4MAPPED } from "dns";

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhLTMwMDAiLCJhIjoiY2szZGtmbnB3MHBlczNib2swM29iM3dyMCJ9.ND3AF3iabUCSJJvHse4Mjg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-73.8995131, 40.72],
    zoom: 11.75
});

//40.7454736,-73.8995131,12.15

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
    "7": "#B933AD"
});

function drawLines(map) {
    map.addLayer({
        "id": "lines",
        "type": "line",
        "source": {
            "type": "vector",
            "url": "mapbox://andrea-3000.5v91wv8d"
        },
        "source-layer": "subway-lines-8mb22z",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-width": 1.5,
            "line-color":
                ["match", ["get", "rt_symbol"],
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
                    "#FFFF00", /* bright yellow error color */
                ],
            /* something glitchy happening w/ the data that tthe offset is weird here, not going to do it for now */
            /* "line-offset":
                 ["match", ["get", "rt_symbol"],
                    ["B", "D", "F", "M"], 2, 0
                ], */
        }

    });
}

async function drawStations(map) {
    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    const json = await response.json();
    console.log(JSON.stringify(json));
    /*map.addLayer({
        "id": "stations",
        "type": "circle",
        "source": {
            "type": "vector",
            "url": "https://comp426.peterandringa.com/mta/stations"
        },
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "circle-radius": {
                stops: [[10, 2], [14, 5]]
            },
            "circle-color": "#fff"
        }

    });*/
}

map.on('load', function() {
    drawLines(map);
    
});
drawStations(map);
