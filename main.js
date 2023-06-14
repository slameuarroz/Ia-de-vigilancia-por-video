var status1 = "";
var objects = []
function draw(){

}
function preload(){
    video= createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380)
    canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoad());
    document.getElementById("status").innerHTML="objeto detectado!";
}
function modelLoad(){
    console.log("Modelo Carregado!");
    status1 = true;
    video.loop()
    video.speed(1)
    video.volume(0)
}