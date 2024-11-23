// Burger Menu

const burgerLine = [...document.querySelectorAll('.header--burger__list')]
const burgerMenu = [...document.querySelectorAll('.menu__icon')]
const menu = [...document.querySelectorAll('.menu')]

burgerLine.forEach((burgerIcon) => {
   burgerIcon.addEventListener('click', () => {
      if (burgerLine) {
         burgerIcon.classList.toggle('active')
         burgerMenu.forEach((el) => {
            el.classList.toggle('active')
         })
         menu.forEach((wrap) => {
            wrap.classList.toggle('active')
         })
         document.body.classList.toggle('_lock')
      }
   })
})

window.addEventListener('scroll', function () {
   burgerLine.classList.remove('active')
   burgerMenu.classList.remove('active')
   menu.classList.remove('active')
   document.body.classList.remove('_lock')
})
//=======================================================================
