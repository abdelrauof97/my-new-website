document.addEventListener("DOMContentLoaded", function(event) {
  if ($(window).scrollTop() > 1) {
    $('.navbar-outer.nav-animate').addClass('navbar-original');
  }
  if ($(window).scrollTop() < 2) {
    $('.navbar-outer.nav-animate').removeClass('navbar-original');
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $('.navbar-outer.nav-animate').addClass('navbar-original');
    }
    if ($(window).scrollTop() < 2) {
      $('.navbar-outer.nav-animate').removeClass('navbar-original');
    }
  });
});
