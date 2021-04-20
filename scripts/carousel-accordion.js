const buttons = document.querySelectorAll('.team__name');
const list = document.querySelector('.team__list');
console.log(buttons);
document.addEventListener('click', e => {
 for( let btn of buttons) {
     if (btn.parentNode.classList.contains('active') && e.target !== btn ) {
       btn.parentNode.classList.remove('active')
     }
 }  

  for( let btn of buttons) {
    if (e.target === btn) {
     btn.parentNode.classList.toggle('active'); 
   }
  }
});
