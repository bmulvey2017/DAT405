//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//01_NoiseCircle

//Setup of variables
let r = 200;
let g = 200;
let b = 100;
let speed = 5;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;
var hasPressed;
var value = false;
var valueColor = false;

function setup() {
  createCanvas(500, 500);
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;

  x2 = width/2;
  y2 = width/2;

  {let x1 = map(height, 0, width, 0, 250);
  let y1 = map(width, 0, height, 250, 0);}

  noStroke();

  let circleArray = [];
  let arraySize = 1000;

  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(x1, y1, random(-5, 5), random(-5, 5), random(10, 100));
  }

  background(200);
  //frameRate(1);
}
//! let computer know if the mouse is being clicked or not
//function mousePressed(){
//  hasPressed = !hasPressed;
//  return false;
//}

function mousePressed() {
  if (value == false) {
        value = true;
  }
  else {
    value = false;
  }
}

function keyPressed() {
  if (keyCode === ENTER && valueColor == false) {
    valueColor = true;
  }
  else if (keyCode === ENTER && valueColor == true) {
    valueColor = false;
  }
}


function draw() {
  //In the following four lines of the code, we add to x1 and y1
  //a random amoung between -3 to 3 for each frame. This makes the
  //position of the shape to jiggle randomly. In addition to this,
  //the constrain function will make sure that x1 and y1 will always
  //stay within the boundaries of the sketch (0 to 500)
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

x2=500-x1;
y2=500-y1;

if (valueColor == true) {
  r = random(255);
  g = random(255);
  b = random(255);
}

fill(r, g, b, 120);

 if (value == false) {
//if (hasPressed) {
ellipse(x1, y1, diameter, diameter);
ellipse(x2, y1, diameter, diameter);
ellipse(x1, y2, diameter, diameter);
ellipse(x2, y2, diameter, diameter);

ellipse(x1/2, y1/2, diameter, diameter);
ellipse(x2/2, y1/2, diameter, diameter);
ellipse(x1/2, y2/2, diameter, diameter);
ellipse(x2/2, y2/2, diameter, diameter);

ellipse(x1*2, y1*2, diameter, diameter);
ellipse(x2*2, y1*2, diameter, diameter);
ellipse(x1*2, y2*2, diameter, diameter);
ellipse(x2*2, y2*2, diameter, diameter);
//}
}
else {
translate(-25, -25);
rect(x1, y1, diameter, diameter);
rect(x2, y1, diameter, diameter);
rect(x1, y2, diameter, diameter);
rect(x2, y2, diameter, diameter);
translate(-25, -25);
rect(x1/2, y1/2, diameter, diameter);
rect(x2/2, y1/2, diameter, diameter);
rect(x1/2, y2/2, diameter, diameter);
rect(x2/2, y2/2, diameter, diameter);
translate(-25, -25);
rect(x1*2, y1*2, diameter, diameter);
rect(x2*2, y1*2, diameter, diameter);
rect(x1*2, y2*2, diameter, diameter);
rect(x2*2, y2*2, diameter, diameter);
}

}

class Circle{

  constructor(x1, y1, speedX, speedY, size){
    //Setup of class' variables
    this.x = x1;
    this.y = y1;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.color = random(255);


  }
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + random(-speedX, speedX);
    this.y = this.y + random(-speedY, speedY);

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width && this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) && this.y<0){
      this.speedY *= -1;
    }
  }
}
  //reverse(-speed, speed);

  //Press the mouse to change the values of r, g, b
  //which following in the fill() they control the color of the shape
