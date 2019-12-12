import { map } from '../src/map.js';

async function loadAutocomplete() {
    /* REFERENCING W3 SCHOOLS: https://www.w3schools.com/howto/howto_js_autocomplete.asp */

    let input = document.getElementById("station-search");

    const response = await fetch("https://comp426.peterandringa.com/mta/stations");
    let station_json = await response.json();
    let stop_data = Object.values(station_json).filter( s => !s.stop_id.toString().match(/[NS]$/) );

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
            result.addEventListener("click", function(e) {
                input.value = this.getElementsByTagName("input")[0].value;
                let coordinates = [m.stop_lon, m.stop_lat];
                map.flyTo({
                    center: coordinates,
                    zoom: 15,
                });

                let html = `
                    <div id="popup">
                        <h3>${m.stop_name}</h3>
                    </div>
                `;

                let popup = new mapboxgl.Popup({
                    closeButton: true,
                    closeOnClick: true
                })
                    .setLngLat(coordinates)
                    .setHTML(html);

                popup.addTo(map);
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

const display_date = date => {
  let diff = ((new Date()) - date) / 1000; // convert ms to sec
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
  if(diff < 365){ // if within one year, use Month day
    return yearFormat(date);
  }
  return fullFormat(date)
}

window.addEventListener("load", async function() {
    console.log("LOADING!");
    loadAutocomplete();
});