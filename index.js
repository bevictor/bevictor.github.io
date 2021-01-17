// toggle menu - needs refining
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click',toggleNav);
function toggleNav () {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden');
    } else {
        nav.classList.add('hidden');
    }
}