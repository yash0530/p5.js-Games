function setup() {
    // ensuring that the maximum possible square is our game board
    size = windowHeight > windowWidth ? windowWidth : windowHeight;
    createCanvas(size, size);
    background(244, 237, 204);
    drawBoard();
}

function windowResized() {
    size = windowHeight > windowWidth ? windowWidth : windowHeight;
    createCanvas(size, size);
    background(244, 237, 204);
    drawBoard();
}

function drawBoard() {
    // printing the borders
    stroke(96, 60, 40);
    strokeWeight(size / 50);
    line(0 + size / 100, 0, 0 + size / 100, size);
    line((size / 4), 0, (size / 4), size);
    line((size / 2), 0, (size / 2), size);
    line((3 * size / 4) , 0, (3 * size / 4), size)
    line(size - size / 100, 0, size - size / 100, size);
    line(0 + size / 100, 0 + size / 100, size, 0 + size / 100);
    line(0, (size / 4), size, (size / 4));
    line(0, (size / 2), size, (size / 2));
    line(0, (3 * size / 4), size, (3 * size / 4));
    line(0, size - size / 100, size, size - size/ 100);
}
