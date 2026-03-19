import './style.css';

/*let map;
let center =  { lat: 56.661449, lng: 16.362720 };

async function initMap() {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  const {ColorScheme} = await google.maps.importLibrary("core");
  
  let scheme = ColorScheme.LIGHT;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    scheme = ColorScheme.DARK;
  }

  const mapOptions = {
    center,
    zoom: 8,
    colorScheme: scheme,
    mapId: "DEMO_MAP_ID",
  }

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  addMarker();
}

async function addMarker() {
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: center,
  });
}

initMap();*/


var map = L.map('map').setView([56.661449, 16.362720], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([56.661449, 16.362720]).addTo(map);
