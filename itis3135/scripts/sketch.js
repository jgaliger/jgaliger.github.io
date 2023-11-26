function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(2000);
    }
    ellipse(mouseX, mouseY, 10, 10);
  }