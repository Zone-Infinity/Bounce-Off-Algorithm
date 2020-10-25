var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(100,400,50,50);
  gameObject1.velocityX = 5;
  gameObject1.shapeColor = "red";

  gameObject2 = createSprite(700,400,50,50)
  gameObject2.velocityX = -5;
  gameObject2.shapeColor = "red";

}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(gameObject2, gameObject1);

  drawSprites();
}
