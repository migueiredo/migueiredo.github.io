var Char = function(img){
	
	this.size = 128;
	this.hitbox = 50;
	this.speedX = 6;
	this.speedY = 10;
	this.life = 100;
	this.gravity = 1;
	
	this.blockWait = 50;
	this.blockReady = 0;
	
	this.frameRate = 5; //12 FPS
	this.frame = 0;
	this.i = 0;
	this.state = 0; // 0: Idle | 1: Run | 2: Jump | 3: Block

	this.charReady = false;
	this.charImage = new Image();

	this.charImage.onload = function () {
		this.charReady = true;
	};
	
	this.charImage.src = img;

	this.setReady = function(ready){
		this.charReady = ready;
	}

	this.render = function(context, toShowText){
		if(this.charReady) {
			animate(this.charImage, this, this.size, this.size, 4);
			if(toShowText){

				context.fillText("HEALTH", 20, 34);
				context.beginPath();
				context.rect(140, 20, (this.life*2), 10);
				context.fillStyle = "#F0EDFF";
				context.fill();
				context.lineWidth = 2;
				context.strokeStyle = "#B3B3FA";
				context.stroke();
			    context.closePath();

			    context.fillText("ENERGY", 20, 64);
			    context.beginPath();
				context.rect(140, 50, (50-this.blockWait)*4, 10);
				context.fillStyle = "#EDFFF5";
				context.fill();
				context.lineWidth = 2;
				context.strokeStyle = "#B3FAC7";
				context.stroke();
			    context.closePath();
			}
		}
	}


	this.control = function(){

		block.x = this.x;
		block.y = this.y;
		
		this.speedY += gravity;
		this.y += this.speedY;

		if(this.y + this.size > ground){
			this.y = ground - this.size;
			this.speedY = 0;
			jumping = false;
		}
		
		if (38 in keysDown && !jumping){ //Up
			this.speedY = -24;
			jumping = true;
		}
		
		if((40 in keysDown) ){
			if((this.blockWait == 0)){
				this.blockReady = 16;
				this.i = 0;
				this.blockWait = 40;
			}
		}


		if(this.blockReady > 0){
			this.state = 2;
		} else if(jumping){
			this.state = 3;
		} else if (39 in keysDown){ //Right
			this.state = 1;
		} else if (37 in keysDown){ //Left
			this.state = 1;
		} else {
			this.state = 0;
		}

		if (39 in keysDown && this.x < 920){ //Right
			this.x += this.speedX;
		} else if (37 in keysDown && this.x > -40){ //Left
			this.x -= this.speedX;
		}

		if(this.blockWait > 0)
			this.blockWait--;
		if(this.blockReady > 0)
			this.blockReady--;
	}

	this.getHit = function(){
		for(var i=0; i<numBullets; i++){
			if(circleCollision(block, bullets[i]) && this.blockReady>0){
				blockMechanics(i);
				continue;
			}
			if(circleCollision(this, bullets[i])){
				this.life-=4;
				bullet.remove(i);
			}
		}
	}

}

//Block
var block = {
	hitbox: 100,
	size: 128
}

var blockMechanics = function(i) {

	var newX = char.x-20;
	var newY = char.y+(char.size/2);
	var angle = Math.atan2((currentBoss.y+(currentBoss.size/2)) - newY, currentBoss.x - newX);
	var newSpeedX = bullet.velocity * Math.cos(angle);
	var newSpeedY = bullet.velocity * Math.sin(angle);

	bullets[i].speedX = newSpeedX;
	bullets[i].speedY = newSpeedY;
}

