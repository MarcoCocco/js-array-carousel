//1- definisci un array di immagini.
//2- ottieni un riferimento all'elemento HTML che mostra l'immagine 
//   principale del carosello.
//3- ottieni i riferimenti agli elementi HTML che rappresentano 
//   le frecce del carosello.
//4- inizializza l'indice corrente dell'immagine.
//5- mostra l'immagine iniziale sul carosello.
//6- aggiungi un gestore di eventi alla freccia giù.
//7- incrementa l'indice corrente dell'immagine ad ogni click.
//8- mostra l'immagine corrente sul carosello.
//9- aggiungi un gestore di eventi alla freccia su.
//10- decrementa l'indice corrente dell'immagine ad ogni click.
//11- mostra l'immagine corrente sul carosello.

// definisci un array di immagini
let carouselImages = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// ottieni un riferimento all'elemento HTML che mostra l'immagine principale del carosello
let mainCarouselImgEl = document.getElementById('mainCarouselImg');
let listImgContainerEl = document.querySelector('.listImgContainer');

// ottieni i riferimenti agli elementi HTML che rappresentano le frecce del carosello
let upArrowEl = document.querySelector('.fa-circle-chevron-up');
let downArrowEl = document.querySelector('.fa-circle-chevron-down');

// inizializza l'indice corrente dell'immagine
let index = 0;

// mostra l'immagine iniziale sul carosello
mainCarouselImgEl.src = carouselImages[index];

let imgElements = document.querySelectorAll('.previewContainer');

imgElements[index].classList.add('active');

// aggiungi un gestore di eventi alla freccia giù
downArrowEl.addEventListener('click', function () {

    imgElements[index].classList.remove('active');

    // incrementa l'indice corrente dell'immagine
    index++;

    // BONUS 1
    if (index > carouselImages.length -1) {

        index = 0;

    } 
    
    // mostra l'immagine corrente sul carosello
    mainCarouselImgEl.src = carouselImages[index];

    imgElements[index].classList.add('active');
    

});

// aggiungi un gestore di eventi alla freccia su
upArrowEl.addEventListener('click', function () {

    imgElements[index].classList.remove('active');
    
    // decrementa l'indice corrente dell'immagine
    index--;

    // BONUS 1
    if (index < 0) {

        index = carouselImages.length - 1;

    }

    // mostra l'immagine corrente sul carosello
    mainCarouselImgEl.src = carouselImages[index];

    imgElements[index].classList.add('active');
    
    
});




