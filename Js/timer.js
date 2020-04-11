class Timer {
    constructor(min, sec) {
        this.min = min;
        this.sec = sec;
        //sessionStorage.setItem('min', min);
        //sessionStorage.setItem('sec', sec);
        
    }
    timeout() {
        var timerElt = document.getElementById('time');
        this.interval = setInterval(() => {

            if (this.sec == 0) {
                this.sec = 60;
                this.min = this.min - 1;
                sessionStorage.setItem('min', this.min);
            }
            this.sec = this.sec - 1;
            sessionStorage.setItem('sec', this.sec);

            timerElt.textContent = this.min + "min" + this.sec + "secondes";
            
            if (this.min === 0 && this.sec === 0) {
                clearInterval(this.interval);
                timerElt.textContent = "Réservation supprimée"
            }
        }, 1000);
    }
    stop(){
        clearInterval(this.interval);
    };
}