let size = 50
let speedY;
let speedX
let x = 200;
let y = 200;

function setup() {
  createCanvas(400,400);
  speedY = random (4);
  speedX = random (4)
  console.log(speedX);
}

function draw() {
  //background(120);

  x = x + speedX;
  y = y + speedY
  fill (255);
  ellipse(x, y, size, size);
  //make ball move from left to right
  //function moveRight
  if (x>425){
    x=0;
  }
  if (y>500){
    y=0;
  }
}
  //if ball reaches right, move to left
