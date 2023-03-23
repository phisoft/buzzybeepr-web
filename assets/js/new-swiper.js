(function() {
    "use strict";

    // =====New Swiper JS===== 
  const swiper = new Swiper('.sample-slider', {
    speed: 600,
    loop: true,                         //loop
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    slidesPerView: 3,      
    spaceBetween: 20,              //how many slides to show
    centeredSlides: true,               //centering the first slide

    //  Breakpoints
  breakpoints: {
    // When window width is <= 767px (mobile view)
    414: {
      spaceBetween: 10
    }
  },
    // pagination: {                       //pagination(dots)
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    // },
    // navigation: {                       
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

})

})()