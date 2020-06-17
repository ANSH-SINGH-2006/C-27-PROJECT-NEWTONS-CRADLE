var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 bob1=new BobClass(200,500,40);
	 bob2=new BobClass(270,500,40);
	 bob3=new BobClass(340,500,40);
	 bob4=new BobClass(410,500,40);
	 bob5=new BobClass(480,500,40);
	 roof=new Roof(340,300,450,40)
	 rope1=new Chain(bob1.body,roof.body,-140,0)
	 rope2=new Chain(bob2.body,roof.body,-70,0)
	 rope3=new Chain(bob3.body,roof.body,0,0)
	 rope4=new Chain(bob4.body,roof.body,70,0)
	 rope5=new Chain(bob5.body,roof.body,140,0)

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  bob1.debug=true
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===37){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:500})
	}
	}



