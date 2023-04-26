var x = 10;
var y = 0;
var xvol = 0;
var yvol = 0;
var movingx = false;
var movingy = false;
var touchinghb = false;
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
  square(x, y, 50);
  keyPressed();

  x = x + xvol;
  y = y - yvol;
  // xvol(x velocity) max is 10
  if (xvol >= 11) {
    xvol = 11;
  }
  if (xvol <= -11) {
    xvol = -11;
  }
  //not movingx and slide
  if (xvol < 0 && movingx == false) {
    xvol += 1;
  }
  if (xvol > 0 && movingx == false) {
    xvol -= 1;
  }
  if ((y <= 250 && movingy == false) || touchinghb == false) {
    yvol -= 1;
  }
  hitbox();
  if (y >= 250 && movingy == false) {
    yvol = 0;
    y = 250;
  }

  rect(125, 125, 500, 50);
  text(x, 5, 50);
  text(yvol, 5, 75);
  text(touchinghb, 5, 25);

  if (x <= 0) {
    yvol = +10;
    xvol += 5;
  }
}
//keypress
function keyPressed() {
  if (keyIsDown(68)) {
    //d
    xvol += 2;
    movingx = true;
  } else if (keyIsDown(65)) {
    //a
    xvol -= 2;
    movingx = true;
  }
  if (keyIsDown(87) && y == 250) {
    //w
    yvol = +15;
    movingy = true;
  }
  if (keyIsDown(87) && y == 75&&x >= 85) {
    yvol = +15;
    movingy = true;
  }
  //reset moving
  movingx = false;
  movingy = false;
}
function hitbox() {
  /*
  var xbox = 125;
  var ybox = 125;
  var wbox = 600;
  var hbox = 205;
  */
  //they stand for hit box, so y,x,width, and hight
  if (y >= 75 && x >= 85 && x <= 610 && y <= 145) {
    y = 75;
    touchinghb = true;
    yvol = 0;
  }
  touchinghb = false;
  if (yvol <= -1 && touchinghb == true) {
    yvol = 0;
  }
  if (y >= 75 && x >= 85 && x <= 610 && y == 165) {
    yvol = -1;
  }
}
