//--------Global Variables--------

var background;
var player = null;

var x=0;
var y=0;
var groundPosition;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


//--------Functions--------

function initialize(){
	background = new Image();
	background.src = "images/Fields.png";

	player = new Player("images/Blue.png", 64);

	groundPosition = (224*2) - player.size;
	
	player.y = groundPosition;

	main();
}

var render = function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	x = parseInt((window.innerWidth-background.width)/2);
	y = parseInt((window.innerHeight-background.height)/2);

	player.normalizedX = player.x + x;
	player.normalizedY = player.y + y;

	context.drawImage(background, x, y);

	if(spritesheetReady) {
		player.render();
	}
}

var main = function () {

	render();
	requestAnimationFrame(main);
};


//--------Tools--------

var animate = function(spritesheet, object, width, height, numberFrames){
	context.drawImage(spritesheet, width*object.clipPosition, object.state*height, width, height, object.normalizedX, object.normalizedY, width, height);
	object.currentFrame++;
	if(object.currentFrame%object.frameRate===0){
		object.clipPosition++;
		object.currentFrame=0;
	}
	if (object.clipPosition>numberFrames-1){
		object.clipPosition=0;
	}
}

//Keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


//--------Cross-browser support for requestAnimationFrame--------
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
context.imageSmoothingEnabled = false;


//--------Initialize-------
initialize();