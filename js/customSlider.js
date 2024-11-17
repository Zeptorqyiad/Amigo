const windowWidth = window.innerWidth
offset = 0

const sliderBlock = document.querySelector('.custom__slider--wrapper')

document.querySelector('.arrow-left').addEventListener('click', function () {
   if (windowWidth >= 425) {
      offset -= 250
      if (offset <= 0) {
         offset = 750
      }
      sliderBlock.style.left = -offset + 'px'
   }
   if (windowWidth < 424) {
      // offset -= width
      if (offset <= 0) {
         // offset = width
      }
      sliderBlock.style.left = -offset + 'px'
   }
})
document.querySelector('.arrow-right').addEventListener('click', function () {
   if (windowWidth >= 425) {
      offset += 250
      if (offset >= 750) {
         offset = 0
      }
      sliderBlock.style.left = -offset + 'px'
   }
   if (windowWidth < 424) {
      // offset += width
      if (offset > 750) {
         offset = 0
      }
      sliderBlock.style.left = -offset + 'px'
   }
})
