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