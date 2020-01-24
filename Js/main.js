class slider {
    constructor(container) {
        this.currentIndex = 0;
        this.isPaused = false;
        this.slides = container.querySelectorAll('.diapo');
        this.btnPrev = container.querySelector('.precedent');
        this.btnNext = container.querySelector('.suivant');
        this.btnPause = container.querySelector('#pause');
        this.lastIndex = this.slides.length - 1;
        v

        //Initialise les évènements
        this.bindEvents();

        //Initialise première slide
        this.slideToIndex(this.currentIndex, false);

        //Autoplay
        this.startAutoplay();
    };

    autoplay() {

        //Si le slider en pause alors on reprend à la suivante
        if (this.isPaused) {
            this.slideToIndex(false);
        };

        //Timer
        this.timer = setTimeout( function() {
            this.slideToIndex(false);

            this.autoplay();
        }, 1000);
        console.log(setTimeout);
    }

    bindEvents() {
        this.btnPrev.addEventListener('click', function () {
            this.slideToPrev
        });
        this.btnNext.addEventListener('click', function () {
            this.slideToNext
        });
        if (this.btnPause) {
            this.btnPause.addEventListener('click', function () {
                this.toggleAutoplay
            });
        };
    }

    slideToPrev() {
        this.currentIndex = this.currentIndex - 1 > -1 ? this.currentIndex - 1 : this.lastIndex;
        this.slideToIndex(this.currentIndex);
    };
    slideToNext(pauseSlider = true) {
        this.currentIndex = this.currentIndex + 1 <= this.lastIndex ? this.currentIndex + 1 : 0;
        this.slideToIndex(this.currentIndex, pauseSlider);
    };

    // indique si on doit stopper l'autoplay quand on change de slide

    slideToIndex(index, pauseSlider = true) {
        if (pauseSlider) {
            this.pauseAutoplay();
        }
        // suppression de la classe 'active' pour toutes les slides du slider
        this.slides.forEach(slide => {
            slide.classList.remove('slide-active');
        })

        // avant d'appliquer d'activer l'index désiré
        this.slides[index].classList.add('slide-active');
    }

    pauseAutoplay() {
        if (this.btnPause) {
            this.btnPause.innerText = 'Lecture automatique';
        };
        clearTimeout(this.timer);
        this.isPaused = true;
    }

    startAutoplay() {
        if (this.btnPause) {
            this.btnPause.innerText = 'Pause'
        };
        this.autoplay();
        this.isPaused = false;
    };

    toggleAutoplay() {
        if (!this.isPaused) {
            this.pauseAutoplay();
        } else {
            this.startAutoplay();
        }
    }


}
document.querySelectorAll('#diaporama').forEach((slider) => {
    new Slider(slider)
});
