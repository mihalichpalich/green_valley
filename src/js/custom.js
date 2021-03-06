(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
jQuery(function($) {

  //main-nav
  $(document).ready(function(){
    $('.main-nav__link').each(function () {
      if (this.href == location.href) $(this).parent().addClass('main-nav__link--active');
    });
  });

  //hamburger
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(){
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
  $('.gallery__main-img-list').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false,
    arrows: false,
  });

  var windowWidth = $(window).width();
  if(windowWidth > 768)
  {
    jQuery('.gallery__main-img-list').not('.slick-initialized').slick({
        slidesToShow: 1,
        centerMode: true
    });
  };

  $(".gallery__nav-img-list").not('.slick-initialized').slick({
    slidesToShow:5,
    slidesToScroll:1,
    asNavFor:".gallery__main-img-list",
    dots:!1,
    centerMode:!0,
    accessibility:!1,
    arrows:!1,
    focusOnSelect:!0
  });

  //reviews
  $('#reviews').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots:!1,
    arrows: true,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false,
  });

  var windowWidth = $(window).width();
  if(windowWidth < 1200)
  {
    $('#reviews').not('.slick-initialized').slick({
      arrows: false,
    });
  };

  //offers
  $('.offers__slider').not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'ease-in-out',
    speed: 400,
    dots: true
  });

  // form valid
  $.validate({
    form: '#form',
    scrollToTopOnError : false,
    errorMessagePosition : $('#payment-form__bill-block-notice'),
    errorMessageTemplate: {
      container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
      messages: '<ul>{fields}</ul>',
      field: '<li>{msg}</li>'
    },
    validateOnBlur : false,
    addSuggestions : false
  });
  $('#payment-form__now-input, #payment-form__arrival-input').change(function(){
    if ($('#payment-form__now-input').prop("checked")) {
      $('#payment-form__now-arrival-input-card-number').attr('data-validation','number');
      $('#payment-form__now-arrival-input-cvv').attr('data-validation','number');
      $('#payment-form__now-arrival-card-name').attr('data-validation','required');
      $('#payment-form__now-arrival-input-card-date').attr('data-validation','number');
    } else {
      $('#payment-form__now-arrival-input-card-number').removeAttr('data-validation');
      $('#payment-form__now-arrival-input-cvv').removeAttr('data-validation');
      $('#payment-form__now-arrival-card-name').removeAttr('data-validation');
      $('#payment-form__now-arrival-input-card-date').removeAttr('data-validation');
    }
  });

  //room-info__slider

  $('#room-info__slider').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots:!1,
    arrows: true,
    fade: false,
    accessibility: false,
  });

  $('#room-info__slider-visible-lg').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots:!1,
    arrows: true,
    fade: false,
    accessibility: false,
  });

  //room-info__slider-zoom

  $('.room-info__slider-zoom').on('click', function(e){
    e.preventDefault();
    var zoomedImg = $(".slick-slide[class*='slick-current']").find('img').attr('src');
    $('#zoomer img').attr('src', zoomedImg);
    $('#zoomer').toggle(400);
    $('.zoomer__inner').toggle(100);
    $('.room-info__slider-zoom').toggle(400);
    $('.slick-arrow').css( 'visibility', 'hidden');
  });

  $('.zoomer--unzoom').on('click', function(e){
    e.preventDefault();
    $('#zoomer').toggle(400);
    $('.zoomer__inner').toggle(100);
    $('.room-info__slider-zoom').toggle(400);
    $('.slick-arrow').css( 'visibility', 'visible');
  });

  // //room-category
  // $('.room-category__inner').not('.slick-initialized').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   cssEase: 'ease-in-out',
  //   speed: 400,
  //   dots: true,
  // });

  // function initSlick() {
  //   var width = jQuery(window).width();
  //   if (width>1199) {
  //       jQuery('.room-category__inner').unslick();
  //   }
  // }

});


},{}]},{},[1]);
