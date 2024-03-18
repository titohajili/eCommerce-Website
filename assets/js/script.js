'use strict'
//modal variables
const modal = document.querySelector('[data-modal]');
const moadalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

//modal function
const modalCloseFunc = function () {modal.classList.add('closed')}

//modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
moadalCloseBtn.addEventListener('click', modalCloseFunc);