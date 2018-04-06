import Swiper from 'swiper';

var clientSlider = new Swiper('.clients__slider-wrapper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 4,
  spaceBetween: 20,
  lazy: {
    loadPrevNext: true
  },
  breakpoints: {
    576: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.clients__slider-btn-next',
    prevEl: '.clients__slider-btn-prev',
  }
})