
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 550, 800, 20);
  tree = new Tree(600, 400, 400, 600);
  boy = new Boy(200, 400, 200, 300)
  stone = new Stone(137, 400, 50, 50)
  mango1 = new Mango(545, 46, 50, 50)
  mango2 = new Mango(635, 42, 50, 50)
  mango3 = new Mango(502, 160, 50, 50)
  mango4 = new Mango(567, 204, 50, 50)
  mango5 = new Mango(583, 104, 50, 50)
  mango6 = new Mango(648, 162, 50, 50)
  mango7 = new Mango(694, 112, 50, 50)
  mango8 = new Mango(725, 201, 50, 50)
  rope = new Rope(stone.body, { x: 137, y: 400 })




  Engine.run(engine);

}


function draw() {
  background('lightBlue');
  text(mouseX + ',' + mouseY, 50, 50)
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  rope.display()

  detectollision(stone, mango1)
  detectollision(stone, mango2)
  detectollision(stone, mango3)
  detectollision(stone, mango4)
  detectollision(stone, mango5)
  detectollision(stone, mango6)
  detectollision(stone, mango7)
  detectollision(stone, mango8)

  drawSprites();

}
function mouseDragged() {

  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })

}
function mouseReleased() {

  rope.fly()

}
function keyPressed() {

  if (keyCode === 32) {

    Matter.Body.setPosition(stone.body, { x: 235, y: 420 })
    rope.attach(stone.body);

  }

}
function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false);
  }

}

