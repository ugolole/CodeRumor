// A $( document ).ready() block.
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('navSecond').addClass('shrinkSecond');
        } else {
            $('nav').removeClass('shrink');
            $('navSecond').removeClass('shrinkSecond');
        }
    });

    $('#learnMore').click(function () {
        $('html,body').animate({
            scrollTop: $('#me').offset().top
        },
            'slow');
    });
});


