let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.burger-menu');
let closer = document.querySelector('.burger-menu__closer');

let links = document.querySelectorAll('.burger-menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('burger-menu--active');
  closer.classList.toggle('closer');
}

burger.addEventListener('click' , toggleMenu);
