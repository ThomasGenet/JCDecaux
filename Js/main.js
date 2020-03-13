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


/*Marker start*/
// Affichage de la carte
let mymap = new Map("map", 50.850340, 4.351710);

//Affichage des markers
mymap.affichage();
mymap.addIconMarker();

//Affichage bouton "réserver vélo"
let infoReserver = document.getElementById('inforeserver');
let btnInfoReserver = document.getElementById('reserver');
let nbbike = document.getElementById('nb_bike');


btnInfoReserver.addEventListener("click", function(e){
	console.log('Click bouton reserver');
	e.preventDefault();
	
			let saisienom = document.getElementById ('nom').value;
			let saisieprenom = document.getElementById ('prenom').value;
			let canvas = document.getElementById('canvas');
			if((nom.value.length < 2 || nom.value.length > 25) && (prenom.value.length < 2 || prenom.value.length > 25)){
				alert("veuillez indiquer nom et prenom dont les tailles sont comprises entre 2 et 25");
				canvas.style.display = 'none';
				
			}
			else{
				localStorage.setItem('prenom',document.getElementById('prenom').value);
				localStorage.setItem('nom',document.getElementById('nom').value);
				canvas.style.display = 'block';
				
			}
});
let canvastouch = new Canvas();
console.log (canvastouch.ctx);
btnInfoReserver.addEventListener ('click', function (){
	let actioncanvas = document.getElementById('annulvalid');
    let canvas = document.getElementById('canvas');
                                if (canvas.style.display == 'block') {
                                    actioncanvas.style.display = 'block';
                                } else {
                                    actioncanvas.style.display = 'none';
                                }


// canvastouch.init();
		canvas.addEventListener("touchstart", canvastouch.handleStart, false);
        canvas.addEventListener("touchend", canvastouch.handleEnd, false);
        canvas.addEventListener("touchcancel", canvastouch.handleCancel, false);
        canvas.addEventListener("touchleave", canvastouch.handleLeave, false);
       	canvas.addEventListener("touchmove", canvastouch.handleMove, false);
//canvastouch.touchstart();
//canvastouch.touchdeplace();
}
);


