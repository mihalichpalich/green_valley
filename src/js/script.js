$(document).ready(function() {

  //hamburger
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(){
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('main-nav__mobile-list--visible');
  };

  //rest-tabs
  $('.rest-tabs__link').on('click',function(e){
    e.preventDefault();
    var ident = $(this).attr('href');

    $('.rest-tabs__tab').removeClass('rest-tabs__tab--active');
    $(this).closest('.rest-tabs__tab').addClass('rest-tabs__tab--active');

    $('.rest-tabs__item').removeClass('rest-tabs__item--active');
    $(this).closest('.rest-tabs__inner').find(ident).addClass('rest-tabs__item--active');
  });

  //gallery
  $('.gallery__main-img-list').slick({
    infinite: true,
    cssEase:"ease-in-out",
    speed:400,
    prevArrow:false,
    nextArrow:false,
    // slidesToShow: 1,
    // centerMode: true
  });

  var windowWidth = $(window).width();
  if(windowWidth > 768)
  {
      jQuery('.gallery__main-img-list').slick({
          slidesToShow: 1,
          centerMode: true
      });
  }

});
