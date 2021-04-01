'use strict'

//? Бургер-меню

const iconBurger = document.querySelector('.header__burger');
const bodyBurger = document.querySelector('.category__list');

if (iconBurger) {
    iconBurger.addEventListener("click", function(e) {
        bodyBurger.classList.toggle('_active');
    });
}