playerSpritesheet = new Image();

playerSpritesheet.onload = function () {
	spritesheetReady = true;
};

playerSpritesheet.src = "images/blue.png";

var Player = function(spritesheet, size){
	this.size = size;

	this.x = 500;
	this.y = 0;

	this.maximumVelocityX = 5;
	this.accelerationX = 2;
	this.velocityX = 0;

	this.jumping = false;
	this.jumpStopFactor = 3;
	this.gravity = 0.5;
	this.impulseY = 15;
	this.terminalVelocityY = 15;
	this.velocityY = 0;
	
	this.frameRate = 5; //12 FPS
	this.currentFrame = 0;
	this.clipPosition = 0;
	this.state = 0; // 0: Idle | 1: Run | 2: Jump | 3: Block
	this.numberFrames = 7;

	this.spritesheetReady = false;
	this.playerSpritesheet = new Image();

	this.playerSpritesheet.onload = function () {
		this.spritesheetReady = true;
	};

	this.playerSpritesheet.src = spritesheet;

	this.render = function(){
		this.control();
		this.x += this.velocityX;

		animate(playerSpritesheet, this, this.size, this.size, this.numberFrames);
	}

	this.control = function(){

		//Lateral Movement

		if (39 in keysDown){ //Right Arrow
			if(this.velocityX < this.maximumVelocityX){
				this.velocityX += this.accelerationX;
			}
		} else if (37 in keysDown){ //Left Arrow
			if(this.velocityX > -this.maximumVelocityX){
				this.velocityX -= this.accelerationX;
			}
		} else { //Stabilize X
			if(this.velocityX < 0){
				this.velocityX += this.accelerationX;
			} else if(this.velocityX > 0){
				this.velocityX -= this.accelerationX;
			}
		}

		//Vertical Movemement

		if (90 in keysDown && !this.jumping){ //Z Key
			this.velocityY = -this.impulseY;
			this.jumping = true;
		}

		if(this.velocityY < 0 && !(90 in keysDown)){
			this.velocityY -= this.velocityY/this.jumpStopFactor;
		}

		this.y += this.velocityY;

		if (this.y > groundPosition){
			this.y = groundPosition;
			this.jumping = false;
			this.velocityY = 0;
		} else if (this.velocityY < this.terminalVelocityY){
			this.velocityY += this.gravity;
		}


	}
}