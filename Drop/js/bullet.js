var Bullet = function(img){
	this.velocity = 12;
	
	this.mechanics = function () {
		for(var i=0; i<numBullets; i++){
			bullets[i].x += bullets[i].speedX;
			bullets[i].y += bullets[i].speedY;
			if(bullets[i].x < -100 || bullets[i].x > 1100 || bullets[i].y < -100  || bullets[i].y > 600){
				for(var j=i; j<numBullets; j++){
					bullets[j] = bullets[j+1];
				}
				numBullets--;
			}
		}
	}

	this.add = function (pspeedX, pspeedY, px, py) {
		bullets[numBullets]={
			speedX: pspeedX,
			speedY: pspeedY,
			size: 32,
			hitbox: 32,
			bulletReady: false,
			bulletImage: new Image(),
			frameRate: 2, //12 FPS
			frame: 0,
			i: 0,
			state: 0
		};
		bullets[numBullets].x = px;
		bullets[numBullets].y = py;

		bullets[numBullets].bulletReady = true;

		bullets[numBullets].bulletImage.src = img;

		numBullets++;

	}

	this.remove = function(i){
		for(var j=i; j<numBullets; j++){
			bullets[j] = bullets[j+1];
		}
		numBullets--;
	}
}