
function setup() {

  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

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
    }

    background(200);
    //frameRate(1);

  }
  // let computer know if the mouse is being clicked or not

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


     fill(255, 3);
     rect(0, 0, width, height)

  // void draw()
  //  stroke (50, 50);
  // line (0, 0, mouseX, mouseY);

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
  //fill (255);
  var mouseYguy;
  if (mouseY < 50) {
    mouseYguy = 1;
  }
  else {
  mouseYguy = mouseY/800;
  }

  scale(mouseYguy);

  var croc = 50;
  var crocy = 150;
   if (value == false) {

  fill (r, g, b);
  ellipse(x1+croc, y1+crocy, diameter, diameter);
  ellipse(x2+croc, y1+crocy, diameter, diameter);
  ellipse(x1+croc, y2+crocy, diameter, diameter);
  ellipse(x2+croc, y2+crocy, diameter, diameter);

  push()
  rotate(radians(90));
  translate(0, -500);

  ellipse(x1+crocy, y1-croc, diameter, diameter);
  ellipse(x2+crocy, y1-croc, diameter, diameter);
  ellipse(x1+crocy, y2-croc, diameter, diameter);
  ellipse(x2+crocy, y2-croc, diameter, diameter);
  pop()



  //ellipse(x1*2, y1*2, diameter, diameter);
  //ellipse(x2*2, y1*2, diameter, diameter);
  //ellipse(x1*2, y2*2, diameter, diameter);
  //ellipse(x2*2, y2*2, diameter, diameter);
  //}
  }
  else if (value == true) {
  fill(r, g, b);
  translate(-25, -25);
  rect(x1+croc, y1+crocy, diameter, diameter);
  rect(x2+croc, y1+crocy, diameter, diameter);
  rect(x1+croc, y2+crocy, diameter, diameter);
  rect(x2+croc, y2+crocy, diameter, diameter);

  push();
  rotate(radians(90));
  translate(0, -550);

  rect(x1+crocy, y1-croc, diameter, diameter);
  rect(x2+crocy, y1-croc, diameter, diameter);
  rect(x1+crocy, y2-croc, diameter, diameter);
  rect(x2+crocy, y2-croc, diameter, diameter);
  pop();

  }

  //translate(-25, -25);
  //rect(x1*2, y1*2, diameter, diameter);
  //rect(x2*2, y1*2, diameter, diameter);
   //rect(x1*2, y2*2, diameter, diameter);
  //rect(x2*2, y2*2, diameter, diameter);
  //}
  }

    //Press the mouse to change the values of r, g, b
    //which following in the fill() they control the color of the shape
