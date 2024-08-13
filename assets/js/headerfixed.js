// navbar-fixed
// Ensure the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const navtop = document.querySelector('.navtop');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > navtop.offsetHeight) {
            navbar.classList.add('scrolled-top');
        } else {
            navbar.classList.remove('scrolled-top');
        }
    });
});