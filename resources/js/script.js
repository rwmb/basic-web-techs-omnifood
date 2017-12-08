$(document).ready(function () {
  
  // Sticky navigation
  $('#sectionFeatures').waypoint((direction) => {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });
  
  // 
  $('#hungryBtn').click(() => {
    $('html, body').animate({scrollTop: $('#sectionPlans').offset().top}, 1000);
  });
  
  $('#showMoreBtn').click(() => {
    $('html, body').animate({scrollTop: $('#sectionFeatures').offset().top}, 1000);
  });
  
  
  // Anchor scrolling
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  /********* 
   * Animate on scroll
   *********/
  
   var addScrollAnimation = (id, animation, options) => {
     let object = $('#' + id);
     if (options.startInvisible) {
      object.addClass('invisible'); 
     }
     object.waypoint(() => {
      object.removeClass('invisible');
      object.addClass('animated ' + animation);
    }, {
      offset: options.offset || 0
    });
   };
   
   var options = {offset: '50%', startInvisible: true};
   
   addScrollAnimation('featuresBoxes', 'fadeIn', options);
   addScrollAnimation('appScreen', 'fadeInLeft', options);
   addScrollAnimation('citiesBox', 'fadeIn', options);
   addScrollAnimation('planBox', 'tada', {offset: '30%', startInvisible: false});
   
});