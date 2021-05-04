var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var arr=[2,3]

arr.push(6)



//for(var i=0;i<arr.length;i++){
  //console.log(arr[i])
//}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var x = 0; x <=750; x = x + 80) {
    divisions.push(new Divisions(x, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var x = 75; x <=width; x=x+50) { 
    plinkos.push(new Plinko(x,75));
  }

  //create 2nd row of plinko objects
  for (var x = 50; x <=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,175));
  }

  //create 3rd row of plinko objects
  for (var x = 50; x <=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,275));
  }

  
  //create 4th row of plinko objects
  for (var x = 50; x <=width-10; x=x+50) 
  {
    plinkos.push(new Plinko(x,375));
  }


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
  particles.push(new Particle(random(50,700),random(10,400)));
  }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
for(var i=0; i< particles.length;i++){
  particles[i].display();
}

}