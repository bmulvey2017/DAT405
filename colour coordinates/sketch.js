
//Initialization function
function setup() {
  createCanvas(500,500);
}

//Rendering function
function draw() {
  //Set a background color
  background(255, 0, 0);

  //top left
  fill (225,0,225)
  rect (0, 0, 250, 250)

  //top right
  rect (250, 0, 250, 250)

  //bottom left
  rect (0, 250, 250, 250)

  //bottom right
  rect (250, 250, 250, 250)

  //top left changes colour (if mouseX is greater or equal to 0 (&&=and) smaller or equal to 250.....)
  if (mouseX >= 0 && mouseX <= 250 && mouseY >= 0 && mouseY <= 250){
    fill(255,0,0)
    rect(0,0,250,250)}

  //top right changes colour
  if (mouseX >= 250 && mouseX <= 500 && mouseY >= 0 && mouseY <=250) {
  fill (0, 250, 0)
  rect (250, 0, 250, 250)}

  //bottom left changes colour
  if (mouseX >= 0 && mouseX <= 250 && mouseY >= 250 && mouseY <= 500){
    fill (0, 0, 255)
    rect (0, 250, 250, 250)}

    //bottom right changes colour
    if (mouseX >= 250 && mouseX <= 500 && mouseY >= 250 && mouseY <= 500){
      fill (100, 0, 100)
      rect (250, 250, 250, 250)}

    //centre changes overall colour
    if (mouseX == 250 && mouseY == 250){
      fill (200)
    opacity: .50;
    rect (0, 0, 500, 500)}
}
