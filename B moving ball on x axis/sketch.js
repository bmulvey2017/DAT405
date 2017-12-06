let size = 50
let speedY;
let speedX
let x = 0;
let y = 0;

function setup() {
  createCanvas(400,400);
  speedY = random (4);
  speedX = random (4);
  console.log(speedX);
}

function draw() {
  //background(120);

  if (x > 400) {
  speedY = random (4);
  speedX = random (4);
  }
  else if (y > 400) {
  speedY = random (4);
  speedX = random (4);
  }

  x = x + speedX;
  y = y + speedY
  fill(random(255),random(255),random(255));
  ellipse(x, y, random(100), random(25));
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
