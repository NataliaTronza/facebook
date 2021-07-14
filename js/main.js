window.onload = function(){

new Swiper('.image-slider',{
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 30,
  slidesPerView: 1,

  breakpoints: {
    550: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    }
  },

});


new Swiper('.buisness-slider',{
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 30,
  slidesPerView: 1,
  autoHeight: false,

  slidesPerColumn: 4,

});

// Swiper

document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
  document.querySelector('.logo-text').classList.toggle('logo-text--active');
  document.querySelector('.blur-holder').classList.toggle('blur');

};

document.querySelector('.nav__list').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  document.querySelector('.nav__list-holder').classList.toggle('nav__list-holder--visible');
};
}

