const menuIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.navigation');

menuIcon.addEventListener('click',() => {
    navMenu.classList.toggle('navigation');
})