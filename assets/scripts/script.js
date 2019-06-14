document.addEventListener("DOMContentLoaded", function(event) {
  if ($(window).scrollTop() > 1) {
    $('.navbar-outer').addClass('navbar-original');
  }
  if ($(window).scrollTop() < 2) {
    $('.navbar-outer').removeClass('navbar-original');
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $('.navbar-outer').addClass('navbar-original');
    }
    if ($(window).scrollTop() < 2) {
      $('.navbar-outer').removeClass('navbar-original');
    }
  });
});
