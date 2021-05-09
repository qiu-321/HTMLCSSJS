var button = document.getElementById("start-btn");

var myDiv = document.getElementById("startbtn");

var diffmodes = document.getElementById("difficulty-modes");

var casualbtn = document.getElementById("start-btn-easy");

var endGamebtn = document.getElementById("endGame");

var pops = document.getElementById("pops");

var everything = document.getElementById("everything");

function toggle(divName){
	if(divName.style.display === "none"){
		divName.style.display = "block";
	}
	else{
		divName.style.display = "none";
	}
}

button.onclick = function(){toggle(myDiv); toggle(diffmodes)};

endGamebtn.onclick = function(){toggle(pops);toggle(everything)};
