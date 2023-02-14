function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -34.6083, lng: -58.3712 },
    mapTypeId: "terrain",
  });

  for (const data in puntos) {
    new google.maps.Marker({
      position: puntos[data].center,
      title: puntos[data].id,
      map,
    });
  }
}

window.initMap = initMap;
