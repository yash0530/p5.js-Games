function createBoard() {
    size = windowHeight > windowWidth ? windowWidth : windowHeight;
    createCanvas(size, size);
    background(244, 237, 204);
}

function drawBoard() {
    // borders
    stroke(182, 116, 80);
    strokeWeight(size / 200);
    line(0 + size / 400, 0, 0 + size / 400, size);
    line((size / 4), 0, (size / 4), size);
    line((size / 2), 0, (size / 2), size);
    line((3 * size / 4) , 0, (3 * size / 4), size)
    line(size - size / 400, 0, size - size / 400, size);
    line(0 + size / 400, 0 + size / 400, size, 0 + size / 400);
    line(0, (size / 4), size, (size / 4));
    line(0, (size / 2), size, (size / 2));
    line(0, (3 * size / 4), size, (3 * size / 4));
    line(0, size - size / 400, size, size - size/ 400);

    // numbers
    for (let i = 1; i < 17; i++) {
        if (board[i] !== 0) {

            noStroke();
            fill(182, 116, 80);

            if (board[i] <= 8)
                textSize(size / 5);
            else if (board[i] <= 64)
                textSize(size / 6);
            else if (board[i] <= 512)
                textSize(size / 9);
            else if (board[i] <= 2048)
                textSize(size / 12);

            textAlign(CENTER, BASELINE);

            if (i % 4 === 1)
                text(board[i], (size / 8), size / 8 + ((i / 4) * (size / 4)));
            else if (i % 4 === 2)
                text(board[i], (size / 8 + size / 4), size / 8 + (((i - 1) / 4) * (size / 4)));
            else if (i % 4 === 3)
                text(board[i], (size / 8 + size / 2), size / 8 + (((i - 2) / 4) * (size / 4)));
            else if (i % 4 === 0)
            text(board[i], (size - size / 8), size / 8 + (((i - 3) / 4) * (size / 4)));
        }
    }
}

function updateUA() {
    // TODO
}

function updateDA() {
    // TODO
}

function updateLA() {
    // TODO
}

function updateRA() {
    // TODO
}