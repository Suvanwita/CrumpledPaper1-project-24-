
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var paper,ground;


function setup() {
	var canvas = createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
	
	//create the paper
	paper=new Paper(50,50,10);
	
	//Create a Ground
	ground = new Ground(750,540,1500,20);
	 
	leftDustbinWall=new DustbinWall(1050,450,20,150);
	RightDustbinWall=new DustbinWall(1300,450,20,150);
	BottomDustbinWall=new DustbinWall(1175,527,250,15);
	
	
	Engine.run(engine);
  }

function draw() {
   background(0);
   Engine.update(engine);
   ground.display();
   leftDustbinWall.display();
   RightDustbinWall.display();
   BottomDustbinWall.display();
  
  // paper.x=mouseX;
//	paper.y=mouseY;

   paper.display();
   

   console.log();
  
 keyPressed();
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		if(paper.body.position.x<550){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.7,y:-2});
	}
	if(paper.body.position.x>=550){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:2});
	}

}
}

