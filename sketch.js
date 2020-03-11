const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
function preload(){backgroundImg=loadImage("sprites/bg.png");}
function setup(){var canvas=createCanvas(1275,550);
engine=Engine.create();
world=engine.world;
g1=new Ground(650,height-5,1275,10);
g2=new Ground(500,320,150,10);
g3=new Ground(920,400,150,10);
g4=new Ground(700,450,150,10);
g5=new Ground(725,200,150,10);
g6=new Ground(1100,270,10,150)
box1=new Box(700,320,70,70);
box2=new Box(920,40,70,70);
box3=new Box(700,240,70,70);
box4=new Box(500,190,70,70);
box5=new Box(500,225,70,70);
box6=new Box(1100,0,70,70);
log1=new Log(880,260,90, PI/1);
log2=new Log(960,260,90, PI/1);
log3=new Log(920,180,150, PI/2);
log4=new Log(700,260,150, PI/2);
log5=new Log(500,165,150, PI/2);
log6=new Log(730,50,50, PI/1);
log7=new Log(730,0,50, PI/1);
log8=new Log(730,-50,50, PI/1);
log9=new Log(730,-100,150, PI/2);
log10=new Log(1100,30,150,PI/2);
bird=new Bird(100,200);
slingshot=new Slingshot(bird.body,{x:200,y:200});}
function draw(){background(backgroundImg);
Engine.update(engine);
strokeWeight(4);
box1.display();
box2.display();
g1.display();
g2.display();
g3.display();
g4.display();
g5.display();
g6.display();
log1.display();
box3.display();
box4.display();
log2.display();
box5.display();
box6.display();
log3.display();
log4.display();
bird.display();
log5.display();
log6.display();
log7.display();
log8.display();
log9.display();
log10.display();
slingshot.display();}
function mouseDragged(){Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});}
function mouseReleased(){slingshot.fly();}