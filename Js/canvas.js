class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext ("2d");
        this.ongoingTouches = [];
    }

    
    handleStart (evtstart) {
            evtstart.preventDefault();
            let touches = evtstart.changedTouches;

            for (let i = 0; i < touches.length; i++) {
                
                this.ongoingTouches.push(touches[i]);
                let color = colorForTouch(touches[i]);
                this.ctx.fillStyle = color;
                this.ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
            }
    }
    
    handleMove (evtmouve) {
        console.log(this);
                    evtmouve.preventDefault();
                    
                    let touches = evtmouve.changedTouches;

                    this.ctx.lineWidth = 4;

                    for (let i = 0; i < touches.length; i++) {
                        let color = colorForTouch(touches[i]);
                        let idx = ongoingTouchIndexById(touches[i].identifier);

                        this.ctx.fillStyle = color;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.ongoingTouches[idx].pageX, this.ongoingTouches[idx].pageY);
                        this.ctx.lineTo(touches[i].pageX, touches[i].pageY);
                        this.ctx.closePath();
                        this.ctx.stroke();
                        this.ongoingTouches.splice(idx, 1, touches[i]); // mettre à jour la liste des touchers
                    }
    }
    handleEnd(evtend) {
                        evtend.preventDefault();
                        
                        let touches = evtend.changedTouches;

                        this.ctx.lineWidth = 4;

                        for (let i = 0; i < touches.length; i++) {
                            let color = colorForTouch(touches[i]);
                            let idx = ongoingTouchIndexById(touches[i].identifier);

                            this.ctx.fillStyle = color;
                            this.ctx.beginPath();
                            this.ctx.moveTo(this.ongoingTouches[i].pageX, this.ongoingTouches[i].pageY);
                            this.ctx.lineTo(touches[i].pageX, touches[i].pageY);
                            this.ongoingTouches.splice(i, 1); // On enlève le point
                        }
    }
    handleCancel(evtcancel){
        evtcancel.preventDefault();
        let touches = evtcancel.changedTouches;

        for (var i=0; i< touches.lenght; i++){
            this.ongoingTouches.splice(i, 1) //On retire le point + faire le pont avec le btn cancel
        }
    }

}

/*init() {
        this.canvas.addEventListener("touchstart", handleStart, false);
        this.canvas.addEventListener("touchend", handleEnd, false);
        this.canvas.addEventListener("touchcancel", handleCancel, false);
        this.canvas.addEventListener("touchleave", handleLeave, false);
        this.canvas.addEventListener("touchmove", handleMove, false);
    }*/