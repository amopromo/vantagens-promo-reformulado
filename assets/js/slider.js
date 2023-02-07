jQuery(document).ready(function ($) {
    $(".slider-parceiros").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: false,
      prevArrow: "<img class='up' src='assets/img/prev.svg'>",
      nextArrow: "<img class='down' src='assets/img/next.svg'>",
    });
  });