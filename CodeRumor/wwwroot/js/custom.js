// A $( document ).ready() block.
$(document).ready(function () {
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
        //add the active class to show where we are
        $('a[name="DOCHeader_menu1"]').addClass('active'); 

        //remove other active members
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');

    });

    //two
    $('a[name="DOCHeader_menu2"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader2"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu2"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    //three
    $('a[name="DOCHeader_menu3"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader3"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu3"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    //four
    $('a[name="DOCHeader_menu4"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader4"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu4"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    $('a[name="DOCHeader_menu5"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader5"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu5"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    $('a[name="DOCHeader_menu6"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader6"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu6"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    $('a[name="DOCHeader_menu7"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader7"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu7"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu8"]').removeClass('active');
    });

    $('a[name="DOCHeader_menu8"]').click(function () {
        $('html, body').animate({
            scrollTop: $('a[name="DOCHeader8"]').offset().top - 50
        }, 'slow');
        //add the active class to show where we are
        $('a[name="DOCHeader_menu8"]').addClass('active');

        //remove other active members
        $('a[name="DOCHeader_menu1"]').removeClass('active');
        $('a[name="DOCHeader_menu2"]').removeClass('active');
        $('a[name="DOCHeader_menu3"]').removeClass('active');
        $('a[name="DOCHeader_menu4"]').removeClass('active');
        $('a[name="DOCHeader_menu5"]').removeClass('active');
        $('a[name="DOCHeader_menu6"]').removeClass('active');
        $('a[name="DOCHeader_menu7"]').removeClass('active');
    });

});


