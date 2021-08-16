function preload() {
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(500, 400)
    video.hide();

    poseNet = ml5.poseNet(video, modelloded);
    poseNet.on('pose',gotposes);
}

function gotposes(results)
{
    if(results.length > 0)
    {
    console.log(results)
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelloded() {
    console.log('poseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 500, 400);
}

function take_snapshot(){
    save('myFilterImage.png');
}



