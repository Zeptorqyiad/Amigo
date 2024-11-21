// Burger Menu

const burgerLine = document.querySelector('.header--burger__list')
const burgerMenu = document.querySelector('.menu__icon')

burgerLine.addEventListener('click', () => {
   if (burgerLine) {
      burgerLine.classList.toggle('active')
      burgerMenu.classList.toggle('active')
      document.body.classList.toggle('_lock')
   }
})

window.addEventListener('resize', function () {
   if (window.matchMedia('(min-width: px)').matches) {
      burgerLine.classList.remove('active')
      burgerMenu.classList.remove('active')
      document.body.classList.remove('_lock')
   }
})

// ChangeClick event
$(function () {
   $('.fouthPage__animal_type--chooseBlock').on(
      'click',
      '.type-anim',
      function (event) {
         $('.type-anim', event.delegateTarget).removeClass('active-type')
         $(this).addClass('active-type')
      }
   )
})

// Popup

const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 800

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '')
         const curentPopup = document.getElementById(popupName)
         popupOpen(curentPopup)
         e.preventDefault()
      })
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener('click', function (e) {
         popupCLose(el.closest('.popup'))
         e.preventDefault()
      })
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open')
      if (popupActive) {
         popupCLose(popupActive, open)
      }
      curentPopup.classList.add('open')
      curentPopup.addEventListener('click', function (e) {
         if (!e.target.closest('.popup__content')) {
            popupCLose(e.target.closest('.popup'))
         }
      })
   }
}
function popupCLose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open')
   }
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open')
      popupCLose(popupActive)
   }
})
;(function () {
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this
         while (node) {
            if (node.matches(css)) return node
            else node = node.parentElement
         }
         return null
      }
   }
})()
;(function () {
   if (!Element.prototype.matches) {
      Element.prototype.matches =
         Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector
   }
})()
