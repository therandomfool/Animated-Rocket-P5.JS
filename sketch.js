let x,
  y,
  stars,
  scroll,
  isUp,
  isDown,
  isRight,
  isLeft;

function setup() {
  createCanvas(600, 700);
  scroll = 0;

  isUp = false;
  isDown = false;
  isRight = false;
  isLeft = false;

  x = 300;
  y = 640;

  stars = [500, 300, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2400, -2800, -3000, -3200, -3600, -3800, -4000]
}

function draw() {
  background(60);

  push()
  translate(0, scroll)
  for (let i = 0; i < stars.length; i++) {
    fill(230, 255, 0)
    ellipse(50, stars[i] - 730, random(10, -10), random(10, -10))
    ellipse(150 + i, stars[i] - 850, random(10, -10), random(10, -10))
    ellipse(220, stars[i] - 350, random(10, -10), random(10, -10))
    ellipse(350 - i, stars[i] - 450, random(10, -10), random(10, -10))
    ellipse(450, stars[i] - 250, random(10, -10), random(10, -10))
    ellipse(580, stars[i] - 680, random(10, -10), random(10, -10))
  }

  //stand 
  fill(130);
  rect(260, 600, 10, 100)
  rect(260, 610, 40, 10)
  rect(260, 660, 50, 10)
  rect(300, 640, 10, 200)

  pop()


  //---Rocket---//
  //flames
  noStroke()
  fill(255, 185, 0)
  ellipse(x, y + random(35, 55), 20, 60)
  fill(255, 255, 0)
  ellipse(x, y + random(35, 50), 15, 40)

  //sidefins
  fill(30, 144, 255);
  arc(x, y + 36, 40, 40, PI, 0, CHORD)
  //body
  fill(255, 0, 0)
  ellipse(x, y, 30, 80)
  //windows
  fill(255)
  ellipse(x, y - 12, 15, 15)
  fill(255)
  ellipse(x, y + 6, 15, 15)
  //front fin
  fill(30, 144, 255);
  ellipse(x, y + 32, 5, 30)

  //---Logic---//
  if (isUp == true) {
    if (y > height * 0.2) {
      y -= 5;
    } else {
      scroll += 5
    }
  }

  if (isDown == true) {
    if (y < height * 0.8) {
      y += 5;
    } else {
      scroll += 5
    }
  }

  if (isRight == true) {
    if (x < width * 0.8) {
      x += 5;
    } else {
      scroll += 5
    }
  }
  if (isLeft == true) {
    if (x > width * 0.2) {
      x -= 5;
    } else {
      scroll += 5
    }
  }

}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    isUp = true;
  }
  if (keyCode == DOWN_ARROW) {
    isDown = true;
  }
  if (keyCode == RIGHT_ARROW) {
    isRight = true;
  }
  if (keyCode == LEFT_ARROW) {
    isLeft = true;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    isUp = false;
  }
  if (keyCode == DOWN_ARROW) {
    isDown = false;
  }
  if (keyCode == RIGHT_ARROW) {
    isRight = false;
  }
  if (keyCode == LEFT_ARROW) {
    isLeft = false;
  }
}