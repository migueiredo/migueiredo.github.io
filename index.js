var language = "en";
var webVisible = false;
var animVisible = false;
var jogosVisible = false;
var grafVisible = false;
var uiVisible = false;

function showWeb(){
	if(!webVisible){
		document.getElementById("webCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";
		webVisible = true;
	} else {
		document.getElementById("webCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";
		webVisible = false;
	}
}

function showAnim(){
	if(!animVisible){
		document.getElementById("animCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";
		animVisible = true;
	} else {
		document.getElementById("animCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";
		animVisible = false;
	}
}

function showJogos(){
	if(!jogosVisible){
		document.getElementById("jogosCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";
		jogosVisible = true;
	} else {
		document.getElementById("jogosCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";
		jogosVisible = false;
	}
}

function showGraf(){
	if(!grafVisible){
		document.getElementById("grafCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";
		grafVisible = true;
	} else {
		document.getElementById("grafCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";
		grafVisible = false;
	}
}

function showUI(){
	if(!uiVisible){
		document.getElementById("uiCanvas").style.display = "inherit";
		document.getElementById("menu").style.display = "none";
		document.getElementById("cover").style.visibility = "visible";
		uiVisible = true;
	} else {
		document.getElementById("uiCanvas").style.display = "none";
		document.getElementById("menu").style.display = "inherit";
		document.getElementById("cover").style.visibility = "hidden";
		uiVisible = false;
	}
}