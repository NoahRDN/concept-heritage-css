window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__reseau__sociaux');
    const formulaire = document.querySelector('#formulaire');

    const headerHeight = header.offsetHeight;
    const formulaireOffsetTop = formulaire.offsetTop;
    const scrollPosition = window.scrollY;

    // Position du haut de la fenêtre par rapport au haut du document
    const headerTopPosition = header.getBoundingClientRect().top + window.scrollY;

    // Si le bas de l'élément header atteint ou dépasse le haut du formulaire, le fixe
    if (scrollPosition + headerHeight >= formulaireOffsetTop) {
        header.style.position = 'absolute';
        header.style.top = `${formulaireOffsetTop - headerHeight}px`;
    } else {
        header.style.position = 'fixed';
        header.style.top = '0px';
    }
});