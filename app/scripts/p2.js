$(document).ready(function() { 




  $('.slider').slider();

  $('#pagepiling').pagepiling({
  sectionsColor: ['#2ecc71', '#f39c12', '#2ecc71']

});



});
$('#demo01').animatedModal({
animatedIn: 'lightSpeedIn',
animatedOut: 'bounceOut',
color:'#27ae60'

});

/*
$('#demo02').animatedModal({
animatedIn: 'lightSpeedIn',
animatedOut: 'bounceOut',
color:'#3498db'

});
*/
$('#start').hide();
$('#intext').hide();
//Intro animations 

setTimeout( function(){ 
    // Do something after 3 second 
      $('.menu').toggleClass('menu-active');

  }  , 3000 );


setTimeout( function(){ 
    // Do something after 3.5 second 
      $('#feather').hide();

  }  , 3500 );


setTimeout( function(){ 
    // Do something after 4 second 
      $('#start').addClass('animated zoomIn').show();

  }  , 4000 );

setTimeout( function(){ 
    // Do something after 4 second 
      $('#intext').addClass('animated fadeIn').show();

  }  , 4200 );