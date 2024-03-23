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


//Notification Toast Variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

//Notification Toast EcentListener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});



// Mobile menu variables

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMeu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-close-btn]');
const overlay = document.querySelector('[data-overlay]')

for(let i = 0; i < mobileMenuOpenBtn.length; i++){
    const mobileMenuCloseFunc = function () {
        mobileMeu[i].classList.remove('active')
        overlay.classList.remove('active')
    }

    mobileMenuOpenBtn[i].addEventListener('click', function (){
        mobileMeu[i].classList.add('active');
        overlay.classList.add('active')
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc)

}




// Accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}