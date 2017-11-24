//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//02_Coordinates

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);

  //No stroke for shapes
  noStroke();
}


//Rendering function
function draw() {

  //Body
  fill(255, 255, 0);
  ellipse(200,200, 300, 300);

  //left eye
  fill(0);
  ellipse(250, 160, 25, 70);

  //right eye
  fill(0);
  ellipse(150, 160, 25, 70);


    //mouth
    fill(0);
    rect(180, 280, 50, 10);

    fill(0)
    rect(125, 250, 10, 10)
    fill(0)
    rect(275, 250, 10, 10)

    rect(135, 260, 10,10)
    rect(265, 260, 10, 10)

    rect(145, 270, 10, 10)
    rect(255, 270, 10, 10)

    rect(155, 273, 10, 10)
    rect(245, 273, 10, 10)

    rect(165, 275, 10, 10)
    rect(235, 275, 10, 10)

    rect(175, 278, 10, 10)
    rect(225, 278, 10, 10)

}
