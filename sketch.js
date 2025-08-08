var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
background(255,0,0);
  //para porfa frameRate(0);
}

function draw() {
  d = random(10, 50);
  noStroke();
  fill(255, d);
 ellipse(mouseX, mouseY, d, d);
}
