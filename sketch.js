var snow ,  girl , g , ground


function preload(){
  snow=loadImage("snow2.jpg")
  girl=loadImage("girl.png")
}
 
function setup() {
  createCanvas(800,400);
  g=createSprite(700, 250, 50, 50);
  g.addImage(girl)
  g.scale=0.4

  ground=createSprite(400,380,800,10)
  ground.visible=false
}

function draw() {
  background(snow);
  if(keyDown("space")){
    g.velocityY=-5

  }  
  g.velocityY+=1
  g.collide(ground)
  drawSprites();
}