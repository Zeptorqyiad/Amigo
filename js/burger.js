// Burger Menu

const burgerLine = [...document.querySelectorAll('.header--burger__list')]
const burgerMenu = [...document.querySelectorAll('.menu__icon')]
const menu = [...document.querySelectorAll('.menu')]

burgerLine.forEach((burgerIcon) => {
   burgerIcon.addEventListener('click', () => {
      if (burgerLine) {
         burgerIcon.classList.toggle('active')
         if (burgerIcon.classList.contains('active')) {
            resetBurger(burgerIcon)
         }
         burgerMenu.forEach((el) => {
            el.classList.toggle('active')
            resetBurger(el)
         })
         menu.forEach((wrap) => {
            wrap.classList.toggle('active')
            resetBurger(wrap)
         })
         document.body.classList.toggle('_lock')
         if (document.body.classList.contains('_lock')) {
            window.addEventListener('scroll', () => {
               document.body.classList.remove('_lock')
            })
         }
      }
   })
})
function resetBurger(props) {
   window.addEventListener('scroll', () => {
      props.classList.remove('active')
   })
}

//=======================================================================
