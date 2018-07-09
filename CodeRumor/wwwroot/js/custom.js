
var windowHeight = $(window).height();
var windowWidth = $(document).height();


//   // returns height of browser viewport
// // returns height of HTML document (same as pageHeight in screenshot)
//$(window).width();   // returns width of browser viewport
//$(document).width();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navBar").style.top = "0";
        } else {
            document.getElementById("navBar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;

}