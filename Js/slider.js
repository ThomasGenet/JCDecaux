class Slider {
	constructor (nomClass){
		this.diapoImg = document.getElementsByClassName(nomClass);
		this.diaporama = 1;
		this.playing = 0;
		this.slideInterval = 0;
	}
	affichage(n){
			let i;
			this.diaporama = n;
			if (n > this.diapoImg.length) {this.diaporama = 1}
			if (n < 1) {this.diaporama = this.diapoImg.length}
			for (i = 0; i < this.diapoImg.length; i++) {
			
			this.diapoImg[i].style.opacity = "0";
			}
			this.diapoImg[(this.diaporama)-1].style.opacity = "1";
	}
}
