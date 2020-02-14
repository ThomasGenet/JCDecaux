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

    addIconMarker(markers) {
        let request = new XMLHttpRequest();
        request.maCarte = this.maCarte;
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                let markers = new L.MarkerClusterGroup();

                var response = JSON.parse(this.responseText);
                response.forEach(station => {
                    let monMarker = new Marker(station.status, station.position.latitude, station.position.longitude, this.maCarte); //latitude & longitude sont toruvé sur l'api jcdecaux
                    monMarker.addIconStation();

                    monMarker.markerStation.addEventListener("click",function(){
                        // alert ('click');
                        const nom = document.getElementById ("namestation");
                        nom.innerHTML = station.name;
                        const adresse = document.getElementById("adress");
                        adresse.innerHTML = station.address;
                        const nbbike = document.getElementById("nb_bike");
                        nbbike.innerHTML = station.totalStands.capacity;
                        const stands = document.getElementById("nb_bike_stands");
                        stands.innerHTML = station.totalStands.availabilities.stands;
                        const status = document.getElementById("station_status");
                        status.innerHTML = station.status
                    });
                    
                    
                    markers.addLayer(monMarker.markerStation);
                    
                });
                this.maCarte.addLayer(markers);
            }
            
        };
        // https://api.jcdecaux.com/vls/v1/stations?contract=lille&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
        //https://api.jcdecaux.com/vls/v3/stations?contract=bruxelles&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
        //https://api.jcdecaux.com/vls/v3/contracts?apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
        request.open("GET", "https://api.jcdecaux.com/vls/v3/stations?contract=bruxelles&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa");
        request.send();
    }
}