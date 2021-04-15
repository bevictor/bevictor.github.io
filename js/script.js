const menuIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.navigation');

menuIcon.addEventListener('click',() => {
    navMenu.classList.toggle('navigation');
})