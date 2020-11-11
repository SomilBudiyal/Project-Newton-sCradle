
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function preload(){}	

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;
 
	bob1 = new Bob(100,300,70);
	bob2 = new Bob(80,300,70);
	bob3 = new Bob(60,300,70);
	bob4 = new Bob(40,300,70);
  bob5 = new Bob(20,300,70);		
	
  roof = new Roof(400,200,350,25);
  
  chain1 = new Chain(roof.body,bob1.body,-70*2,0); 
  chain2 = new Chain(roof.body,bob2.body,-60*2,0); 
  chain3 = new Chain(roof.body,bob3.body,-50*2,0); 
  chain4 = new Chain(roof.body,bob4.body,-40*2,0); 
  chain5 = new Chain(roof.body,bob5.body,-30*2,0); 

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("red");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}