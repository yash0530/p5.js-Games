var count = 0;
var num = 0;

function setup() {
    createCanvas(window.innerHeight * 0.5625, window.innerHeight); // 16 : 9 vertical
    background(51);
    frameRate(60);
    flappy = new Bird();
    b = [];
}

function draw() {
    background(51);
    flappy.display();
    flappy.update();

    if (count++ % 300 === 0) {
        console.log("New block");
        b[num++] = new Block();
    }
    for (var i = 0; i < b.length; i++) {
        if (b[i] != null) {
            b[i].display();
            b[i].update();
            if (b[i].isDead()) {
                b[i] = null;
            }
        }
    }
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
