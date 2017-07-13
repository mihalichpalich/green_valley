(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
jQuery(function($) {

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
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false,
    arrows: false,
  });

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

});

},{}]},{},[1]);
