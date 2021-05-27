
(function () {

  'use strict';

    var breakpoint = window.matchMedia('(min-width: 600px)');   
    
    var swiper = void 0;    
    
    var breakpointChecker = function breakpointChecker() {  
      if (breakpoint.matches === false) {

        if (swiper !== undefined) swiper.destroy(true, true);

        return; 

      } else if (breakpoint.matches === true) { 
        return enableSwiper();
      }

    };

    var enableSwiper = function enableSwiper() {
        swiper = new Swiper(".mySwiper", {
            
            slidesPerView: 3,
            spaceBetween: 14,
            speed: 650,
            
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
             },     

        });
    
    };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
  
})(); 