//Nouvel instance diapo
let monSlider = new Slider("diapo");

let pauseButton = document.getElementById('pause');

let btnPrev = document.getElementById('precedent');
let btnNext = document.getElementById('suivant');

//Affichage du diaporama
monSlider.affichage(monSlider.diaporama);

pauseButton.innerHTML = 'Pause';
monSlider.playing = true;
monSlider.slideInterval = setInterval(function () {
	monSlider.affichage(monSlider.diaporama + 1);
}, 5000);

pauseButton.onclick = function () {
	if (monSlider.playing) {
		pauseButton.innerHTML = 'Play';
		monSlider.playing = false;
		clearInterval(monSlider.slideInterval);
	} else {
		pauseButton.innerHTML = 'Pause';
		monSlider.playing = true;
		monSlider.slideInterval = setInterval(function () {
			monSlider.affichage(monSlider.diaporama + 1);
		}, 5000);
	}
};

//Flèche afficher gauche & droite
btnNext.onclick = function () {
	monSlider.affichage(monSlider.diaporama + 1);
}
btnPrev.onclick = function () {
	monSlider.affichage(monSlider.diaporama - 1);
}
//Flèche clavier gauche & droite 
document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 37:
			//left
			monSlider.affichage(monSlider.diaporama - 1);
			break;
		case 39:
			//right
			monSlider.affichage(monSlider.diaporama + 1);
			break;
	}
}