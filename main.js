noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload(){

}

function draw(){
    background("blue");
    fill("pink");
    stroke("black");
    text("Khushi", noseX, noseY);
    textSize(difference);
}

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(200,200);
    canvas = createCanvas(600,400);
    canvas.position(650,200);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotpose);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotpose(result){
    if(result.length>0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
    }
    else{
        console.log("your code has error");
    }
}