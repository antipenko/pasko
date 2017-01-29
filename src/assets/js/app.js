$(document).foundation();

 $(document).ready(function(){
      $('.ps-slider-post').slick({
        
      });

       $('.ps-instagram').slick({
    		slidesToShow: 8,
    		slidesToScroll: 1,
    		autoplay: true,
  			autoplaySpeed: 1000,
  			variableWidth: true,
  			responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1368,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },{
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
    });

 