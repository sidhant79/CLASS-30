const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;

//all cannonballs will be stored
var balls=[]



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  

  var a=[1,7,90,53]
  

 //push- Add elements to an array
  a.push(100)
  console.log(a)

  //pop- remove elements from an array
  a.pop()
  console.log(a)
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
 

  //for loop- To access elements of an array
  for(var i=0;i<balls.length;i++){
     showCannonBalls(balls[i],i)
  }
 
}

function  showCannonBalls(ball,index){
  ball.display()
  if(ball.body.position.x > width||ball.body.position.y > height-50){
    World.remove(world,ball.body);
    balls.splice(index,1)
  }
}

function keyPressed(){

  if(keyCode=== DOWN_ARROW){
   var cannonBall = new CannonBall(cannon.x, cannon.y);
   balls.push(cannonBall)
  }
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {

    //length-1 ->last element of an array (last ball)
    balls[balls.length-1].shoot()
  }
}
