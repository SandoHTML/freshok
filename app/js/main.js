$(function () {

    $('.slider-discount__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider-discount__arrow--prev'),
        nextArrow: $('.slider-discount__arrow--next'),
        responsive: [{
          breakpoint: 1580,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            dots: true
          }
        }]

      });




    $('.brands__list').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        },
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }]

    });



    $('.header__burger, .burger__btn').on('click', function () {
      $('.burger').toggleClass('burger--active')
      $('body').toggleClass('lock')
  })




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