var running = true;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    flappy = new Bird();
    b = []; for (var i = 0; i < 4; i++) { b[i] = new Block(i * window.innerWidth * 0.25); }
    frameRate(20);
}

function draw() {
    play(running);
}

function keyPressed() {
    if (keyCode === 32 && running) {
        console.log("Space pressed");
        flappy.update((window.innerHeight / 6.5) * -1);
    }
}

function ended() {
    running = false;
    createCanvas(window.innerWidth, window.innerHeight);
    background(51);
    console.log("You Lose");
}

function play(running) {
    if (running) {
        background(51);
        flappy.update(window.innerHeight / 100);

        for (var i = 0; i < 4; i++) {
            if (b[i].isDead()) {
                b[i].redefine();
            }
            
            b[i].update((window.innerWidth / 100));

            if (b[i].x <= 100) {
                if (flappy.y < b[i].h1 || flappy.y > b[i].y2) {
                    ended();
                }
            }
        }
    }
}