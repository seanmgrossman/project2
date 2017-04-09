$(document).ready(function() { 
	$('.slider').slick({
   		slidesToShow: 3,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 2000

});

$('#fullpage').fullpage({
	sectionsColor: ['#f39c12', '#2ecc71'],
});

});

  $('#demo01').animatedModal();


var modal = new AnimatedModal({
    color:'#39BEB9'
});


document.getElementById('my-modal-button').addEventListener('click', function(ev) {
    ev.preventDefault();
    modal.open();
});