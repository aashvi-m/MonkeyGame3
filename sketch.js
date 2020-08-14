var banana, bananaImage, foodGroup
var obstacleImage, obstacle, obstacleGroup
var bgImg, bg, score, ground
var player, player_running

function preload(){
 bgImg=loadImage("jungle.png");
  player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(200,200,400,400);
  bg.addImage("bg",bgImg);
  bg.velocityX = -4;
  bg.scale=2;
  
  ground = createSprite(400,370,400,10);
  ground.visible=false;
  
  player=createSprite(80,320,20,10);
  player.addAnimation("running", player_running);
  player.scale=0.2;
  
}



function draw() {
  background(220);
  
  bg.x = bg.width /2;
  ground.x = ground.width /2;
  

  
  drawSprites();
  }