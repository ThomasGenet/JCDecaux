class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.vide = false;
        this.painting = false;
        this.finger = false;
        this.canvas.width = 300;
        this.canvas.height = 200;
        this.clearButton = document.getElementById("clear");
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = '#000000';
        this.startX = 2;
        this.startY = 2;

        this.signature();
        this.clear();

        //Effacer
        this.clearButton.addEventListener("click", () => {
            this.clear()
            this.vide = false;
        });
    }

    startPosition() {
        this.painting = true;
        this.draw(e);
    }

    finishedPosition() {
        this.painting = false;
        this.ctx.beginPath();

    }

    draw(e) {
        if (!this.painting) return;

        let mouseX;
        let mouseY;

        if (this.finger === false) {
            mouseX = e.clientX - this.canvas.getBoundingClientRect().left;
            mouseY = e.clientY - this.canvas.getBoundingClientRect().top;
        } else if (e.touches.length == 1) {
            mouseX = e.touches[0].pageX - this.canvas.getBoundingClientRect().left;
            mouseY = e.touches[0].pageY - this.canvas.getBoundingClientRect().top - (e.touches[0].pageY - e.touches[0].clientY);
        }

        this.vide = true;

        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(mouseX, mouseY);
        this.ctx.stroke();
        this.ctx.closePath();

        this.startX = mouseX;
        this.startY = mouseY;

    }

    signature() {
        //signature souris
        this.canvas.addEventListener('mousedown', (e) => {
            this.startX = e.clientX - this.canvas.getBoundingClientRect().left;
            this.startY = e.clientY - this.canvas.getBoundingClientRect().top;
            this.painting = true;
        }, false);
        this.canvas.addEventListener('mouseup', () => {
            this.ctx.closePath();
            this.painting = false;
        }, false);
        this.canvas.addEventListener('mousemove', (e) => {
            e.preventDefault();
            this.draw(e);
        }, false);
        
        // pour le tactile touchStart, touchEnd et touchMove
        this.canvas.addEventListener('touchstart', (e) => {
            this.startX = e.touches[0].pageX - this.canvas.getBoundingClientRect().left;
            this.startY = e.touches[0].pageY - this.canvas.getBoundingClientRect().top - (e.touches[0].pageY - e.touches[0].clientY);
            this.painting = true;
            this.finger = true;
        }, false);
        this.canvas.addEventListener('touchend', () => {
            this.ctx.closePath();
            this.painting = false;
            this.finger = false;
        }, false);
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            this.finger = true;
            this.draw(e);
        }, false);
        this.vide = true;

    }

    // vider le dessin du canvas
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
