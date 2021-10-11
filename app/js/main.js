$(function () {

    $('.slider-discount__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-discount__arrow--prev'),
        nextArrow: $('.slider-discount__arrow--next')
      });




    $('.brands__list').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
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