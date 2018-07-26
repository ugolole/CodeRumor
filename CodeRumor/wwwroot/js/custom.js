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
});


