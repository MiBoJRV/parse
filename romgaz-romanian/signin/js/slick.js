$('.parnters__slider').slick({
  infinite: true,
  speed: 500,
  // adaptiveHeight: true,
  // centerMode: true,
});

$('.conf__slider').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 6,
    swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 6,
      }
    },
    {
        breakpoint: 1420,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4,
        }
      },
    {
      breakpoint: 1020,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 942,
      settings: {
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
  });