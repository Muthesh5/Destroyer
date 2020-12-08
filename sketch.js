const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint

var engine,world;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world; 

  ground=Bodies.rectangle(400,390,800,40,{isStatic:true})

  ball = new Ball(200,260,40)

  World.add(world,ground)

  console.log(ground)

  Engine.run(engine)

  b1 = new Box(600,200,20,20)
  b2 = new Box(600,220,20,20)
  b3 = new Box(600,240,20,20)
  b4 = new Box(600,260,20,20)
  b5 = new Box(600,280,20,20)
  b6 = new Box(600,300,20,20)
  b7 = new Box(600,320,20,20)
  b8 = new Box(600,340,20,20)
  b9 = new Box(600,360,20,20)
  b10 = new Box(600,380,20,20)
  b11 = new Box(640,200,20,20)
  b12 = new Box(640,220,20,20)
  b13 = new Box(640,240,20,20)
  b14 = new Box(640,260,20,20)
  b15 = new Box(640,280,20,20)
  b16 = new Box(640,300,20,20)
  b17 = new Box(640,320,20,20)
  b18 = new Box(640,340,20,20)
  b19 = new Box(640,360,20,20)
  b20 = new Box(640,380,20,20)


  holder = new Holder(350,20,30)

  chain = new Chain(ball.body,holder.body);

}

function draw() {
  background("lightgreen");  

  Engine.update(engine);

  //console.log(ball.body.position.y)

  fill("brown")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,40)

  ball.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display(); 
  b8.display();
  b9.display(); 
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  holder.display();

  chain.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX ,y: mouseY});
}