let posicionX; 100
function setup() {
  
  createCanvas(400, 400);
 
  
  stroke (255)
  
  background(255);
}

function draw() {
  
  background(255);
  stroke(0,0,0)
  //LINEAS//
  line(300,0,300,mouseX);
   line(0,300,0,mouseX);
  stroke(0,0,0)
  line(80,0,80,mouseX);
  stroke(0,0,0)
  line(0,300,mouseX,300);
  stroke(0,0,0)
 line(400,200,mouseX,200);
  line(80,0,80,mouseX);
   line(200,0,200,mouseX);
   line(100,0,100,mouseX);
   line(200,400,mouseX,400);

  //RECTANGULOS//
  rect(200,300,mouseX,100)
  fill(200,0,0);
rect(mouseX,0,150,100);
  fill(0,0,150);
  rect(0,mouseX,50,50);
  fill(0,0,0);
  rect(60, mouseY, 100, 55);
  fill(0,0,0)
  rect(mouseY,170,90,60)
  fill(255,204,0)
  
  
  
}