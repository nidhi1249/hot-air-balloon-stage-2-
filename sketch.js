var bg,bgImg;
var balloon,balloonImg;

function preload(){
  bgImg=loadImage('assets/bg.png');
  balloonImg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
  obsTop1=loadImage ("assets/obsTop1.png");
  obsTop2=loadImage ("assets/obsTop2.png");
}

function setup(){
  bg=createSprite(165,485,1,1);
  bg.addImage(bgImg);
  bg.scale=1.3

  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible=false
  
  topGround=createSprite(200,10,800,200);
  topGround.visible=false;
  
  balloon=createSprite(100,200,20,50);
  balloon.addAnimation('balloon',balloonImg);
  balloon.scale=0.2;






}

function draw(){
  background("black");

  if(keyDown("space")){
    balloon.veloctyY=-6;

  }
  balloon.velocityY=balloon.vlocityY+2;

  drawSprites();

  spawnObstaclesTop();

  
}
function spawnObstaclesTop(){
  if(World.frameCount % 60===0){
  obstacleTop=createSprite(400,50,40,50);
  obstacleTop.scale=0.1;
  obstacleTop.velocityX=-4;

  obstacleTop.y=Math.round(random (10,100));
  
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1 : obstacleTop.addImage(obsTop1);
                  break;
    case 2 : obstacleTop.addImage(obsTop2);
              break;
    default : break;
  }
  obstacleTop.lifetime=100;
  balloon.depth=balloon.depth+1;

}
}