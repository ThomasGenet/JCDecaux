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

//var maCarte = initMap(lat, lon); 
      
/*Marker start
var marker1 = new L.marker ([50.63333, 3.0667], 11);
console.log('marker1');



function clicMarker(){
	alert("cliqué"+this.number);
	console.log('clicMarker');
};
console.log('clicMar');

marker1.number = 1;

marker1.addEventListener('click',clicMarker);
console.log('Listen');

marker1.addTo(maCarte);
console.log('marker2');

// https://api.jcdecaux.com/vls/v1/stations?contract=lille&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
//https://api.jcdecaux.com/vls/v3/stations?contract=bruxelles&apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
//https://api.jcdecaux.com/vls/v3/contracts?apiKey=ab8ddcadd4505d6df9e077b7e932033e531013fa
*/
let mymap = new Map ("map");

mymap.affichage(mymap.map);