console.log("Hello World!");
var $ = require('jquery');


$('.main-links').on('click', function(e){
  if ($(this).children('.collapseable').hasClass('hide')) {
    $(this).children('.collapseable').removeClass('hide');
    $(this).siblings().children('.collapseable').addClass('hide');
  }else{
    $(this).children('.collapseable').toggleClass('hide');
  }
});
