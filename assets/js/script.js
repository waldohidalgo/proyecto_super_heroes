/*
Settings lightbox
*/
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 100,
});

/*
Settings carrusel
*/
const swiper = new Swiper(".carrusel_header", {
  slidesPerView: 1,

  spaceBetween: 0,
  breakpoints: {
    725: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*
Script Hamburguer
*/
$(function () {
  $(".wrapper_menu_hamburguesa").click(function () {
    $(".hamburger").toggleClass("is-active");
    $(".backdrop_menu_lateral").toggleClass("is-active");
  });
  $(".backdrop_menu_lateral").click(function () {
    $(".hamburger").trigger("click");
  });
});
