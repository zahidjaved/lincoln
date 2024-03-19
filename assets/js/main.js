// slick slider 

$(document).ready(function () {
  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [

      {
        breakpoint: 1153,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }

    ]



  });

});