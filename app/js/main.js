$(function () {

    $('.slider-discount__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-discount__arrow--prev'),
        nextArrow: $('.slider-discount__arrow--next')
      });






  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 

  var config = {
      controls: {
        scope: 'local'
      }
    };

 
    var mixer = mixitup(containerEl1, config);
    var mixer = mixitup(containerEl2, config);

  });