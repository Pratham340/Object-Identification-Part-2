video = "";
status = "";

function setup() {
    canvas = createCanvas(640, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("cocossd Loaded");
    status=true;
    objectDetector.detect(video,gotResult);
}

function preload() {
    video = loadImage("Screenshot_20210121-163320-009.png");
}

function draw() {
    image(video, 0, 0, 640, 500);
    fill("red");
    text("Mouse", 45, 80);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);
}
function gotResult(error,results) {
if(results){
    console.log(results);
}
else{
    console.log(error);
}
}
function home() {
    window.location ="index.html";
}