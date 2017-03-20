console.log('\'Allo \'Allo!');

$(document).ready(function() {

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