
initialize();

function initialize() {
	window.addEventListener('popstate', changeState);

	if (history.state == null) {
		history.replaceState("home", null, null);
	}

	addListeners();
	changeState();
	deferredImageLoading();
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

	} else if (history.state == "contact") {
		hideTitleScreen();
		document.getElementById("r3Canvas").style.display = "inherit";
		document.getElementById("cover").style.visibility = "visible";

	}
}

function addListeners() {
	document.getElementById("l1").addEventListener("click", showJogos);
	document.getElementById("r1").addEventListener("click", showAnim);
	document.getElementById("l2").addEventListener("click", showWeb);
	document.getElementById("r2").addEventListener("click", showGraf);
	document.getElementById("l3").addEventListener("click", showUI);
	document.getElementById("r3").addEventListener("click", showContact);

	let backButtons = document.getElementsByClassName("back");

	for (let i = 0; i < backButtons.length; i++) {
		backButtons[i].addEventListener("click", back);
	}
}

function back() {
	history.back();
	changeState();
}

function showWeb(){
	if (history.state == "home"){
		history.pushState("web", null, null);
		changeState();
	}
}

function showAnim(){
	if (history.state == "home"){
		history.pushState("anim", null, null);
		changeState();
	}
}

function showJogos(){
	if (history.state == "home"){
		history.pushState("jogos", null, null);
		changeState();
	}
}

function showGraf(){
	if (history.state == "home"){
		history.pushState("graf", null, null);
		changeState();
	}
}

function showUI(){
	if (history.state == "home"){
		history.pushState("ui", null, null);
		changeState();
	}
}

function showContact(){
	if (history.state == "home"){
		history.pushState("contact", null, null);
		changeState();
	}
}

function deferredImageLoading() {
	let image = document.getElementById("bg");

	if (image.complete) {
		image.classList.add('show');
		image.classList.remove('hide');
	}

	image.addEventListener("load", function() {
		image.classList.add('show');
		image.classList.remove('hide');
	});
}
