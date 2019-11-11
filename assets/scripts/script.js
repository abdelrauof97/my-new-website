if (window.innerWidth > 700) {
  if ($(window).scrollTop() > 10) {
    $('.navbar-outer').addClass('navbar-animated');
  }
  if ($(window).scrollTop() < 11) {
    $('.navbar-outer').removeClass('navbar-animated');
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.navbar-outer').addClass('navbar-animated');
    }
    if ($(window).scrollTop() < 11) {
      $('.navbar-outer').removeClass('navbar-animated');
    }
  });
} else {
  $('.navbar-outer').addClass('navbar-animated');
}
