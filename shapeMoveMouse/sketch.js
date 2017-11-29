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

  let newPositionBlue = map(mouseX, 0, 500, 500, 0);

  fill(255, 0, 0);
  rect(mouseX, 250, 50, 50);

  fill(0, 0, 255);
  rect(newPositionBlue, 250, 50, 50);



  }
