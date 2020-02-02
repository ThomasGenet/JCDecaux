       class Map {
           constructor(map, lati, longi) {
               this.map = document.getElementById(map)
               this.lat = lati;
               this.lon = longi;
               this.maCarte;
           }
           affichage() {
               // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
               this.maCarte = L.map(this.map).setView([this.lat, this.lon], 11);
               L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                   // Il est toujours bien de laisser le lien vers la source des données
                   attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                   minZoom: 1,
                   maxZoom: 20
               }).addTo(this.maCarte);
           }
           

       }