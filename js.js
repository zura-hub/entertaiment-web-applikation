function activeNav() {
    let activeEl = null;
    const navIcons = document.querySelectorAll('.navIcon');

    for (let i = 0; i < navIcons.length; i++) {
        navIcons[i].addEventListener('click', function () {
            if (activeEl !== null) {
                activeEl.style.filter = 'none';
            }
            activeEl = navIcons[i];
            activeEl.style.filter = 'brightness(0) invert(1)';
        });
    }
}



document.addEventListener('DOMContentLoaded', function () {
    activeNav();
});


//   carusell

window.onload = function () {
    const carousel = document.querySelector('.carusell');
    const container = carousel.querySelector('.carussel-container');
    const cards = container.querySelectorAll('.carusell-card');
    const btnLeft = document.querySelector('.prev-btn');
    const btnRight = document.querySelector('.next-btn');

    let currentPosition = 0; 
    const slideWidth = 320;

    btnRight.addEventListener('click', function () {
        currentPosition -= slideWidth; 
        if (currentPosition < -(cards.length - 1) * slideWidth) {
            currentPosition = 0; 
        }
        container.style.transform = `translateX(${currentPosition}px)`;
    });

    btnLeft.addEventListener('click', function () {
        currentPosition += slideWidth; 
        if (currentPosition > 0) {
            currentPosition = -(cards.length - 1) * slideWidth;
        }
        container.style.transform = `translateX(${currentPosition}px)`;
    });
};
