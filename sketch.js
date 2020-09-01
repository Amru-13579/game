function preload(){
  grapes= loadImage("grapes.png");
  kiwi = loadImage("kiwi.jpg");
  orange = loadImage("orange.png");
  raspberry = loadImage("raspberry.png");
  strawberry = loadImage("strawberry.png");
  tomato = loadImage("tomato.png");
}

function setup() {
  createCanvas(400, 800);
  createSprite(100,100,20,20);
  
}

function draw() {
  background(220);
  drawSprites();
}