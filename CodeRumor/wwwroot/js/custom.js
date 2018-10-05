// A $( document ).ready() block.
$(document).ready(function () {

    //loading animations
    window.onload = function () {
        $('body').addClass('loaded');
    };

    //change the color of nav bar when scrolling.
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('navSecond').addClass('shrinkSecond');
        } else {
            $('nav').removeClass('shrink');
            $('navSecond').removeClass('shrinkSecond');
        }
    });

    //smooth scroll occures when you click learn more.
    $('#learnMore').click(function () {
        $('html,body').animate({
            scrollTop: $('#me').offset().top
        },
            'slow');
    });

    //**************************C# documentation smooth scrolling 
    //one
    $('a[name="DOCHeader_menu1"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader1"]').offset().top - 50
        }, 'slow');

        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
        
    });

  
    //two
    $('a[name="DOCHeader_menu2"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader2"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    //three
    $('a[name="DOCHeader_menu3"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader3"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    //four
    $('a[name="DOCHeader_menu4"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader4"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    $('a[name="DOCHeader_menu5"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader5"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    $('a[name="DOCHeader_menu6"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader6"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    $('a[name="DOCHeader_menu7"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader7"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });

    $('a[name="DOCHeader_menu8"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader8"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active'); 
    });


    /****************************************************************************/
    //**************************Terms of Service smooth scrolling 
    //one
    $('a[name="TERMsHeader_menu1"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader1"]').offset().top - 50
        }, 'slow');

        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');

    });


    //two
    $('a[name="TERMsHeader_menu2"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader2"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    //three
    $('a[name="TERMsHeader_menu3"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader3"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    //four
    $('a[name="TERMsHeader_menu4"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader4"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu5"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader5"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu6"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader6"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu7"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader7"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu8"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader8"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu9"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader9"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu10"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader10"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu11"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader11"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

    $('a[name="TERMsHeader_menu12"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="TERMsHeader12"]').offset().top - 50
        }, 'slow');
        //remove other active members
        $('li a.menu').removeClass('active');

        //add the active class to show where we are
        $(this).addClass('active');
    });

});


