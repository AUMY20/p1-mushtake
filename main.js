function preload()
{

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
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }
}

function modelLoded()
{
console.log("check");
}

function draw()
{
    image(cam,0,0,300,300);

}

function snap_save()
{
    save('with_mushtake.png');
}