class Marker {
    constructor(status, latit, longit, carte) {
        this.lat = latit;
        this.lon = longit;
        this.carte = carte;
        this.status = status;
        this.iconStationClose = new L.Icon({
            iconUrl : "./Img/iconclose.png",
            iconSize : [30,36]
        });
        this.iconStationFree = new L.Icon({
            iconUrl : "./Img/iconopen.png",
            iconSize : [30,36]
        });

    }

    addIconStation() {
        
        switch (this.status) {
            case "OPEN":
                
                this.markerStation = new L.marker([this.lat, this.lon] ,{icon : this.iconStationFree});
                break;
            case "CLOSED":
                this.markerStation = new L.marker([this.lat, this.lon], {icon : this.iconStationClose});
                break;
        }
        
    }

}
