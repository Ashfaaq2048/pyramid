const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var groundobj,rope;
var ballobj;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


  ballobj = new Ball(x=mouseDragged,y=mouseDragged,50,50);
  groundobj = new Ground(600,300,500,20);
  block1 = new Block(550,280,30,40);
  block2 = new Block(600,280,30,40);
  block3 = new Block(650,280,30,40);
  block4 = new Block(700,280,30,40);
  block5 = new Block(630,230,30,40);
  block6 = new Block(580,230,30,40);
  block7 = new Block(680,230,30,40);
  block8 = new Block(600,190,30,40);
  block9 = new Block(650,190,30,40);
  block10 = new Block(625,150,30,40);
  //rope = new SlingShot(ball.body,{x:500,y:50});



}

function draw(){
    background('black');
    Engine.update(engine);

    groundobj.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    //rope.display();
    ballobj.display();
    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}
