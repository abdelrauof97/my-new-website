document.addEventListener("DOMContentLoaded", function(event) {
  if (window.innerWidth > 700) {
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
  } else {
    $('.navbar-outer.nav-animate').addClass('navbar-original');
  }

});
