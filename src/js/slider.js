  // import Swiper JS
import Swiper, { Pagination } from 'swiper';

  // init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
      // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
});

const swiperPoster = new Swiper('.swiper-poster', {
    // configure Swiper to use modules
    modules: [Pagination],
      // Optional parameters
    direction: 'horizontal',
  autoplay: {
      delay:500,
    },
    loop: true,
});
