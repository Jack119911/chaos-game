var corners = CORNER_LIB.corners4;

const currentPoint = {
  x: 200,
  y: 200,
}

let recording = false;

function setCorners(newCorners) {
  corners = newCorners;
  recording = false;
  setup();
}

function startRecording() {
  recording = true;
  corners = new Array();
  setup();
}

function stopRecording() {
  recording = false;
  corners = corners.slice(1);
  setup();
}

function mouseClicked() {
  if (recording) {
    corners.push({x: mouseX, y: mouseY});
  }
}

function setup() {
  createCanvas(700, 500);
  clearCanvas();
  console.log(corners);
  drawCorners();
}

function clearCanvas() {
  clear();
  background(245);
}

function drawCorners() {
  for (let corner of corners) {
    circle(corner.x, corner.y, 2);
  }
}

function draw() {
  recording ? recordCorners() : drawPoints();
}

function recordCorners() {
  clearCanvas();
  drawCorners();
  circle(mouseX, mouseY, 2);
}

function drawPoints() {
  for (let i = 100; i >= 0; i--) {
    point(currentPoint.x, currentPoint.y);
    updatePoint();
  }
}

function updatePoint() {
  var rand = floor(random(corners.length));
  moveToCorner(corners[rand]);
}

function moveToCorner(destination) {
  var xdif = (destination.x - currentPoint.x) / 2;
  var ydif = (destination.y - currentPoint.y) / 2;
  currentPoint.x += xdif;
  currentPoint.y += ydif;
}
