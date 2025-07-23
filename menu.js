document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.left_nav img');
    const menu = document.getElementById('mobileMenu');
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
        document.body.classList.toggle('menu-open')
    });
});