// ShowButton

const showButton = document.querySelector('.button--article')
const undBlog = [...document.querySelectorAll('.und-blogitem')]

showButton.addEventListener('click', () => {
   if (showButton) {
      showButton.style.display = 'none'
      undBlog.forEach((show) => {
         show.style.display = 'block'
      })
   }
})
