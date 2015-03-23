// OpenStack In The Enterprise Affix
var num = 96; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.enterprise-bar').addClass('fixed');
    } else {
        $('.enterprise-bar').removeClass('fixed');
    }
});