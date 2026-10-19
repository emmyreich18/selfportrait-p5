// 3-1 Self-Portrait — simple smiley
// Click to change the eyes (a random style each time)

let eyeStyle = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(240, 230, 215);

  // hair behind the face
  drawHair();

  // face
  noStroke();
  fill(238, 198, 172);
  ellipse(500, 500, 560, 560);

  // hairline across the forehead
  fill(112, 76, 50);
  arc(500, 330, 460, 230, PI, TWO_PI);

  // smile
  noFill();
  stroke(60);
  strokeWeight(6);
  arc(500, 530, 440, 290, 0, PI);

  // eyes
  drawEye(450, 420);
  drawEye(550, 420);
}

function drawHair() {
  noStroke();
  fill(112, 76, 50); // brown

  // back of the hair
  ellipse(500, 475, 640, 620);

  // wavy sides: circles that wiggle in and out
  for (let y = 460; y <= 960; y += 60) {
    let wave = sin(y * 0.025) * 25;
    ellipse(230 + wave, y, 130, 110);
    ellipse(770 - wave, y, 130, 110);
  }
}

function drawEye(x, y) {
  if (eyeStyle == 0) {
    // open brown eyes
    noStroke();
    fill(85, 58, 38);
    ellipse(x, y, 28, 36);
  } else if (eyeStyle == 1) {
    // happy closed eyes
    noFill();
    stroke(60);
    strokeWeight(6);
    arc(x, y + 8, 40, 30, PI, TWO_PI);
  } else if (eyeStyle == 2) {
    // heart eyes
    noStroke();
    fill(220, 60, 80);
    ellipse(x - 8, y - 5, 20, 20);
    ellipse(x + 8, y - 5, 20, 20);
    triangle(x - 18, y, x + 18, y, x, y + 20);
  } else {
    // star eyes
    stroke(230, 180, 40);
    strokeWeight(5);
    line(x - 15, y, x + 15, y);
    line(x, y - 15, x, y + 15);
    line(x - 10, y - 10, x + 10, y + 10);
    line(x - 10, y + 10, x + 10, y - 10);
  }
}

function mousePressed() {
  eyeStyle = floor(random(4));
}