
function setup() {

  var canvas = createCanvas(500,500);
  canvas.parent("myContainer");
//makes shapes re randomise every 1 second
  frameRate(20);
}
function draw() {
//depending on what position you put the letter that you have chosen to be random, will randomise between the number you have given e.g 500
//so putting r in position (_, r, _, _) then the y axis will be variable and rndom between 500
// for this condition if i=0, if 0 is less than 10 then add 1(++)
//== is equal to this values
//= equals
//++ add one
//+=
for (var i = 0; i < 10; i++) {

  stroke(1);
  fill(random(255),random(0),random(150))

  ellipse(random(500), random(550), random(50), random (50));
  rect(random(500), random(550), random(50), random (50));

  fill (random(255), random(255), random (255));
  ellipse(random(500), random(500), random(50), random (50));
  }

}
