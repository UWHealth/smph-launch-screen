// sizing for safari
$(function() {
    $(window).resize(function() {
        var boxHeight = $('.tier__2 .panel--dust-2').height();
        $('.panel--slide').height(boxHeight);
    }).resize();
});
