var garden,rabbit;
var gardenImg,rabbitImg;
var apple, orangeLeaf


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
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
rabbit.x = mouseX
garden.setVelocityY = 2

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2))

if(frameCount%80==0){
  if(select_sprites==1){
    createApples();
  }
  else{
    createLeaf();
  }
}
 

  drawSprites();
  
}


function createApples(){
apple = createSprite(random(50, 350), random(50, 150), 30, 30)
apple.addImage("appleimg", appleImg)
apple.scale = 0.1
apple.lifetime = 80
}

function createLeaf(){
orangeLeaf = createSprite(random(50, 350,), random(50, 150), 30, 30)
orangeLeaf.addImage("orangeimg", orangeImg)
orangeLeaf.scale = 0.1
orangeLeaf.lifetime = 80
}
