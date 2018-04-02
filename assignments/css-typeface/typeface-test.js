$(document).ready(function(){

  function rotate() {
    var width = Math.floor(window.innerWidth);
    var height = Math.floor(window.innerHeight);
    var x = width/-20 + "deg";
    var y = width/50 + "deg";
    var w = width/50 + "deg";
    $('.left-one').css('transform', 'rotate(' + x + ')');
    $('.left-two').css('transform', 'rotate(' + y + ')');
    $('.right-one').css('transform', 'rotate(' + w + ')');

  }

    $(window).resize(function(){
      rotate();
    });

});
//
//
// $(document).ready(function() {
//
//   function fontSize() {
//     width = Math.floor(window.innerWidth);
//     height = Math.floor(window.innerHeight);
//     $("#width").html(width);
//     $("#height").html(height);
//     $("#width").css("font-size", width/3.3 + 'px');
//     $("#height").css("font-size", height/4.3 + 'px');
//   }
//
//
//   $(window).resize(function() {
//   	fontSize();
//   });
//
//   fontSize();
//
// });
