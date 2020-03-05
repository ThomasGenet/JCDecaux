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


let boutonReserverVelo = function () {
	infoReserver.style.display = "block";
	btnInfoReserver.style.display = "block";
	btnInfoReserver.innerHTML = "Réserver un vélo";
};

let etatReservation = function () {
	if (nbbike > 0) {
		infoReserver.innerHTML = "Pas de vélo disponible; Impossible de réserver."
		infoReserver();
	} else {
		btnInfoReserver();
	}
}

//Vérification nom & prenom
//Transformer en objet
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
console.log(nom.value);

function verifNom(nom){
	if(nom.value.length < 2 || nom.value.length > 25)
	{
	   return false;
	
	}
	else
	{
	   return true;
	   
	};
}
console.log(verifNom(nom));

function verifPrenom(prenom){
	if(prenom.value.length < 2 || prenom.value.length > 25)
	{
	   return false;
	}
	else
	{
	   return true;
	};
}
console.log(verifPrenom(prenom));

localStorage.setItem('nom',document.getElementById('nom').value);
localStorage.setItem('prenom',document.getElementById('prenom').value);



//let canvas = document.getElementById('canvas');

//btnInfoReserver.onclick = function(){
//	canvas.style.
//}