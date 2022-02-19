var backgoundImg,player,playerImg

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  playerImg = loadImage("player.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  player = createSprite(100, 300, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.8;
  snow1 = new Snow(50,10,50,50);
  snow2 = new Snow(150,10,50,50);
  snow3 = new Snow(250,10,50,50);
  snow4 = new Snow(350,10,50,50);
  snow5 = new Snow(450,10,50,50);
  snow6 = new Snow(550,10,50,50);
  snow7 = new Snow(650,10,50,50);
  snow8 = new Snow(750,10,50,50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === 39 ){
      player.x = player.x + 10
  }
  if(keyCode === 37){
      player.x = player.x - 10
  }
}