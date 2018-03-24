enterActive = false;
var score = 0;
var count = 0;
var num = 0;

function setup() {
    createCanvas(windowHeight * 0.5625, windowHeight);
    background(51);
    frameRate(60);
    flappy = new Bird();
    b = [];
}

function draw() {
    background(51);

    // displaying the bird
    flappy.display();
    flappy.update();

    if (count++ % (int) (2.5 * height / 10) === 0) {
        console.log("Block created");
        b[num++] = new Block();
    }

    // displaying all active blocks
    for (var i = 0; i < b.length; i++) {
        if (b[i] != null) {
            b[i].display();
            b[i].update();

            // checking for collisions
            if (b[i].x < flappy.x && (b[i].x + flappy.x) > 0) {
                if (flappy.y < b[i].h1 || flappy.y > b[i].y2) {
                    console.log("DEATH");
                    b[i].displayRed();
                    stop();
                }
            }

            // checking if the block is active
            if (b[i].isDead()) { 
                b[i] = null;
                console.log("Block destroyed");
                score++;
            }
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        flappy.tapped();
        console.log("Space Pressed");
    }

    if (keyCode === ENTER && enterActive) {
        restart();
    } 
}

function mousePressed() {
    flappy.tapped();
    console.log("Mouse Pressed");
}

function stop() {
    console.log("Your Score : " + score);
    fill(255);
    textSize(height / 18);
    text("Score : " + score, width / 4, height / 2);
    text("\nPress Enter", width / 4, height / 2);
    enterActive = true;
    noLoop();
}

function restart() {
    b = [];
    flappy.y = height / 2;
    score = 0;
    count = 0;
    num = 0;
    enterActive = false;
    loop();
}