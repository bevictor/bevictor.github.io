const hamburger = document.querySelector('.hamburger-icon');
const navItems = document.querySelector('#nav');

hamburger.addEventListener('click',() => {
    navItems.classList.toggle('hidden');
})