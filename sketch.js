const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var startBobPositionX, startBobPositionY;

function setup(){
  var canvas = createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;

  roof1 = new Roof(width/2, height/4, width/7, 40);
  bobDiameter = 50;
  startBobPositionX = width/2;
  startBobPositionY = height/4+500;
  bobObject1 = new Bob(startBobPositionX-bobDiameter*2, startBobPositionY, bobDiameter);
  bobObject2 = new Bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter);
  bobObject3 = new Bob(startBobPositionX, startBobPositionY, bobDiameter);
  bobObject4 = new Bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
  bobObject5 = new Bob(startBobPositionX+bobDiameter*2, startBobPositionY, bobDiameter);

  joint1 = new Chain(bobObject1.body,roof1.body, -bobDiameter*2, 0);
  joint2 = new Chain(bobObject2.body,roof1.body, -bobDiameter*1, 0);
  joint3 = new Chain(bobObject3.body,roof1.body, 0, 0);
  joint4 = new Chain(bobObject4.body,roof1.body, bobDiameter*1, 0);
  joint5 = new Chain(bobObject5.body,roof1.body, bobDiameter*2, 0);
  
}

function draw(){
  background(225);
  Engine.update(engine);
  roof1.display();
  console.log(bobObject1.mass)
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  joint1.display();
  joint2.display();
  joint3.display();
  joint4.display();
  joint5.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50, y:-45})
  }
}