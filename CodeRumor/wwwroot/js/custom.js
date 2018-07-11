
var windowHeight = $(window).height();
var windowWidth = $(document).height();


//   // returns height of browser viewport
// // returns height of HTML document (same as pageHeight in screenshot)
//$(window).width();   // returns width of browser viewport
//$(document).width();

var prevScrollpos = window.pageYOffset;
var value = false;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navBarxx").style.top = "0";
        } else {
            document.getElementById("navBarxx").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;

}