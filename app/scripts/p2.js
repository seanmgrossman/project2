$(document).ready(function() { 




  $('.slider').slider();

  $('#pagepiling').pagepiling({
  sectionsColor: ['#2ecc71', '#f39c12', '#2ecc71']

});



});


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

var x1 = document.getElementById('myAudio'); 
var x2 = document.getElementById('myAudio2'); 
var x3 = document.getElementById('myAudio3'); 
var x4 = document.getElementById('myAudio4'); 
var x5 = document.getElementById('myAudio5'); 
var x6 = document.getElementById('myAudio6'); 
var x7 = document.getElementById('myAudio7'); 
var x8 = document.getElementById('myAudio8'); 
var x9 = document.getElementById('myAudio9'); 
var x10 = document.getElementById('myAudio10'); 

function playAudio() { 
    x1.play(); 
} 

function playAudio2() { 
    x2.play(); 
} 

function playAudio3() { 
    x3.play(); 
} 

function playAudio4() { 
    x4.play(); 
} 

function playAudio5() { 
    x5.play(); 
} 

function playAudio6() { 
    x6.play(); 
} 

function playAudio7() { 
    x7.play(); 
} 

function playAudio8() { 
    x8.play(); 
} 

function playAudio9() { 
    x9.play(); 
} 

function playAudio10() { 
    x10.play(); 
} 


$('#demo01').animatedModal({
  animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'

});

//demo 02
$('#demo02').animatedModal({
modalTarget:'modal-02',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });


$('#demo03').animatedModal({
modalTarget:'modal-03',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo04').animatedModal({
modalTarget:'modal-04',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo05').animatedModal({
modalTarget:'modal-05',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo06').animatedModal({
modalTarget:'modal-06',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo07').animatedModal({
modalTarget:'modal-07',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo08').animatedModal({
modalTarget:'modal-08',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo09').animatedModal({
modalTarget:'modal-09',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });

$('#demo10').animatedModal({
modalTarget:'modal-10',
animatedIn: 'lightSpeedIn',
  animatedOut: 'bounceOut',
  color:'#27ae60'
               
            });