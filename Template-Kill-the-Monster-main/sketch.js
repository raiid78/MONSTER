const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var background, backgroundImage;
var monster;
var superhero;
var ground;
var rope;

function preload() {
//preload the images here
    backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 400, 700, 20);

  superhero = new Superhero(200, 300);

  rope = new Rope(ball.body, {x: 500, y:500});

  monster = new Monster(400, 400);


}

function draw() {
  background(0);

  ground.display();

  superhero.display();

  rope.display();

  monster.display();
}

