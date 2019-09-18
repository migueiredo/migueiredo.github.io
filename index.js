
initialize();

function initialize() {
	window.addEventListener('popstate', changeState);

	if (history.state == null) {
		history.replaceState("home", null, null);
	}

	changeState();
}

function changeState() {

	if (history.state == "home") {

		document.getElementById("webCanvas").style.display = "none";
		document.getElementById("animCanvas").style.display = "none";
		document.getElementById("jogosCanvas").style.display = "none";
		document.getElementById("grafCanvas").style.display = "none";
		document.getElementById("uiCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";

	} else if (history.state == "web") {

		document.getElementById("webCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "anim") {

		document.getElementById("animCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "graf") {

		document.getElementById("grafCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "jogos") {

		document.getElementById("jogosCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";

	} else if (history.state == "ui") {

		document.getElementById("uiCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
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