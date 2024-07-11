var header = document.querySelector('.navbar');
var lastScrollTop = 0;

// Función para determinar la dirección del scroll
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling hacia abajo
        header.classList.add('hidden');
    } else {
        // Scrolling hacia arriba
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});