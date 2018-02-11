var language = "en";
var optionsVisible = false;
var contactVisible = false;
var aboutVisible = false;
var gamesVisible = false;


var aboutText = document.getElementById("aboutText");
var beep1 = document.getElementById("beep");
var beep2 = document.getElementById("beep2");
var select1 = document.getElementById("select1");

select1.volume = 0.2;
beep1.volume = 0.2;
beep2.volume = 0.1;

function pt(){
	document.getElementById("home").innerHTML = "Casa";
	document.getElementById("about").innerHTML = "Sobre";
	document.getElementById("games").innerHTML = "Jogos";
	document.getElementById("contact").innerHTML = "Contacto";
	document.getElementById("options").innerHTML = "Opções";
	document.getElementById("insurrectionInfo").innerHTML = "Um platformer cinemático num mundo pós-guerra.";
	language = "pt";
	if(aboutVisible){
		aboutText.innerHTML = "Designer/Developer de Jogos<br>Lançado em 1995";
	}
}

function en(){
	document.getElementById("home").innerHTML = "Home";
	document.getElementById("about").innerHTML = "About";
	document.getElementById("games").innerHTML = "Games";
	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("options").innerHTML = "Options";
	document.getElementById("insurrectionInfo").innerHTML = "A cinematic platformer in a post-war world.";
	language = "en";
	if(aboutVisible){
		aboutText.innerHTML = "Game Designer/Developer<br>Released in 1995";
	}
}

function jp(){
	document.getElementById("home").innerHTML = "うち";
	document.getElementById("about").innerHTML = "ついて";
	document.getElementById("games").innerHTML = "ゲ-ム";
	document.getElementById("contact").innerHTML = "れんらくさき";
	document.getElementById("options").innerHTML = "せってい";
	language = "jp";
	if(aboutVisible){
		aboutText.innerHTML = "ゲ-ム Designer/Developer<br>Released in 1995";
	}
}

function about(){
	if(!aboutVisible){
		if (language == "en"){
			aboutText.innerHTML = "Game Designer/Developer<br>Released in 1995";
		}
		if (language == "pt"){
			aboutText.innerHTML = "Designer/Developer de Jogos<br>Lançado em 1995";
		}
		if (language == "jp"){
			aboutText.innerHTML = "ゲ-ム Designer/Developer<br>Released in 1995";
		}
		aboutVisible = true;
	} else {
		aboutText.innerHTML = "";
		aboutVisible = false;
	}

	if(gamesVisible){
		showGames();
	}

}

function openOptions(){

	if (!optionsVisible) {
		for(var i=0; i<3; i++){
			document.getElementsByClassName("optionsMenu")[i].style.visibility = "visible";
		}
		optionsVisible = true;
	} else {
		for(var i=0; i<3; i++){
			document.getElementsByClassName("optionsMenu")[i].style.visibility = "hidden";
		}
		optionsVisible = false;
	}
}

function openContact(){

	if (!contactVisible) {
		for(var i=0; i<4; i++){
			document.getElementsByClassName("contactMenu")[i].style.visibility = "visible";
		}
		contactVisible = true;
	} else {
		for(var i=0; i<4; i++){
			document.getElementsByClassName("contactMenu")[i].style.visibility = "hidden";
		}
		contactVisible = false;
	}
}

function beep(){
	beep1.play();

	if(beep1.currentTime != 0){
		beep2.play();
		if(beep2.currentTime != 0){	
			beep1.pause();
			beep1.currentTime = 0;
			beep1.play();
		}
	}
}

function select(){
	select1.pause();
	select1.currentTime = 0;
	select1.play();
}

function showGames(){
	if(gamesVisible){
		document.getElementById("name").style.visibility = "visible";
		document.getElementById("gameList").style.visibility = "hidden";
		gamesVisible = false;
	} else {
		document.getElementById("name").style.visibility = "hidden";
		document.getElementById("gameList").style.visibility = "visible";
		gamesVisible = true;
	}
}