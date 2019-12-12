import { map, showPopup } from '../src/map.js';

const lines = ['7', '123', '456', 'ACE', 'BDFM', 'G', 'JZ', 'L', 'NQR', 'S', 'SIR', 'FS', 'GS'];
const lineForRoute = (id) => {
    if(id == 'S') return id; // special case for s, which overlaps with SIR/shuttles
    if(id == 'H') return 'ACE'; // special case for weird H train
    return lines.find( ln => ln.indexOf(id) != -1 ) || id;
};

const DEFAULT_DEBOUNCE = 100;
const debounce = function debounce(time, fn){
    var debounceTimer;
    return function(...args){
        if(debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            fn.bind(this)(...args);
            debounceTimer = null;
        }, time);
    };
}

const renderLineIcons = (line) => {
    const icons = document.createElement('div');
    icons.classList.add('line-group', 'group--'+line.toLowerCase());
    for(var i = 0; i < line.length; i++){
        const letter = document.createElement('div');
        letter.classList.add('line-group__line');
        letter.textContent = line[i];
        icons.appendChild(letter);
    }
    return icons;
}

async function loadAutocomplete() {
    /* REFERENCING W3 SCHOOLS: https://www.w3schools.com/howto/howto_js_autocomplete.asp */

    let input = document.getElementById("station-search");
    let list = document.querySelector(".results-box");

    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    let stop_data = await response.json();

    let currentFocus;

    input.addEventListener("input", debounce(DEFAULT_DEBOUNCE, function(e) {
        let value = this.value;
        
        removeItems();
        currentFocus = -1;

        if (!value) return false;

        var regex = new RegExp(value, "i");
        let matches = stop_data.filter(s => regex.exec(s.stop_name));
        matches.forEach( m => {
            let result = document.createElement("div");
            result.classList.add('result-item');
            
            let resultText = document.createElement("div");
            resultText.classList.add('result-item__text');
            resultText.innerText = m.stop_name;
            result.appendChild(resultText);

            result.appendChild(renderLineIcons( lineForRoute(m.stop_id[0]) ));

            result.addEventListener("click", async function(e) {
                //input.value = this.getElementsByTagName("input")[0].value;
                let coordinates = [m.stop_lon, m.stop_lat];

                map.flyTo({
                    center: coordinates,
                    zoom: 15,
                });

                await showPopup(m.stop_id, m.stop_name, coordinates);

                removeItems();
            });
            list.appendChild(result);
        });
    }));

    input.addEventListener("keydown", function(e) {
        let items = list.querySelectorAll(".result-item");
        if (e.keyCode == 40) { //down
            currentFocus++;
            addActive(items);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(items);
        } else if (e.keyCode == 13) { //enter
            e.preventDefault();
            if (currentFocus > -1) {
                if (items) items[currentFocus].click();
            }
        }
    });

    function addActive(items) {
        /*a function to classify an item as "active":*/
        if (!items) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (items.length - 1);
        /*add class "autocomplete-active":*/
        items[currentFocus].classList.add("item--active");
    }

    function removeActive(items) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("item--active");
        }
    }

    function removeItems() {
        let items = list.querySelectorAll('.result-item');
        for(let i = 0; i < items.length; i++){
            items[i].remove();
        }
    }
}

window.addEventListener("load", async function() {
    console.log("LOADING!");
    loadAutocomplete();
});