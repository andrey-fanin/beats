const buttonsColors = document.querySelectorAll('.colors__item-title');
const listColors = document.querySelector('.colors__list');
const closeColors = document.querySelector('.colors__item-close');

document.addEventListener('click', e => {
 for( let btn of buttonsColors) {
     if (btn.parentNode.classList.contains('colors__item--active') && e.target !== btn ) {
       btn.parentNode.classList.remove('colors__item--active')
     }
 }  

  for( let btn of buttonsColors) {
    if (e.target === btn) {
     btn.parentNode.classList.toggle('colors__item--active'); 
   }
  }
  
  for(let cls of closeColors) {
    if (e.target === cls) {
     btn.parentNode.classList.toggle('colors__item--active'); 
   }
  }
});