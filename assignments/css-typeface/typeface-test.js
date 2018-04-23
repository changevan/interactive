$(document).ready(function(){

  function skew() {
    var width = Math.floor(window.innerWidth);
    var height = Math.floor(window.innerHeight);
    var x = width/20 + "deg";
    var y = width/30 + "deg";
    var w = width/40 + "deg";
    var z = width/20 + "deg";
    $('.left-one').css('transform', 'skew(' + x + ')');
    $('.left-two').css('transform', 'skew(' + y + ')');
    $('.right-one').css('transform', 'skew(' + w + ')');
    $('.right-two').css('transform', 'skew(' + z + ')');
  }

    $(window).resize(function(){
      skew();
    });

});

$('.letters').each(function() {

  var $letterWrapper = $(this);
  var words = $letterWrapper.html().split(' ');
  var wordArray = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split('');
    var letterElements = letters.map(getHTMLForCharacter);
    wordArray.push(
    	'<div class="word">' +
    	letterElements.join('') +
      '</div>'
    );
  }

  console.log(wordArray.join(getHTMLForCharacter(' ')));

  $letterWrapper.html(wordArray.join(getHTMLForCharacter(' ')));
});

function getHTMLForCharacter(character) {
    	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    	var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
      return characterHTML;
};
