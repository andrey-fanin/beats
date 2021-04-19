let burger  = document.querySelector('.hamburger');
let overlay = document.querySelector('.hamburger-menu');
let closer = document.querySelector('.hamburger-menu__closer');

let links = document.querySelectorAll('.hamburger-menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('hamburger--active');
  overlay.classList.toggle('hamburger-menu--active');
  closer.classList.toggle('closer');
}

burger.addEventListener('click' , toggleMenu);