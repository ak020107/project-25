var  packageSprite,packageIMG;
var packageBody,ground
var red1
var red2
var red3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 635 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	red1 = Bodies.rectangle(600, 650, 200, 20, {isStatic:true} );
	 World.add(world, red1);
	 red2 = Bodies.rectangle(700, 610, 20, 100 , {isStatic:true} );
	 World.add(world, red2);
	 red3 = Bodies.rectangle(500, 610, 20, 100, {isStatic:true} );
	 World.add(world, red3);
	 

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  rect(red1.position.x, red1.position.y, 200, 20)
  rect(red2.position.x, red2.position.y, 20, 100)
 rect(red3.position.x, red3.position.y, 20, 100)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === W) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.applyForce(packageSprite.body,packageSprite.body.position,{x:85,y:-85});
    
  }
}



