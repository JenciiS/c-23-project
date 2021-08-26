const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1;
var roof,body;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
  ball1 = new Ball(200,200,20);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
 
  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x, ball1.position.y, ball1.r);
  ball1.display();
  Engine.update(engine);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
