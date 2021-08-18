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
        slidesToScroll: 3
      });
});