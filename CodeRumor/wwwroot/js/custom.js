$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
        $('navSecond').addClass('shrinkSecond');
    } else {
        $('nav').removeClass('shrink');
        $('navSecond').removeClass('shrinkSecond');
    }

});

//$('.aDivSize').click(function () {
//    if (this.id == "home") {
//        do your stuff here
//        $(this.id).addClass('active');
//        alert('me');
//    }
//});

