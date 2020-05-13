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


// remove the branding from the reviews widget
if (document.querySelector('.reviews')) {
  var xinterval = setInterval(function(){
    if (document.querySelector('.eatr-reviews-skeleton-component.jsx-721437294 a[href="https://elfsight.com/trustpilot-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=trustpilot-reviews&utm_term=rauof.com&utm_campaign=free-widget"]')) {
      document.querySelector('.eatr-reviews-skeleton-component.jsx-721437294 a[href="https://elfsight.com/trustpilot-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=trustpilot-reviews&utm_term=rauof.com&utm_campaign=free-widget"]').remove();
      clearInterval(xinterval);
    }
  }, 1);
}
