nose_x = 0;
nose_y = 0;

function preload()
{
    nose = loadImage('mushtake-.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.size(300,300) ;cam.hide();
    union = ml5.poseNet(cam,modelLoded);
    union.on('pose',gotPoses);
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function modelLoded()
{
console.log("check");
}

function draw()
{
    image(cam,0,0,300,300);
    //!#clown nose done manually#!
    //fill(255,150,0);
    // stroke(255,0,0);
    // circle(nose_x,nose_y,20);
    //clown noseusing downloaded image
    image(nose,nose_x-25,nose_y,60,30);

}

function snap_save()
{
    save('with_mushtake.png');
}