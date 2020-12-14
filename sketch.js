var rect1,rect2;
var rect3;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(100,300,50,50);
  rect3=createSprite(700,300,50,50);
  rect2.velocityX=5;
  rect3.velocityX=-5;
}

function draw() {
  background(255,255,255);
  rect1.x=mouseX;
  rect1.y=mouseY;
  if(isTouching(rect1,rect2)){
    rect1.shapeColor="red";
    rect2.shapeColor="green";
  }  
  else{
    rect1.shapeColor="blue";
    rect2.shapeColor="yellow";
  }
  bounceOff(rect2,rect3);
  drawSprites();
}
