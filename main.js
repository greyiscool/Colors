function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(frameCount % 256, (frameCount % (256 * 256)) / 256, frameCount % (256 * 256 * 256));
}
