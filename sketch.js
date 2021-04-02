var grass1;
var grass2;
var canvas;
var car,carImg;
var invisibleRoad;
var obstaclesGroup, obstacle1;
var obstacle;
var PLAY=1;
var END=0;
var sound;
var driving;
function preload(){

  obstacle1=loadImage("obstacle1.png")
  carImg=loadImage("car.png")
  sound=loadSound("game-over.mp3")
  driving=loadSound("drivingSound.mp3")
}

function setup(){
  canvas = createCanvas(1300,500);

  grass1=createSprite(10,250,200,9999999999999999)
  grass1.shapeColor="green";

  grass2=createSprite(1290,250,200,99999999999999)
  grass2.shapeColor="green";


  car= createSprite(600,200,50,50);
  car.addImage(carImg)
  car.scale=0.5
  car.setCollider("rectangle",0,0,car.width,car.height);
  car.debug = false
  
 
  obstaclesGroup=new Group();
}


function draw(){
 background(55);
 

 
  
  

  if(PLAY){
    
    spawnObstacles();
    //car.velocityY=-5;
    
    stroke("white");
    textSize(50);
    fill("white")
    text("PRESS UP ARROW TO START", 450,40)
    camera.position.y=car.position.y;
    if(keyDown(UP_ARROW)){
      driving.loop()
      camera.position.y=car.position.y;
      gameState=PLAY;
      car.velocityY=-5
      
    }
    if(keyDown(LEFT_ARROW)){
      car.velocityX=-5;
      camera.position.y=car.position.y;
    camera.position.x=1300/2;
    }
  
    if(keyDown(RIGHT_ARROW)){
      car.velocityX=5;
      camera.position.y=car.position.y;
    camera.position.x=1300/2;
    }

  }

  

car.depth=car.depth+10;
  
 

  


  drawSprites();
  if(obstaclesGroup.isTouching(car)|| car.x>1150 || car.x<200){
    
    stroke("white");
    textSize(50);
    fill("yellow")
    text("You Lost , Press Ctrl+R to Retry",250,camera.y);
    car.velocityY=0;
    car.velocityX=0;
    sound.play();
    driving.stop();

  }


}
function spawnObstacles(){

  if (frameCount % 150 === 0){
     obstacle = createSprite(Math.round(random(120,1000)),car.y-1000,10,40);
   
  
      obstacle.addImage(obstacle1);
        
      obstacle.setCollider("rectangle",0,0,obstacle.width-500,obstacle.height-40);
      obstacle.debug = false
    obstacle.depth=obstacle.depth+100

     obstacle.scale = 0.45;
    
  
  obstaclesGroup.add(obstacle);
  }

  if(frameCount % 70 ==0){
    var line = createSprite(650,car.y-300,30,150)
    line.shapeColor="white"


  }

}
