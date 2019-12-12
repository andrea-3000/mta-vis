import { map, showPopup } from '../src/map.js';

async function loadAutocomplete() {
    /* REFERENCING W3 SCHOOLS: https://www.w3schools.com/howto/howto_js_autocomplete.asp */

    let input = document.getElementById("station-search");

    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    let stop_data = await response.json();

    let focus;

    input.addEventListener("input", function(e) {
        let value = this.value;

        closeAllLists();
        focus = -1;

        let list = document.createElement("div");
        list.setAttribute("id", this.id + "ac-list");
        list.setAttribute("class", "ac-items");
        document.getElementById("results").appendChild(list);

        if (!value) return false;
        let regex = new RegExp(value, "i");
        let matches = stop_data.filter(s => regex.exec(s.stop_name));
        matches.forEach( m => {
            let result = document.createElement("div");
            result.innerHTML += "<input value='" + m.stop_name + "'>";
            result.addEventListener("click", async function(e) {
                input.value = this.getElementsByTagName("input")[0].value;
                let coordinates = [m.stop_lon, m.stop_lat];
                map.flyTo({
                    center: coordinates,
                    zoom: 15,
                });

                await showPopup(m.stop_id, m.stop_name, coordinates);

                closeAllLists();
            });
            list.appendChild(result);
        });
    });

    input.addEventListener("keydown", function(e) {
        let list = document.getElementById(this.id + "ac-list");
        if (list) list = list.getElementsByTagName("div");
        if (e.keyCode == 40) { //down
            focus++;
            addActive(list);
        } else if (e.keyCode == 38) { //up
            focus--;
            addActive(list);
        } else if (e.keyCode == 13) { //enter
            e.preventDefault();
            if (focus > -1) {
            if (list) list[focus].click();
            }
        }
    });

    function addActive(list) {
        if (!list) return false;
        removeActive(list);
        if (focus >= list.length) focus = 0;
        if (focus < 0) focus = (list.length - 1);
        list[focus].classList.add("ac-active");
    }

    function removeActive(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("ac-active");
        }
    }

    function closeAllLists(element) {
        let list = document.getElementsByClassName("ac-items");
        for (let i = 0; i < list.length; i++) {
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