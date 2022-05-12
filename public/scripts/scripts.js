// jiggly button
var $button = document.querySelector('.jiggly-button');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

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