var bosses = [];
var currentBoss = null;
var char = null;
var jumping = false;
var maxLevels = 3;
var ground = 448;

var bullet = null;
var bullets = [];
var numBullets = 0;

var gravity = 0;
var start = false;
var gameActive = true;
var restart;
var sound = new Audio("sound/mainTheme.mp3"); // buffers automatically when created

function init(){
	bosses = [];
	currentBoss = null;
	char = null;
	jumping = false;
	maxLevels = 3;
	ground = 448;

	bullet = null;
	bullets = [];
	numBullets = 0;

	gravity = 0;
	start = false;
	gameActive = true;
	restart = false;

	$("#levelInfo").html("");
	$("#background").attr("src", "images/bg1.png");

	level = 1;
	var boss1 = new Boss("images/boss1.png", 256, 200, 50);
	currentBoss = boss1;
	currentBoss.setReady(true);

	var boss2 = new Boss("images/boss2.png", 128, 100, 50);

	var boss3 = new Boss("images/boss3.png", 256, 250, 50);
	boss3.numOfFrames = 24;
	boss3.frameRate = 5;

	bullet = new Bullet("images/bullet1.png");

	char = new Char("images/char.png");
	char.setReady(true);

	bosses.push(boss1);
	bosses.push(boss2);
	bosses.push(boss3);
}

function changeLevel(){
	level++;
	if (level <= maxLevels){
		currentBoss = bosses[level-1];
	}
	changeBackground();
	char.setReady(false);
	reset();
}



//Set the canvas
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 500;
document.body.appendChild(canvas);

var animate = function(sheet, obj, width, height, numOfFrames){
	context.drawImage(sheet, width*obj.i, obj.state*height, width, height, obj.x, obj.y, width, height);
	obj.frame++;
	if(obj.frame%obj.frameRate===0){
		obj.i++;
		obj.frame=0;
	}
	if (obj.i>numOfFrames-1){
		obj.i=0;
	}
}

var circleCollision = function(obj1, obj2){
	var radius = obj1.hitbox/2 + obj2.hitbox/2;
	var x1 = obj1.x + obj1.size/2;
	var x2 = obj2.x + obj2.size/2;
	var y1 = obj1.y + obj1.size/2;
	var y2 = obj2.y + obj2.size/2;
	var dist = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
	
	if (dist < radius){
		return true;
	}
}

var reset = function () {
	char.x = canvas.width / 2 - char.size/2 - 250;
	char.y = -200;

	currentBoss.x = canvas.width - 256 - 64;
	currentBoss.y = ground - currentBoss.size;
}


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Draw everything
var render = function () {

	for(var i=0; i<numBullets; i++){
		if(bullets[i].bulletReady){
			animate(bullets[i].bulletImage, bullets[i], bullets[i].size, bullets[i].size, 6);
		}
	}

	char.render(context, start);
	currentBoss.render(context, start);
	
	if(!start){
	
		context.font = "48px 'Press Start 2P'";
		context.fillStyle = "#FFFFFF";
		context.fillText("DROP", canvas.width/2 - 100, canvas.height/2-120);

		context.font = "32px 'Press Start 2P'";
		context.fillStyle = "FFFFFF";
		context.fillText("PRESS ANY KEY TO START", canvas.width/2 - 360, canvas.height/2);

		context.font = "16px 'Press Start 2P'";
		context.fillStyle = "#FFFFFF"; 
		context.fillText("ARROW KEYS TO PLAY", canvas.width/2 - 160, canvas.height/2+220);
		context.fillText("DOWN ARROW TO BLOCK", canvas.width/2 - 166, canvas.height/2+250);
	}
};

var update = function() {
	if(gameActive){
		if(char.life>0){
			char.control();
			char.getHit();
		} else {
			char.setReady(false);
			init();
			reset();
		}

		if(currentBoss.life>0){
			currentBoss.createBullet();
			currentBoss.getHit(bullets);
			bullet.mechanics();
			if(level == 1){
				bullet.velocity = 8;
			}
			if(level == 2){
				bullet = new Bullet("images/bullet2.png");
				currentBoss.jump();
				bullet.velocity = 9;
			}
			if(level == 3){
				bullet = new Bullet("images/bullet3.png");
				currentBoss.sideJump();
				bullet.velocity = 10;
			} 
			if (level == 4){
				currentBoss=null;
			}
		} else {
			gameActive = false;
			changeLevel();
		}
	}
}

var main = function () {
	if(restart){
		document.onkeypress = function(key_dtl){
			start = false;
			init();
			reset();
		}
	} else {
		document.onkeypress = function(key_dtl){
			start = true;
		}
	}

	context.clearRect(0, 0, canvas.width, canvas.height);

	

	if(start){
		sound.play();
		gravity = 1;
		update();
	}
	render();

	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
init();
reset();
main();
