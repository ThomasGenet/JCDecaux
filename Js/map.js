
            // On initialise la latitude et la longitude de Paris (centre de la carte)
            
            /*var ville = {
                "Lille":{ "lat":50.63333, "lon":3.0667}

            };*/
           /* var lat = 50.850340;
            var lon = 4.351710;
            

            // Fonction d'initialisation de la carte
            function initMap(lati,longi) {
                // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                
                let maCarte2 = L.map('map').setView([lati, longi], 11);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(maCarte2);
                console.log("Dans init map"+maCarte2);
                return maCarte2;
            }

            //window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
        
           // };


        //for (ville in villes){
        //    var marker = L.marker([50.63333, 3.0667]).addTo(maCarte);
        //}
        //}*/
        
        class Map{
            constructor(map,lati, longi){
                this.map = document.getElementById(map)
                this.lat = lati;
                this.lon = longi;
                this.maCarte;
            }
            affichage(){
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