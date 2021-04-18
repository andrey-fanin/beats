const hamburger = document.querySelector('.hamburger');
const body = document.body;
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeElement = document.querySelector('.hamburger-menu__close');

hamburger.addEventListener('click', e => {
    hamburgerMenu.style.display = 'block';
});

closeElement.addEventListener('click', e => {
    hamburgerMenu.style.display = 'none';
});

// function createModal(content) {
//  const overlayElement = document.createElement('div');
//  overlayElement.classList.add('overlay');

//  const template = document.querySelector('#overlayTemplate');

//  overlayElement.innerHTML = template.innerHTML;
//  overlayElement.addEventListener('click', e => {
//    if (e.target === overlayElement) {
//      closeElement.click();
//    }
//  })


//  const contentElement = overlayElement.querySelector('.content');
//  contentElement.innerHTML = content;

//  return overlayElement;
// }