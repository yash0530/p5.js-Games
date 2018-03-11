var s;
var scl = 20;
var food;
var isleftAllowed;
var isRightAllowed;
var isUpAllowed;
var isDownAllowed;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    allowance(true, true, true, true);
    frameRate(10);
    pickLocation();
}

function draw() {
    background(53);

    if(s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);

    // score
	fill(255);
	textSize(32);
	text((s.len * 10 - 10), 530, 580, 50);
}

function keyPressed() {
    if(keyCode === UP_ARROW && isUpAllowed) {
        s.direction(0, -1);
        allowance(true, true, false, true);
    }
    else if(keyCode === DOWN_ARROW && isDownAllowed) {
        s.direction(0, 1);
        allowance(false, true, true, true);
    }
    else if(keyCode === LEFT_ARROW && isleftAllowed) {
        s.direction(-1, 0);
        allowance(true, false, true, true);
    }
    else if(keyCode === RIGHT_ARROW && isRightAllowed) {
        s.direction(1, 0);
        allowance(true, true, true, false);
    }
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function allowance(up, right, down, left) {
    isleftAllowed = left;
    isRightAllowed = right;
    isUpAllowed = up;
    isDownAllowed = down;
}
