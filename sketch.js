let currentMode = 'cube'; 
let logoImg;

function preload() {
  logoImg = loadImage('resources/CursorLogoRevised.png');
  // We removed loadFont() here. CSS handles it now!
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); 
  
  pixelDensity(1);
  
  setupCube();
  setupMesh();
}

function draw() {
  if (currentMode === 'cube') {
    drawCube();
  } else {
    drawMesh();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowResizedCube();
  windowResizedMesh();
}

function setMode(newMode) {
  currentMode = newMode;
  
  document.getElementById('btn-cube').classList.remove('active');
  document.getElementById('btn-mesh').classList.remove('active');
  document.getElementById('btn-' + newMode).classList.add('active');
}