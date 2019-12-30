
initialize();

function initialize() {
	window.addEventListener('popstate', changeState);

	if (history.state == null) {
		history.replaceState("home", null, null);
	}

	changeState();
}

function hideTitleScreen() {
	let titleScreen = document.getElementById("title-screen");
	titleScreen.style.display = 'none';
}

function showTitleScreen() {
	let titleScreen = document.getElementById("title-screen");
	titleScreen.style.display = 'block';
}

function changeState() {

	if (history.state == "home") {

		showTitleScreen();

		let files = document.getElementsByClassName("file");

		for (let i = 0; i < files.length; i++) {
			files[i].style.display = "none";
		}

		document.getElementById("cover").style.visibility = "hidden";

	} else if (history.state == "web") {
		hideTitleScreen();
		document.getElementById("l1Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "anim") {
		hideTitleScreen();
		document.getElementById("l2Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "graf") {
		hideTitleScreen();
		document.getElementById("l3Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "jogos") {
		hideTitleScreen();
		document.getElementById("r2Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "ui") {
		hideTitleScreen();
		document.getElementById("r1Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	}
}

function showWeb(){
	if (history.state == "home"){
		history.pushState("web", null, null);
		changeState();
	} else {
		history.back();
		changeState();
	}
}

function showAnim(){
	if (history.state == "home"){
		history.pushState("anim", null, null);
		changeState();
	} else {
		history.back();
		changeState();
	}
}

function showJogos(){
	if (history.state == "home"){
		history.pushState("jogos", null, null);
		changeState();
	} else {
		history.back();
		changeState();
	}
}

function showGraf(){
	if (history.state == "home"){
		history.pushState("graf", null, null);
		changeState();
	} else {
		history.back();
		changeState();
	}
}

function showUI(){
	if (history.state == "home"){
		history.pushState("ui", null, null);
		changeState();
	} else {
		history.back();
		changeState();
	}
}