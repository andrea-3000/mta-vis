import { map } from '../src/map.js';

async function loadAutocomplete() {
    /* REFERENCING W3 SCHOOLS: https://www.w3schools.com/howto/howto_js_autocomplete.asp */

    let input = document.getElementById("station-search");

    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    let station_json = await response.json();
    let stop_data = Object.values(station_json).filter( s => !s.stop_id.toString().match(/[NS]$/) );

    let currentFocus;

    input.addEventListener("input", function(e) {
        let value = this.value;

        closeAllLists();
        currentFocus = -1;

        let list = document.createElement("div");
        list.setAttribute("id", this.id + "autocomplete-list");
        list.setAttribute("class", "autocomplete-items");
        document.getElementById("results").appendChild(list);

        if (!value) return false;
        var regex = new RegExp(value, "i");
        let matches = stop_data.filter(s => regex.exec(s.stop_name));
        matches.forEach( m => {
            let result = document.createElement("div");
            result.innerHTML += "<input value='" + m.stop_name + "'>";
            result.addEventListener("click", function(e) {
                input.value = this.getElementsByTagName("input")[0].value;
                console.log(map);
                map.flyTo({
                    center: [m.stop_lon, m.stop_lat],
                    zoom: 15,
                });
                closeAllLists();
            });
            list.appendChild(result);
        });
    });

    /*execute a function presses a key on the keyboard:*/
    input.addEventListener("keydown", function(e) {
        var list = document.getElementById(this.id + "autocomplete-list");
        if (list) list = list.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(list);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(list);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (list) list[currentFocus].click();
            }
        }
    });

    function addActive(list) {
        /*a function to classify an item as "active":*/
        if (!list) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(list);
        if (currentFocus >= list.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (list.length - 1);
        /*add class "autocomplete-active":*/
        list[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(list) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < list.length; i++) {
            list[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(element) {
        var list = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < list.length; i++) {
            if (element != list[i] && element != input) {
                list[i].parentNode.removeChild(list[i]);
            }
        }
    }
}

window.addEventListener("load", async function() {
    console.log("LOADING!");
    loadAutocomplete();
});