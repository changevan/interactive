var width = Math.floor(window.innerWidth);
var height = Math.floor(window.innerHeight);
var x = width + "deg";
var y = width/5 + "deg";

$(document).ready(function(){

    $(window).resize(function(){
        $('.left-one').css('transform', 'rotate(' + x + ')');
        $('.left-two').css('transform', 'rotate(' + y + ')');
    });
});
