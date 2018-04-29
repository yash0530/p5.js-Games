let isRightAllowed = true, isLeftAllowed = false, isUpAllowed = false, isDownAllowed = true;
let snake, fruit, size, grid;
let direction = 0;
let score = 0;

function setup() {
    generateBoard();
    snake = new Snake();
    fruit = new Fruit(grid);
    frameRate(10);
}

function windowResized() {
    generateBoard();
    snake.display(grid);
    fruit.display(grid);
}

function draw() {
    generateBoard();
    snake.update(grid, direction);
    snake.display(grid);

    if (snake.collided(fruit)) {
        fruit = new Fruit(grid);
        snake.addNew();
        score++;
    }
    fruit.display(grid);

    if (snake.isDead()) {
        noLoop();
    }

    // score
	fill(255, 0, 255);
	textSize(size / 20);
	text(score * 10, size - size / 12, size - size / 25, size / 10);
}

function generateBoard() {
    size = windowWidth > windowHeight ? windowHeight : windowWidth;
    createCanvas(size, size);
    background(51);
    grid = floor(size / 25);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW && isRightAllowed) {
        direction = 1;
        allowance(true, false, true, true);
    } else if (keyCode === LEFT_ARROW && isLeftAllowed) {
        direction = 2;
        allowance(false, true, true, true);
    } else if (keyCode === UP_ARROW && isUpAllowed) {
        direction = 3;
        allowance(true, true, true, false);
    } else if (keyCode === DOWN_ARROW && isDownAllowed) {
        direction = 4;
        allowance(true, true, false, true);
    }
}

function allowance(right, left, up, down) {
    isRightAllowed = right;
    isLeftAllowed = left;
    isUpAllowed = up;
    isDownAllowed = down;
}
