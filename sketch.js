const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	 boyImg = loadImage("sprites/boy.png")
	 treeImg = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	stone1 = new rock(180,420,40,40)

	sling1 = new sling(stone1.body,{x: 145, y: 425});

	mango1 = new mango(500,200,60,60);
	mango2 = new mango(600,250,60,60);
	mango3 = new mango(700,300,60,60);
	mango4 = new mango(450,300,60,60);
	mango5 = new mango(550,350,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(233);

  image(boyImg,100,350,200,300)
  image(treeImg,350,150,450,450)

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling1.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling1.fly();
}

function detectCollision(xStone,xMango){
	mangoPos = xMango.body.position
	rockPos = xStone.body.position

	var distance = dist(rockPos.x,rockPos.y,mangoPos.x,mangoPos.y)
	console.log(distance)
	if(distance <= xMango.width/1.5 + xStone.width/2){
		Matter.Body.setStatic(xMango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x: 180, y: 420})
		sling1.attach(stone1.body);
	}
}


