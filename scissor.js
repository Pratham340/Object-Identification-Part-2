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
    video = loadImage("Screenshot_20210121-163519-156.png");
}

function draw() {
    image(video, 0, 0, 640, 500);

    fill("blue");
    text("Scissor", 220, 80);
    noFill();
    stroke("blue");
    rect(200, 50, 270, 400);
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