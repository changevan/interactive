$(document).ready(function(){

// turning on and off the lights

  // by default, light is on
  var state = 'on';

  // click the button
  $('button').click(function(){

      if(state == 'off'){
        // turn on the lights
        $('body').removeClass('off');
        $('body').addClass('on');
        $(this).removeClass('off');
        state = 'on';
      }

      else {
        // turn off the lights
        $('body').removeClass('on');
        $('body').addClass('off');
        $(this).addClass('off');
        state = 'off';
      }

});
