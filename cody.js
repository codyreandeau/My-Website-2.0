$(document).ready(function() {
  
  $(window).scroll(function () { 
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 101) {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});