var player,playerImg;
var ground,groundImg;
var spike,spikeImg,spikeGroup;
var gameState="play";
var edges;
var invisibleGround;

function preload(){
  playerImg=loadAnimation("Player/p1.png","Player/p2.png","Player/p3.png","Player/p4.png",
  "Player/p5.png","Player/p6.png","Player/p7.png","Player/p8.png","Player/p9.png",
  "Player/p10.png","Player/p11.png","Player/p12.png","Player/p13.png","Player/p14.png",
  "Player/p15.png","Player/p16.png","Player/p17.png","Player/p18.png","Player/p19.png",
  "Player/p20.png");
  groundImg=loadImage("ground.jpg");
  spikeImg=loadImage("spike.png");
}

function setup() {
  createCanvas(700,400);
  ground = createSprite(200, 200, 600, 400);
  ground.addImage(groundImg);
  ground.velocityX=-6;
ground.scale=1.8;

player=createSprite(50,100,50,50);
player.addAnimation("running",playerImg);
player.scale=0.5;

invisibleGround=createSprite(0,380,700,20);
invisibleGround.visible=false;

edges=createEdgeSprites();
spikeGroup=new Group();
}

function draw() {
  background(0);
  if (ground.x<200){
    ground.x=ground.width/2
  }
  if (keyDown("space")&&player.y>20){
    player.velocityY=-10;
  }
  player.velocityY=player.velocityY+0.5;

  player.collide(invisibleGround);
  player.collide(edges);
  spawnSpike();
  drawSprites();
}

function spawnSpike(){
  if (frameCount%200===0){
    spike=createSprite(680,300,50,50);
    spike.velocityX=-6;
    spike.addImage(spikeImg);
    spike.scale=0.4;
    spike.lifetime=700;
    spikeGroup.add(spike)
  }
}