// hamburger
let hamburgerBtn = document.querySelector('.fa-bars');
console.log(hamburgerBtn);
// id nav links 
let navLinks = document.querySelector('.navbar-list');
console.log(navLinks);
// event handler
function showNav() {
    navLinks.classList.toggle('open');
    console.log(navLinks.hasAttribute('open'));
}
// bind event listener
hamburgerBtn.addEventListener('click', showNav);

// update form checkboxes

const checkboxArray = document.querySelectorAll('checkbox-box');