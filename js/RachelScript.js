$(function() {
$('body').removeClass('fade-in');
});

//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//        $('.banner-pic').css({'opacity':(( 180-scroll )/400)+.4});
//});

$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 500) {
var scroll = $(window).scrollTop();
        $('.banner-pic').css({'opacity':(( 750-scroll )/400)+.4});
    }
    else{
        $('.banner-pic').css({'opacity': 1.0})
    }
});

$("#contactPic-container").each(function() {

    var itemsCount = $(this).children().length;
    var childrenWidth = 100 / itemsCount + '%';

    $(this).children().css('width', childrenWidth);

});