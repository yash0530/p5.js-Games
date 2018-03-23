let size;
let board = Array(17).fill(0);

function setup() {
    board[ceil(random(0, 8))] = 2;
    board[ceil(random(8, 16))] = 2;
    createBoard();
    drawBoard();
}

function windowResized() {
    createBoard();
    drawBoard();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        updateUA();
    }
    else if (keyCode === DOWN_ARROW) {
        updateDA();
    }
    else if (keyCode === LEFT_ARROW) {
        updateLA();
    }
    else if (keyCode === RIGHT_ARROW) {
        updateRA();
    }
}