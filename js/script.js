$(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
        $('.header').addClass('header_scroll');
    }
    else {
        $('.header').removeClass('header_scroll')
    }
});

$(document).ready(function(){
 $('.header-button').on("click", function(){
   $('.header-menu').toggleClass('header-menu_active'),
   $('.header-button').toggleClass('header-button_active')
 });

 $('.header-button_active').on("click", function(){
   $('.header-menu_active').removeClass('header-menu_active'),
   $('.header-button_active').removeClass('header-button_active')
 });

 $('.header-menu__item').on("click", function(){
   $('.header-menu_active').removeClass('header-menu_active'),
   $('.header-button_active').removeClass('header-button_active')
 });
});