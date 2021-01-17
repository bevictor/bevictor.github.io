// toggle menu - needs refining
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigation');
menu.addEventListener('click',toggleNav);
function toggleNav () {
    if (nav.classList.contains('navigation')) {
        nav.classList.remove('navigation');
    } else {
        nav.classList.add('navigation');
    }
}