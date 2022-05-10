let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let modalOverlay = document.querySelector('.modal__overlay')
let buyButton = document.querySelector('.product-card__button');
let modalWindow = document.querySelector('.modal__wrapper');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buyButton.addEventListener('click', function () {
  if (modalOverlay.classList.contains('modal__overlay--closed')) {
    modalOverlay.classList.remove('modal__overlay--closed');
    modalOverlay.classList.add('modal__overlay--opened');
    modalWindow.classList.remove('modal__wrapper--closed');
    modalWindow.classList.add('modal__wrapper--opened');
  } else {
    modalOverlay.classList.add('modal__overlay--closed');
    modalOverlay.classList.remove('modal__overlay--opened');
    modalWindow.classList.add('modal__wrapper--closed');
    modalWindow.classList.remove('modal__wrapper--opened');
  }
});

