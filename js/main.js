$(function(){
    var mixer = mixitup('.services__content', {
        load: {
            filter: '.category-a'
        }
        
    });
    $('.slider').slick({
        arrows:false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                adaptiveHeight: true
              }
            }
            
          ]
      });
      
});
$(document).ready(function(){
    document.body.style.zoom = 0.75
});