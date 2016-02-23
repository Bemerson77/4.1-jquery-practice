console.log("Hello World!");
var $ = require('jquery');


$('.main-links').on('click', function(e){
  if ($(this).children('.collapseable').hasClass('hide')) {
    $(this).children('.collapseable').removeClass('hide');
    $(this).siblings().children('.collapseable').addClass('hide');
  }else{
    $(this).children('.collapseable').toggleClass('hide');
  }
  // changes background-color when clicked
    $(this).toggleClass('main-bg-color');


});




// hover function for main links.
$('.main-links, .anchor').hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
