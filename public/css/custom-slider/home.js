(function ($) {
 "use strict";
 var initialized = false;
 var initSliders = function () {
  if (initialized) {
   return;
  }
  if (typeof $.fn.nivoSlider !== "function") {
   setTimeout(initSliders, 50);
   return;
  }
  initialized = true;
  var $sliderOne = $('#ensign-nivoslider');
  if ($sliderOne.length) {
   $sliderOne.nivoSlider({
    effect: 'slideInRight',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: false,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false
   });
  }
  var $sliderTwo = $('#ensign-nivoslider-2');
  if ($sliderTwo.length) {
    $sliderTwo.nivoSlider({
     effect: 'fade',
     slices: 15,
     boxCols: 8,
     boxRows: 4,
     animSpeed: 500,
     pauseTime: 5000,
     startSlide: 0,
     directionNav: true,
     controlNavThumbs: true,
     pauseOnHover: true,
     manualAdvance: false
    });
  }
  var $sliderThree = $('#ensign-nivoslider-3');
  if ($sliderThree.length) {
   $sliderThree.nivoSlider({
    effect: 'fade',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false
   });
  }
 };
 if (document.readyState === "complete") {
  initSliders();
 } else {
  $(window).on("load", initSliders);
 }
})(jQuery);
