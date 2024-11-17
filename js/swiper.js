let homeSwiper = new Swiper('.home__swiper', {
   direction: 'vertical',
   slidesPerView: 1,
   mousewheel: true,
})

let aboutSwiper = new Swiper('.about__swiper', {
   direction: 'vertical',
   slidesPerView: 1,
   mousewheel: true,
})

let swiperThumb = new Swiper('.food__swiper-thumb', {
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
})

let foodSwiper = new Swiper('.food__swiper', {
   spaceBetween: 10,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   thumbs: {
      swiper: swiperThumb,
   },
})
