art1 = {
   bgColor: '#FFA777',
   bgInfoBlock: '#F87D4B',
   image: '../assets/img/food/1.png',
   productTitle: 'Корм полнорационый для крыс',
   productDesc:
      'Это сбалансированный полнорационный корм, разработанный в соответствии с пищевыми потребностями кролика, который содержит качественные ингредиенты и все необходимые для организма питательные вещества, витамины, минералы и аминокислоты, способные обеспечить хорошее самочувствие вашего питомца.',
   minImg: '../assets/img/anim/10.png',
}
art2 = {
   bgColor: '#B2D987',
   bgInfoBlock: '#80BC66',
   image: '../assets/img/food/3.png',
   productTitle: 'Корм полнорационый для хомяков',
   minImg: '../assets/img/anim/12.png',
}
art3 = {
   bgColor: '#DDD565',
   bgInfoBlock: '#C4B300',
   image: '../assets/img/food/4.png',
   productTitle: 'Лакомство для грызунов',
   minImg: '../assets/img/anim/13.png',
}
art4 = {
   bgColor: '#DFC0DE',
   bgInfoBlock: '#C278C0',
   image: '../assets/img/food/5.png',
   productTitle: 'Корм полнорационый для морской свинки',
   minImg: '../assets/img/anim/13.png',
}
art5 = {
   bgColor: '#A2E1F3',
   bgInfoBlock: '#04ADC8',
   image: '../assets/img/food/6.png',
   productTitle: 'Корм полнорационый для кроликов и шиншилл',
   minImg: '../assets/img/anim/14.png',
}
art6 = {
   bgColor: '#FFBF71',
   bgInfoBlock: '#FFA33B',
   image: '../assets/img/food/2.png',
   productTitle: 'Корм полнорационый для попугаев',
   minImg: '../assets/img/anim/11.png',
}

// Интерактив страницы
let bgColor = document.getElementById('bgColor')
let bgInfoBlock = document.getElementById('bgInfoBlock')
let prevSlide = document.querySelectorAll('.previewSlide')
let productTitle = document.getElementById('productTitle')
let productDesc = document.getElementById('productDesc')
let bgColorFooter = document.getElementById('bgColorFooter')
let hr1 = document.getElementById('hr1')
let hr2 = document.getElementById('hr2')
let minImgTab = document.getElementById('minImgTab')

if (window.location.hash === '#art01') {
   bgColor.style.backgroundColor = art1.bgColor
   bgInfoBlock.style.backgroundColor = art1.bgInfoBlock
   hr1.style.backgroundColor = art1.bgInfoBlock
   hr2.style.backgroundColor = art1.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art1.image))
   productTitle.textContent = art1.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art1.bgColor
   minImgTab.src = art1.minImg
} else if (window.location.hash === '#art02') {
   bgColor.style.backgroundColor = art2.bgColor
   bgInfoBlock.style.backgroundColor = art2.bgInfoBlock
   hr1.style.backgroundColor = art2.bgInfoBlock
   hr2.style.backgroundColor = art2.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art2.image))
   productTitle.textContent = art2.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art2.bgColor
   minImgTab.src = art2.minImg
} else if (window.location.hash === '#art03') {
   bgColor.style.backgroundColor = art3.bgColor
   bgInfoBlock.style.backgroundColor = art3.bgInfoBlock
   hr1.style.backgroundColor = art3.bgInfoBlock
   hr2.style.backgroundColor = art3.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art3.image))
   productTitle.textContent = art3.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art3.bgColor
   minImgTab.src = art3.minImg
} else if (window.location.hash === '#art04') {
   bgColor.style.backgroundColor = art4.bgColor
   bgInfoBlock.style.backgroundColor = art4.bgInfoBlock
   hr1.style.backgroundColor = art4.bgInfoBlock
   hr2.style.backgroundColor = art4.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art4.image))
   productTitle.textContent = art4.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art4.bgColor
   minImgTab.src = art4.minImg
} else if (window.location.hash === '#art05') {
   bgColor.style.backgroundColor = art5.bgColor
   bgInfoBlock.style.backgroundColor = art5.bgInfoBlock
   hr1.style.backgroundColor = art5.bgInfoBlock
   hr2.style.backgroundColor = art5.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art5.image))
   productTitle.textContent = art5.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art5.bgColor
   minImgTab.src = art5.minImg
} else if (window.location.hash === '#art06') {
   bgColor.style.backgroundColor = art6.bgColor
   bgInfoBlock.style.backgroundColor = art6.bgInfoBlock
   hr1.style.backgroundColor = art6.bgInfoBlock
   hr2.style.backgroundColor = art6.bgInfoBlock
   prevSlide.forEach((el) => (el.src = art6.image))
   productTitle.textContent = art6.productTitle
   productDesc.textContent = art1.productDesc
   bgColorFooter.style.backgroundColor = art6.bgColor
   minImgTab.src = art6.minImg
}
