var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    minZoom:1,
    maxZoom:20,
    attribution: '&copy; © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    
    });

    var maCarte = L.map('mapid', {
    center : [50.63333,-3.744551],
    zoom : 18,
    layers: [OpenStreetMap]
    });