$(document).ready(function(){

 

  $('.slider').slick({
  	
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ],

});

});