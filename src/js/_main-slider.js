import Swiper from 'swiper';

var mainSlider = new Swiper('.main-slider',{
  loop: true,
  autoplay: {
    delay: 4000
  },
  // effect: 'fade',
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