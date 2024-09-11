// function limite de defilement reseaux sociaux
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__reseau__sociaux');
    const formulaire = document.querySelector('#formulaire');

    const headerHeight = header.offsetHeight;
    const formulaireOffsetTop = formulaire.offsetTop;
    const scrollPosition = window.scrollY;

    const headerTopPosition = header.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition + headerHeight >= formulaireOffsetTop) {
        header.style.position = 'absolute';
        header.style.top = `${formulaireOffsetTop - headerHeight}px`;
    } else {
        header.style.position = 'fixed';
        header.style.top = '0px';
    }

});

// function pour le barre de navigation version mobile
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {

        header.style.top = '-60px';
    } else {

        header.style.top = '0';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


// function boutton d'ouverture et fermeture menu burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-btn');
    const menuOverlay = document.getElementById('fullpage-menu');

    // Ajoute un événement au clic sur le bouton burger
    burgerBtn.addEventListener('click', function() {

        menuOverlay.classList.toggle('active');
    });
});

// function bouton play et pause video
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    }
});

video.addEventListener('pause', function() {
    playButton.style.display = 'block';
});

video.addEventListener('play', function() {
    playButton.style.display = 'none';
});