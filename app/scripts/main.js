console.log('\'Allo \'Allo!');

$.fn.isOnScreen = function(){

var win = $(window);

var viewport = {
top : win.scrollTop(),
left : win.scrollLeft()
};
viewport.right = viewport.left + win.width();
viewport.bottom = viewport.top + win.height();

var bounds = this.offset();
bounds.right = bounds.left + this.outerWidth();
bounds.bottom = bounds.top + this.outerHeight();

return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(document).ready(function() {
//utility function for on screen



$(window).scroll(function(){
$('.card').each(function() {
if ($(this).isOnScreen()) {
$(this).addClass('animated bounceIn');
}
});
});


var fireworkRenderer = PIXI.autoDetectRenderer(window.innerWidth, 500, { transparent: true });


	$('#fireworks').append(fireworkRenderer.view);
	var fireworkStage = new PIXI.Container();
	var rightFireworkEmitter;
	var timer = setInterval(makeFirework, 5000);
	function makeFirework(){
rightFireworkEmitter = new PIXI.particles.Emitter(
// The PIXI.Container to put the emitter in
// if using blend modes, it's important to put this
// on top of a bitmap, and not use the root stage Container
fireworkStage,
// The collection of particle images to use
[PIXI.Texture.fromImage('images/sun.png')],
// Emitter configuration, edit this to change the look
// of the emitter
{
alpha: {
start: 0.5,
end: 0.1
},
scale: {
start: .08,
end: 0.01
},
color: {
start: 'fb1010',
end: 'f5b830'
},
speed: {
start: 200,
end: 10
},
startRotation: {
min: 0,
max: 360
},
rotationSpeed: {
min: 0,
max: 0
},
lifetime: {
min: 0.5,
max: 1
},
frequency: 0.2,
emitterLifetime: Math.random()*3+1,
maxParticles: 1000,
pos: {
x: 150,
y: 200
},
pos: {
x: Math.random()*300+50,
y: Math.random()*200+100
},
addAtBack: true,
spawnType: 'burst',
particlesPerWave: 5,
particleSpacing: 0,
angleStart: 0
}
);
rightFireworkEmitter.emit = true;

}
var elapsed = Date.now();
explode();

function explode() {
var now = Date.now();
if (rightFireworkEmitter) {
	console.log('emit');
	rightFireworkEmitter.update((now - elapsed) * 0.001);
}
elapsed = now;
fireworkRenderer.render(fireworkStage);
requestAnimationFrame(explode);
}


	//clouds start here
	//create the renderer	
	var renderer = PIXI.autoDetectRenderer(400, 400, { transparent: true });
	//add the canvas to the HTML doc
	$('#addPixi').append(renderer.view);
	var stage = new PIXI.Container();
	var clouds = PIXI.Sprite.fromImage('images/shrek.jpg');
	//Set the anchor at the center of your image sprite
	clouds.anchor.x = 0.5;
	clouds.anchor.y = 0.5;
	//Move the sprite to the center of the canvas
	clouds.position.x = 200;
	clouds.position.y = 200;
	stage.addChild(clouds);
 	var text = new PIXI.Text('Welcome', {font:'50px Arial', dropShadow: true, fill:'white'});
	render();
	var count = 0;
	function render(){
		var colorMatrix = [
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
		]
		var filter = new PIXI.filters.ColorMatrixFilter();
		filter.matrix = colorMatrix;
		var newValSat = 0 + Math.sin(count);
		filter.saturate(newValSat, false);
		stage.filters = [filter];
		count += .01;
		requestAnimationFrame(render);
		clouds.rotation += .01;
		renderer.render(stage);

	}




});