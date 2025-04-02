document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-100.3119393, 25.7225620], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        draw: {
            polygon: true,
            polyline: false,
            rectangle: false,
            circle: false,
            marker: false
        },
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);

    var polygonCoords = null;
    var userMarker = null;

    map.on('draw:created', function(event) {
        drawnItems.clearLayers();
        var layer = event.layer;
        drawnItems.addLayer(layer);
        polygonCoords = layer.getLatLngs()[0].map(coord => [coord.lng, coord.lat]);
        polygonCoords.push(polygonCoords[0]); // Cerrar el polígono
    });

    function checkLocation(lat, lon) {
        document.getElementById('lat').textContent = lat;
        document.getElementById('lon').textContent = lon;

        if (polygonCoords) {
            var userPoint = turf.point([lon, lat]);
            var area = turf.polygon([polygonCoords]);
            if (turf.booleanPointInPolygon(userPoint, area)) {
                document.getElementById('message').textContent = 'Estás en el área ✅';
            } else {
                document.getElementById('message').textContent = 'Fuera del área ❌';
            }
        }
    }

    navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        userMarker = L.marker([lat, lon], { draggable: true }).addTo(map);
        map.setView([lat, lon], 15);
        checkLocation(lat, lon);

        userMarker.on('dragend', function(event) {
            var newLatLng = event.target.getLatLng();
            checkLocation(newLatLng.lat, newLatLng.lng);
        });
    }, () => {
        document.getElementById('message').textContent = 'No se pudo obtener la ubicación';
    });
});
