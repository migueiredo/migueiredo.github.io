var level;

var changeBackground = function() {
	if(level == 1){
		$("#background").attr("src", "images/bg1.png");
	}
	if(level == 2){
		bullets = [];
		numBullets = 0;
		gameActive = false;
		$("#background").fadeOut(500, function(){
			$("#background").attr("src", "images/bg2.png");
			$("#levelInfo").html("LEVEL 2");
			setTimeout(function(){
				$("#background").fadeIn(500, function(){
					$("#levelInfo").html("");
					currentBoss.setReady(true);
					char.setReady(true);
					gameActive = true;
				});
			}, 1000);
		});
	}
	if(level == 3){
		bullets = [];
		numBullets = 0;
		gameActive = false;
		$("#background").fadeOut(500, function(){
			$("#background").attr("src", "images/bg3.png");
			$("#levelInfo").html("LEVEL 3");
			setTimeout(function(){
				$("#background").fadeIn(500, function(){
					$("#levelInfo").html("");
					currentBoss.setReady(true);
					char.setReady(true);
					gameActive = true;
				});
			}, 1000);
		});
	}
	if(level >= 4){
		bullets = [];
		numBullets = 0;
		gameActive = false;
		$("#background").fadeOut(1000, function(){
			$("#background").attr("src", "images/final.png");
			currentBoss.setReady(false);
			char.setReady(false);
			setTimeout(function(){
				$("#background").fadeIn(500, function(){
					$("#levelInfo").html("");
					gameActive = false;
					$("#levelInfo").html("CONGRATULATIONS!\nYOU WON!\n\nPRESS ANY KEY TO RESTART");
					restart=true;
				});
			}, 1000);
		});
	}
}

