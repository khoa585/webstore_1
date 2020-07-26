import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
let er = ".swiper-button-next" +
  ".btN";
let er_ = ".swiper-button-prev" +
  ".btP";
export const Param_ = {
  Swiper,
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  freeMode: true,
  freeModeSticky: true,
  loop: true,
  autoplay: {
    delay: 8000000,
    disableOnInteraction: false
  },
  height: 50,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  }
};
export const Paramc = {
  direction: "vertical",
  Swiper,
  loop: true,
  navigation: {
    nextEl: er,
    prevEl: er_,
  },
  autoplay: {
    delay: 80000,
    disableOnInteraction: false
  }
};
export const Params = {
  direction: 'vertical',
  Swiper,
  pagination: {
    el: '.swiper-paginations',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 80000,
    disableOnInteraction: false,
  },
};
export const Param = {
  Swiper,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  spaceBetween: 115,
  autoplay: {
    delay: 80000,
    disableOnInteraction: false,
  },
};