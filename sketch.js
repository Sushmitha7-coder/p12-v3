var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png");
  oImage=loadImage("orangeLeaf.png");
  gImage=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  


  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
   

  spawnApple();
  spawnLeaves()

  drawSprites();
}

function spawnApple(){
  if(frameCount%80 === 0){
    apple=createSprite(Math.round(random(10,350)),0);
    apple.velocityY=2;
    apple.addImage(appleImage);
    apple.scale=0.05;
    apple.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
  }
}

function spawnLeaves(){
  var r=Math.round(random(1,2))
  console.log(r)
  if(frameCount%80 === 0){
    if(r==1){
      orange=createSprite(Math.round(random(10,350)),0);
      orange.velocityY=3;
      orange.addImage(oImage);
      orange.scale=0.05;
    }
    else{
      green=createSprite(Math.round(random(10,350)),0);
      green.velocityY=3;
      green.addImage(gImage);
      green.scale=0.05;
    }
  }
}