var map;
var infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map-container"), {
    center: { lat: 39.9526, lng: -75.1327 },
    zoom: 2
  });

  infoWindow = new google.maps.InfoWindow();

  infoWindow.open(map);
}
