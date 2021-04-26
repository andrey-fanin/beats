const buttonsColors = document.querySelectorAll('.colors__item-title');
const listColors = document.querySelector('.colors__list');
console.log(buttonsColors);
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
});
