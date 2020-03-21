class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.ongoingTouches = [];
		this.ctx.fillStyle='black';
        console.log("canvas constructeur");
		console.log("ctx"+this.ctx);
    }

    ongoinTouchIndexById (idToFind){
        for (var i=0; i<this.ongoingTouches.length; i++) {
            var id = this.ongoingTouches[i].identifier;
            
            if (id == idToFind) {
              return i;
            }
          }
          return -1;    // toucher non trouvé
    }
    handleStart (evtstart) {

            evtstart.preventDefault();
            let touches = evtstart.changedTouches;

            for (let i = 0; i < touches.length; i++) {
                
                this.ongoingTouches.push(touches[i]);
                this.ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
            }
    }
    
    handleMove (evtmouve) {
        console.log ('dans levtmove');x
                    evtmouve.preventDefault();
                    let touches = evtmouve.changedTouches;
                    this.ctx.lineWidth = 4;
                    for (let i = 0; i < touches.length -1; i++) {
                        
                        console.log ('dans la boucle move');
                        //let idx = this.ongoingTouchIndexById(touches [i].identifier);

                        // console.log("move"+ idx);
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.ongoingTouches[i].pageX, this.ongoingTouches[i].pageY);
                        this.ctx.lineTo(touches[i+1].pageX, touches[i+1].pageY);
                        this.ctx.closePath();
                        this.ctx.stroke();
                        this.ongoingTouches.splice(i, 1, touches[i]); // mettre à jour la liste des touchers

                        console.log (this.ongoingTouches[i].pageX + ' ' + this.ongoingTouches[i].pageY +'movetomove')
                        console.log (touches[i+1].pageX + ' ' + touches[i+1].pageY + 'linetomove')
                    }
    }
    handleEnd(evtend) {
                        evtend.preventDefault(); 
                        let touches = evtend.changedTouches;
                        this.ctx.lineWidth = 4;
                        for (let i = 0; i < touches.length -1; i++) {
                            console.log ('dans la boucle end');
                            
                            //let idx = this.ongoingTouchIndexById(touches[i].identifier);

                            //console.log("end"+ idx);
                            this.ctx.beginPath();
                            this.ctx.moveTo(this.ongoingTouches[i].pageX, this.ongoingTouches[i].pageY);
                            this.ctx.lineTo(touches[i+1].pageX, touches[i+1].pageY);
                            this.ongoingTouches.splice(i, 1); // On enlève le point

                            console.log (this.ongoingTouches[i].pageX + ' ' + this.ongoingTouches[i].pageY +'moveto')
                            console.log (touches[i+1].pageX + ' ' + touches[i+1].pageY + 'lineto')
    }
    }
    /*handleCancel(evtcancel){
        evtcancel.preventDefault();
        let touches = evtcancel.changedTouches;
        for (var i=0; i< touches.lenght; i++){
            this.ongoingTouches.splice(i, 1) //On retire le point + faire le pont avec le btn cancel
        }
    }*/

    /*onTouch(evtclic){ // Où le placer ? 
        evtclic.preventDefault();
        if (evtclic.touches.length > 1 || (evtclic.type == "touchend" && evtclic.touches.length > 0))
        return;
        var newEvt = document.createEvent("MouseEvents");
        var type = null;
        var touch = null;
        switch (event.type) {
            case "touchstart": type = "mousedown"; touch = event.changedTouches[0];
            case "touchmove":  type = "mousemove"; touch = event.changedTouches[0];
            case "touchend":   type = "mouseup"; touch = event.changedTouches[0];
        }
        newEvt.initMouseEvent(type, true, true, event.originalTarget.ownerDocument.defaultView, 0,
            touch.screenX, touch.screenY, touch.clientX, touch.clientY,
            evtclic.ctrlKey, evtclic.altKey, evtclic.shirtKey, evtclic.metaKey, 0, null);
        event.originalTarget.dispatchEvent(newEvt);
    }*/
   
}