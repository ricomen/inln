import Swiper from 'swiper';
import './footer-menu'
import './mobile-menu'

var mainSlider = new Swiper('.main-slider',{
  loop: true,
  autoplay: {
    delay: 4000
  },
  effect: 'fade',
  slidesPerView: 1,
  lazy: {
    loadPrevNext: true
  },
  pagination: {
    el: '.main-slider__pagination',
    type: 'bullets',
    dynamicBullets: true
  }
});
  
var clientSlider = new Swiper('.catalog__slider-list', {
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