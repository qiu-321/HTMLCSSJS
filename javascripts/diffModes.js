
let easyBtn = document.getElementById("easy");
let mediumBtn = document.getElementById("medium");
let hardBtn = document.getElementById("hard");
let modeBtns = document.getElementById("difficulty-modes");
let mainGameContainer = document.getElementById("mainGameContainer");

let inEasyMode = false;
let inMediumMode =false;
let inHardMode = false;
var evalbtn = document.getElementById("evaluate");

// change this var to set the time. 
let PRESET_TIME = 60;
let canvasContainer = document.getElementById("canvasContainer");
let canvas = document.getElementById("canvas");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let radius = canvasWidth * 0.4;
let ctx = canvas.getContext("2d");    
ctx.lineWidth = 7;    
let timerBtn = document.getElementById('startTimer');
let animationID;
let startingAngle = 3/2 * Math.PI;
let endingAngle = -Math.PI / 2;
let countDown = "00:00";
ctx.font = '2.5em sans-serif';
ctx.arc(canvasWidth/2,canvasHeight/2, radius, startingAngle , endingAngle,true);
ctx.strokeStyle = "rgb(64, 64, 64)";
ctx.stroke();
ctx.fillStyle = "white";
ctx.fillText(countDown, canvasWidth/2 - (ctx.measureText(countDown).width / 2), canvasHeight/2);

function resetTimer(ctx){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    countDown = "00:00";
    ctx.beginPath();
    ctx.arc(canvasWidth/2,canvasHeight/2, radius, 0 , 2*Math.PI,true);
    ctx.strokeStyle = "rgb(64, 64, 64)";
    ctx.stroke();
    ctx.closePath();
    past = 0;
    min = 0;
    timeElapsed = 0;
    remainingSeconds = 0;
    speed = 0;
    lastPerformed = 0;
    nowPerforming = 0;
    fps = 0;
    startingAngle = 3/2 * Math.PI;
    endingAngle = -Math.PI / 2;
    ctx.fillText(countDown, canvasWidth/2 - (ctx.measureText(countDown).width / 2), canvasHeight/2);
    cancelAnimationFrame(animationID);
}

function animation(){
    resetTimer(ctx);
    let past = (new Date()).getTime();
    let now;
    let min = 0;
    let timeElapsed = 0;
    let remainingSeconds = PRESET_TIME % 60;
    let speed = ((360/PRESET_TIME)*Math.PI) / 180;
    let lastPerformed = performance.now();
    let nowPerforming;
    let fps = 0;
    function animate(){
        ctx.beginPath();
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        nowPerforming = performance.now();
        fps = 1 / ((nowPerforming - lastPerformed)/1000);
        lastPerformed = nowPerforming;
        startingAngle = startingAngle - (speed/fps);
        ctx.arc(canvasWidth/2,canvasHeight/2, radius, startingAngle ,endingAngle,false);
        ctx.strokeStyle = "rgb(153, 153, 153)";
        ctx.stroke();
        ctx.closePath(); 
        ctx.beginPath();
        ctx.arc(canvasWidth/2,canvasHeight/2, radius, startingAngle , endingAngle,true);
        ctx.strokeStyle = "rgb(26, 255, 255)";
        now = (new Date()).getTime();
        timeElapsed = Math.floor( (past - now) / 1000 ) + (PRESET_TIME+1);
        min = convertToMin(timeElapsed);
        remainingSeconds = timeElapsed % 60;
        if(min < 10){
            countDown = "0" + min + ":";
        } else {
            countDown = min + ":";
        }
        if(remainingSeconds < 10) {
            countDown = countDown + "0"+remainingSeconds;
        } else {
            countDown = countDown + remainingSeconds;
        }
        if((startingAngle < endingAngle)){
            resetTimer(ctx);
        } else {
            animationID = requestAnimationFrame(animate);
            ctx.stroke();
        }
        if(countDown === "00:00") {
            toggle(document.getElementById("pops"));
            toggle(document.getElementById("everything"));
        }
        ctx.fillText(countDown, canvasWidth/2 - (ctx.measureText(countDown).width / 2), canvasHeight/2);
    }
    animate();
}  
function convertToMin(seconds){
    return Math.floor(seconds / 60);
}
function convertToSeconds(minutes){
    return (minutes * 60);
}
function decideMode(){
	easyBtn.addEventListener('click', ()=>{
		canvasContainer.style.display = "flex";
		mainGameContainer.style.display ="flex";
		PRESET_TIME = 240;
		modeBtns.style.display ="none";
		animation();
	})
	mediumBtn.addEventListener('click', ()=>{
		canvasContainer.style.display = "flex";
		mainGameContainer.style.display ="flex";
		PRESET_TIME = 90;
		modeBtns.style.display ="none";
		animation();
	})
	hardBtn.addEventListener('click', ()=>{
		canvasContainer.style.display = "flex";
		mainGameContainer.style.display ="flex";
		PRESET_TIME = 45;
		modeBtns.style.display ="none";
		animation();
	})
}
decideMode();
