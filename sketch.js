
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bin1,bin2,bin3;
var ground,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin1 = new Dustbin(1400,600,20,150);
	bin2 = new Dustbin(1240,600,20,150);
	bin3 = new Dustbin(1320,680,150,5);	

	ground = new Ground(800,682,1600,20)

	paper = new Paper(200,680)

	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		width: 1600,
		height: 700,
		wireframes: false
		}
	});

	Engine.run(engine);
	Render.run(render);*/

}


function draw() {
 
  background("white");
  Engine.update(engine);

  bin1.display();
  bin2.display();
  bin3.display();

  ground.display();
  paper.display();

 stroke("yellow")
  fill("black")
  textSize(30);
  text("use ARROW KEYS to throw the paper into the trash can ",400,100)
  stroke("cyan")
  fill("black")
  textSize(20);
 text("press SPACE to start again",600,200);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85});
	
	  }
	  if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	
	  }
	  if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:45});
	
	  }
	  if(keyCode === 32){
		Matter.Body.setPosition(paper.body,{x:200,y:680})
	}
}


