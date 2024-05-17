(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


  $(document).ready(function () {
  // Set initial styles for sticky header
  $('.sticky-top').addClass('sticky-header').css('background-color', 'green');

  // Function to handle scroll event and add/remove sticky class
  function handleScroll() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 0) {
      $('.sticky-top').addClass('sticky');
    } else {
      $('.sticky-top').removeClass('sticky');
    }
  }

  // Call handleScroll on document ready and window scroll
  handleScroll();
  $(window).scroll(handleScroll);
});

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

