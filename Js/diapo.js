var diaporama = 1;
affichage(diaporama);

function boutons(n) {
affichage(diaporama += n);
}

function actifIndic(n) {
affichage(diaporama = n);
}

function affichage(n) {
var i;
var diapoImg = document.getElementsByClassName("diapo");
var indic = document.getElementsByClassName("demo");
if (n > diapoImg.length) {diaporama = 1}
if (n < 1) {diaporama = diapoImg.length}
for (i = 0; i < diapoImg.length; i++) {

diapoImg[i].style.opacity = "0";
}
for (i = 0; i < indic.length; i++) {
indic[i].className = indic[i].className.replace(" numeros", "");
}
diapoImg[diaporama-1].style.opacity = "1";

}

/* Play / stop */
var slide = document.querySelector('#diaporama')
var slides = slide.querySelectorAll('.cadre-diapo .diapo');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,2000);


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(function(){
		boutons(1);
	}
	,2000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};
