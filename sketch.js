const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var circ;
function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var option ={
  isStatic : true
}
var option2={
  restitution:1
}
circ=Bodies.circle(200,200,10,option2);

 ground = Bodies.rectangle(200,350,400,50,option);
 World.add(world,ground);
 World.add(world,circ);
 //console.log(object);
// console.log(object.position.x);

}

function draw() 
{
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);
  fill("green")
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  fill("red")
  ellipse(circ.position.x,circ.position.y,10,10);
}