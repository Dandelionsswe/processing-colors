let rad, r, dr, d;
let c;

function setup() {
  createCanvas(800, 800);
  background(0);

  rad = 0.0;
  r = 0.0;
  dr = 5.0;
  d = 200;

  c = color(random(255), random(255), random(255));
}

function draw() {
  noStroke();
  fill(c);

  ellipse(
    r * cos(rad) + width / 2,
    r * sin(rad) + height / 2,
    10,
    10
  );

  r += dr;
  rad += PI / 300;

  if (r < 0 || r > d) {
    dr = -dr;
  }

  if (frameCount % 1000 === 0) {
    c = color(random(255), random(255), random(255));
  }
}