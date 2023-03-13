const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var snow;

var bg = "snow1.jpg";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world

    


}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    
  
     

   drawSprites();
}

async function getBackgroundImg(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=0 && hour<18 ){
        bg = "snow2.jpg";
    }
    else{
        bg="snow3.jpg"
    }
    
    backgroundImg = loadImage(bg);
}


