var Boss = function(img, size, hitbox, life){
	this.size = size;
	this.hitbox = hitbox;
	this.life = life;
	this.hit = 20;
	this.timer = 50;
	this.gravity = 0.5;
	this.jumpTimer = 100;
	this.speedY = -18;
	this.jumping = false;
	this.right = true;
	this.speedX = 10;
	this.numOfFrames = 2;

	this.frameRate = 28;
	this.frame = 0;
	this.i = 0;
	this.state = 1;

	this.bossReady = false;
	this.bossImage = new Image();

	this.bossImage.onload = function () {
		this.bossReady = true;
	};

	this.bossImage.src = img;

	this.setReady = function(ready){
		this.bossReady = ready;
	}

	this.render = function(context, toShowText){
		if(this.bossReady) {
			animate(this.bossImage, this, this.size, this.size, this.numOfFrames);

			if(toShowText){
				context.fillText("BOSS", 900, 34); 
				context.beginPath();
				context.rect(670+((50-this.life)*4), 20, (this.life*4), 10);
				context.fillStyle = "#FFEBEB";
				context.fill();
				context.lineWidth = 2;
				context.strokeStyle = "#FFB0B0";
				context.stroke();
			    context.closePath();
			}
		}
	}

	this.getHit = function(bullets) {
		this.state=0;
		for(var i=0; i < numBullets; i++){
			if(circleCollision(this, bullets[i]) && this.hit==20){
				this.life -= Math.round(Math.random()*5) + 1;
				this.hit = 0;
				bullet.remove(i);
			}
		}
		if (this.hit < 20){
			this.hit++;
		}
	}

	this.jump = function(){
		this.speedY += this.gravity;
		this.y += this.speedY;

		if(this.y + this.size > ground){
			this.y = ground - this.size;
			this.speedY = 0;
		}

		if(this.jumpTimer==0){
			this.speedY = -18;
			if(this.life>30)
				this.jumpTimer = 300;
			else if(this.life>10)
				this.jumpTimer = 200;
			else
				this.jumpTimer = 100;
		}

		this.jumpTimer--;
	}

	this.sideJump = function(){
		this.speedY += this.gravity;
		this.y += this.speedY;

		if(this.y + this.size > ground){
			this.y = ground - this.size;
			this.speedY = 0;
			this.jumping = false;
			/*if(this.x < canvas.width/2){
				right = false;
			}
			if(this.x > canvas.width/2){
				right = true;
			}*/
			this.right = (this.x >= canvas.width/2);
		}

		if(this.jumping == true){
			if(this.right){
				this.x-=this.speedX;
			} else {
				this.x+=this.speedX;
			}
		}

		if(this.jumpTimer==0){
			this.speedY = -18;
			this.jumping = true;
			if(this.life>30)
				this.jumpTimer = 500;
			else if(this.life>10)
				this.jumpTimer = 300;
			else
				this.jumpTimer = 200;
		}

		this.jumpTimer--;
	}

	this.createBullet = function(){
		if (this.timer == 0){
			/*if(this.right){
				var newX = this.x-20;
			} else {
				var newX = this.x+this.size+20;
			}*/
			var newY = this.y+(this.size/2);
			var newX = this.x+(this.size/2);



			var angle = Math.atan2((char.y+(char.size/2)) - newY, char.x - newX);
			newX += (this.hitbox/2) * Math.cos(angle);
			newY += (this.hitbox/2) * Math.sin(angle);
			var newSpeedX = bullet.velocity * Math.cos(angle);
			var newSpeedY = bullet.velocity * Math.sin(angle);

			bullet.add(newSpeedX, newSpeedY, newX, newY);
			this.hit = 10;
			if(this.life>30)
				this.timer = 50;
			else if(this.life>10)
				this.timer = 30;
			else
				this.timer = 15;
		} else {
			this.timer--;
		}
	}
}






