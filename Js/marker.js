class Marker{
    constructor(markerStation, latit, longit){
        this.marker = document.getElementById("marker");
        this.markerStation = markerStation;
        this.icon;
        this.icontest = ({
            iconSrc = 'https://www.google.com/search?q=marqueur+png&sxsrf=ACYBGNT1e0pq4tdM0O5KnXsR0-fKcCPEAA:1580664688483&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLjZDqsrPnAhUox4UKHdZWDfUQ_AUoAXoECAsQAw&biw=1440&bih=789#imgrc=Y33S1Fv-NnvdLM:',
            iconSize = [25, 25]
        })
        this.lat = latit;
        this.long = longit;
        
        

    }
    addMarker(){
        this.icon = L.marker(this.marker).setView([this.lat,this.long]) {icon: this.icontest}
    }.addTo(this.icon);
}