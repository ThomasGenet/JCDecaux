class Timer{
    constructor(min, sec){
        this.min = min;
        this.sec = sec;
        this.lieu = document.getElementById ('lieu');
		this.nom = document.getElementById ('nomtimer');

    }
    timeout(){
        var timerElt = document.getElementById('time');
        let interval = setInterval ( () =>{
            
            if ( this.sec == 0){
                this.sec = 60;
                this.min = this.min -1;
            }
            this.sec = this.sec -1;
            timerElt.textContent =this.min + "min" +this.sec + "secondes";
            console.log (this.min + ' ' + this.sec);
            if (this.min === 0 && this.sec === 0){
                clearInterval (interval);
                timerElt.textContent = "Réservation supprimée"
            }
        },1000);
    }
    nom(){

    }
}