//Initialization function
function setup() {
  createCanvas(500,500);
  textSize(20);
  textAlign(CENTER);
}

//Rendering function
function draw() {
  //Set a background color
  background(0);

  let alpha1 = map(mouseX, 0, width, 0, 255);
  let alpha2 = map(mouseX, 0, width, 255, 0);

  //console.log(alpha1);

  let alpha3 = map(mouseY, 0, height, 0, 255);
  let alpha4 = map(mouseY, 0, height, 255, 0);

  //top left
  fill (225, 0, 225, alpha1);
  rect (0, 0, 250, 250);

  //top right
  fill (100, 0, 225, alpha2);
  rect (250, 0, 250, 250);

  //bottom left
  fill (255, 0, 0, alpha3);
  rect (0, 250, 250, 250);

  //bottom right
  fill (100, 255, 0, alpha4);
  rect (250, 250, 250, 250);

  fill(255);

  //concatenation
  text("X: " + mouseX, width/2, height/2)
  text("Y: " + mouseY, width/2, height/2+20)
}
