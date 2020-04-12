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


                    monMarker.markerStation.addEventListener("click", function () {
                        const number = station.number;

                        let request2 = new XMLHttpRequest();
                        request2.onreadystatechange = function () {
                            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                                var response2 = JSON.parse(this.responseText);
                                
                                const nom = document.getElementById("namestation");
                                nom.innerHTML = response2.name;
                                sessionStorage.setItem('namestation', document.getElementById('namestation').textContent);
                                
                                const adresse = document.getElementById("adress");
                                adresse.innerHTML = response2.address;
                                const nbbike = document.getElementById("nb_bike");
                                nbbike.innerHTML = response2.totalStands.capacity;
                                const stands = document.getElementById("nb_bike_stands");
                                stands.innerHTML = response2.totalStands.availabilities.stands;
                                const status = document.getElementById("station_status");
                                status.innerHTML = response2.status;

                                let btnInfoReserver = document.getElementById('reserver');
                                if (nbbike < 1) {
                                    btnInfoReserver.style.display = 'none';
                                    

                                } else {
                                    btnInfoReserver.style.display = 'block';
                                }
                                
                                
                            }
                        }
                        request2.open("GET", "https://api.jcdecaux.com/vls/v3/stations/" + number + "?contract=bruxelles&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa");
                        request2.send();
                    });
                    markers.addLayer(monMarker.markerStation);
                });
                this.maCarte.addLayer(markers);
            }
        };
        request.open("GET", "https://api.jcdecaux.com/vls/v3/stations?contract=bruxelles&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa");
        request.send();
    }
}