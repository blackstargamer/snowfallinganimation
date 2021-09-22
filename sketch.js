const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg, snow, snowIMG, snowBody;

function preload(){
  bg = loadImage("snow3.jpg");
  snowIMG = loadImage("snow4.webp")
}
function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  snowBody = Bodies.rectangle(Math.round(random(5, 695)), 0, 10 , 10, {restitution: 0.4})
  World.add(world, snowBody);
  Engine.run(engine);
}

function draw() {
  background(bg);
  spawnSnow(); 
  snow.display();
  drawSprites();
}
function spawnSnow(){
  if(frameCount % 50 === 0){
    snow =createSprite(Math.round(random(5, 695)), 0, 10 , 10);
    snow.addImage(snowIMG);
    snow.scale = 0.2;
    snow.velocityY = 3;
  }
}