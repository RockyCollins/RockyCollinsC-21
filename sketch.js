var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -4
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = 4
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceOff(movingRect, fixedRect);
   
  drawSprites();
}

function bounceOff (object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(3)
      object2.velocityX = object2.velocityX*(-3)
    }
  
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY*(3)
      object2.velocityY = object2.velocityY*(-3)
    }
}