let map;
let lat;
let lng;

var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=getLocation`;
script.defer = true;

document.head.appendChild(script);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng },
    zoom: 8,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement('button');
  locationButton.textContent = 'Pan to Current Location';
  locationButton.classList.add('custom-map-control-button');
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener('click', recenter);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  initMap();
}

function recenter() {
  map.setCenter({ lat: lat, lng: lng });
}

getLocation();
