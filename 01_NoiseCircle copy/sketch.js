
//Setup of variables
let r = 0;
let g = 0;
let b = 0;
let speed = 5;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;
var value = false;
var valueColor = false;

//initialization finction
function setup() {
  createCanvas(594, 841);

  //frameRate(5)
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;

  x2 = width/2;
  y2 = width/2;

  {let x1 = map(height, 0, width, 0, 297);
  let y1 = map(width, 0, height, 420.5, 0);}

  //noStroke();

  let circleArray = [];
  let arraySize = 1000;

  for (let i=0; i<arraySize; i++){

  background(200);
  //frameRate(1);
}

function keyPressed() {
  if (keyCode === ENTER && valueColor == false) {
    valueColor = true;
  }
  else if (keyCode === ENTER && valueColor == true) {
    valueColor = false;
  }
}

function mouseClicked(){
  if (value == false){
    value = true;
    console.log("change to true");
  }
  else if (value == true) {
    value = false;
    console.log("change to false")
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

//if valueColor
if (valueColor == true) {
  r = random(255);
  g = random(255);
  b = random(255);
}

var mouseYguy;
if (mouseY < 50) {
  mouseYguy = 1;
}
else {
mouseYguy = mouseY/800;
}

scale(mouseYguy);

var middle = 50;
var middle2 = 150;
 if (value == false) {


fill (r, g, b);
ellipse(x1+middle, y1+middle2, diameter, diameter);
ellipse(x2+middle, y1+middle2, diameter, diameter);
ellipse(x1+middle, y2+middle2, diameter, diameter);
ellipse(x2+middle, y2+middle2, diameter, diameter);

push()
rotate(radians(90));
translate(0, -500);

ellipse(x1+middle2, y1-middle, diameter, diameter);
ellipse(x2+middle2, y1-middle, diameter, diameter);
ellipse(x1+middle2, y2-middle, diameter, diameter);
ellipse(x2+middle2, y2-middle, diameter, diameter);
pop()
}

else if (value == true) {
fill(r, g, b);
translate(-25, -25);
rect(x1+middle, y1+middle2, diameter, diameter);
rect(x2+middle, y1+middle2, diameter, diameter);
rect(x1+middle, y2+middle2, diameter, diameter);
rect(x2+middle, y2+middle2, diameter, diameter);

push();
rotate(radians(90));
translate(0, -550);

rect(x1+middle2, y1-middle, diameter, diameter);
rect(x2+middle2, y1-middle, diameter, diameter);
rect(x1+middle2, y2-middle, diameter, diameter);
rect(x2+middle2, y2-middle, diameter, diameter);
pop();

}
}
  //Press the mouse to change the values of r, g, b
  //which following in the fill() they control the color of the shape
