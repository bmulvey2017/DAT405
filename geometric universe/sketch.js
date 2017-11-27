
function setup() {

  createCanvas(500,500);
//makes shapes re randomise every 1 second
  frameRate(5000);
}
function draw() {
//depending on what position you put the letter that you have chosen to be random, will randomise between the number you have given e.g 500
//so putting r in position (_, r, _, _) then the y axis will be variable and rndom between 500
for (var i = 0; i < 900; i++) {
  var r = random(500);
  var s = random(550);
  var t = random(50);
  var j = random (50);
  stroke(1);
  fill(r,s,t)
  ellipse(r, s, t, j);
    var rr = random(500);
    var rs = random(550);
    var rt = random(50);
    fill(rr,rs,rt)
  rect(rr, rs, rt, 50);

for (let x = 0; x< 100; x++) {
let size = random (5, 100);
fill (random(255), random(255), random (255));
  ellipse(random(width), random(height), size, size)
}
}
}
