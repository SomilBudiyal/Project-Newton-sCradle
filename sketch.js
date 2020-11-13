
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
 
	bob1 = new Bob(400,600,70);
	bob2 = new Bob(450,600,70);
	bob3 = new Bob(500,600,70);
  bob4 = new Bob(350,600,70);
  bob5 = new Bob(300,600,70);		
	
  roof = new Roof(400,400,350,25);
  
  chain1 = new Chain(bob1.body,roof.body,100*2,700); 
  chain2 = new Chain(bob2.body,roof.body,80*5,300); 
  chain3 = new Chain(bob3.body,roof.body,60*6,300);
  chain4 = new Chain(bob4.body,roof.body,-40*8,300); 
  chain5 = new Chain(bob5.body,roof.body,-20*2,300); 

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