enterActive = false;
var score = 0;
var count = 0;
var num = 0;

function setup() {
    createCanvas(windowHeight * 0.5625, windowHeight);
    background(50, 50, 255);
    frameRate(60);
    flappy = new Bird();
    b = [];
}

function draw() {
    background(125, 125, 255);

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

    // score
    fill(0);
	textSize(width / 10);
    textAlign(CENTER);
	text(score * 10, 7 * width / 8, 7.5 * height / 8);
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
    fill(0);
    textSize(height / 18);
    textAlign(CENTER);
    text("SCORE " + score * 10, width / 2, height / 2);
    text("\n\nPRESS ENTER", width / 2, height / 2);
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