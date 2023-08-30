const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var particles = [];
var plinkos = [];
var divisions =[];
var ground;
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    ground = new Ground(width/2,height,width,20);

    Engine.run(engine);
}
 


function draw() {
  background("black");
  textSize(20)
  text("500",100,760);
  text("500",25,760);
  text("500",175,760);
  text("500",250,760);
  text("100",325,760);
  text("100",400,760);
  text("100",495,760);
  text("100",570,760);
  text("300",655,760);
  text("300",740,760);
  text("300",795,760);
  text("300",880,760);
  text("Score : "+score,100,100);
  if(gameState=="end")
  {textSize(50);
    text("GameOver",400,400);
  }

  //Engine.update(engine);
 ground.display();
 if(particle!=null)
 {//console.log(particle.body.position.x);
  //console.log(particle.position.x);
  particle.display();
  if(particle.body.position.y>760)
  {
   if(particle.body.position.x<300)
   {
    score=score+500;
    particle=null;
   }
   else if(particle.body.position.x>300&&particle.body.position.x<600)
   {
    score=score+100;
    particle=null;
   }
   else if(particle.body.position.x>600&&particle.body.position.x<900)
   {
    score=score+200;
    particle=null;
   }
   else{

   }
  }
 }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(turn==5)
   {
     gameState="end";
   }

   //drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {//console.log("kk");
    turn++;
    particle=new Particle(mouseX,10,10,10);
  }


}