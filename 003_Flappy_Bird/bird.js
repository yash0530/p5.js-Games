function setup() {
    createCanvas(window.innerHeight * 0.5625, window.innerHeight); // 16 : 9 vertical
    background(51);
    frameRate(120);
    flappy = new Bird();
}

function draw() {
    background(51);
    flappy.display();
    flappy.update();
}

function keyPressed() {
    if (key === ' ') {
        flappy.tapped();
        console.log("Space Pressed");
    }
}

function mousePressed() {
    flappy.tapped();
    console.log("Mouse Pressed");
}
