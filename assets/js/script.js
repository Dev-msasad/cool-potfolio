(function ($) {
    'use strict';

    $('.slider-activator').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        cssEase: 'linear'
      });

    //mean-menu mobile menu
    jQuery('#mobile-nav').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
      });
  
    //menu items
    if ( $(window).width() > 767 ){
        $('.menu-area ul li').each(function () {
            var hasElements = $(this).find('li').length > 0;
    
            if (hasElements) {
                $(this).append('&nbsp;<i class="fas fa-long-arrow-alt-down"></i>');
            }
        });
      }
  
   
    //counter initiator
    $('.count').rCounter({
        duration: 40
    });

    //isotope masonry activation
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        getSortData: {
            name: '.name',
            category: '[data-category]'
        },
        // layout mode options
        masonry: {
            columnWidth: '.grid-item'
        }


    });





    //for menu active class
    $('.pofo-cat button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // filter items on button click
    $('.pofo-cat').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //portfolio magnific popup
    $('.portfolio-wrapper .overlay a').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
          },

    })

    //blog video magnific popup
    $('.single-blog .play-btn a').magnificPopup({
        type: 'iframe'
    });

    $('.list-blog-item .play-btn a').magnificPopup({
        type: 'iframe'
    });

    //back to top button
    $(".back-to-top a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });



})(jQuery);