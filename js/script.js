$(document).ready(function() {

  $('#carouselPurchased').on('slide.bs.carousel', function(e) {
    var id = '#carouselPurchased';
    multipleCarousel(e, id);
  }).carousel({
    interval: false
  });

  $('#carouselRecommended').on('slide.bs.carousel', function(e) {
    var id = '#carouselRecommended';
    multipleCarousel(e, id);
  }).carousel({
    interval: false
  });

  $('#carouselInteresting').on('slide.bs.carousel', function(e) {
    var id = '#carouselInteresting';
    multipleCarousel(e, id);
  }).carousel({
    interval: false
  });

});

/*scrolling buton function*/

$(window).scroll(function() {
  if ($(this).scrollTop() != 0) {
    $('.button-to-top').fadeIn();
  } else {
    $('.button-to-top').fadeOut();
  }
  $('.button-to-top').click(function() {

    const scrollHeight = window.scrollY,
      scrollStep = Math.PI / (1000 / 15),
      cosParameter = scrollHeight / 2;
    var scrollCount = 0,
      scrollMargin,
      scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
          scrollCount = scrollCount + 1;
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
          window.scrollTo(0, (scrollHeight - scrollMargin));
        } else clearInterval(scrollInterval);
      }, 15);
  });
});



function multipleCarousel(e, id) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var viewport = $(window).width();
  var itemsPerSlide = (viewport >= 992) ? 4 : 3;
  var totalItems = $(id + ' .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(id + ' .carousel-item').eq(i).appendTo(id + ' .carousel-inner');
      } else {
        $(id + ' .carousel-item').eq(0).appendTo(id + ' .carousel-inner');
      }
    }
  }
}
