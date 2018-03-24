function createBoard() {
    size = windowHeight > windowWidth ? windowWidth : windowHeight;
    createCanvas(size, size);
    background(244, 237, 204);
}

function drawBoard() {
    createBoard();

    // printing borders
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
    line(0, size - size / 400, size, size - size / 400);

    // printing numbers
    for (let i = 1; i <= 16; i++) {
        if (board[i] !== 0) {

            noStroke();
            fill(182, 116, 80);

            if (board[i] <= 8)
                textSize(size / 5);
            else if (board[i] <= 64)
                textSize(size / 6);
            else if (board[i] <= 512)
                textSize(size / 7);
            else if (board[i] <= 2048)
                textSize(size / 10);

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

function addNew() {
    let num = ceil(random(0, 16));
    let count = 0;
    while(board[num] !== 0 || count++ < 1000) {
        num = ceil(random(0, 16));
    }
    board[num] = 2;
    drawBoard();
}

function updateUA() {

    const swipeUp = function() {
        for (let i = 1; i <= 4; i++) {
            for (let c = 0; c < 3; c++) {
                for (let j = i; j < i + 12; j += 4) {
                    if (board[j] === 0) {
                        for (let k = j; k < i + 12; k += 4) {
                            board[k] = board[k + 4];
                            board[k + 4] = 0;
                            drawBoard();
                        }
                    }
                }
            }
        }
    }

    const combineBlocks = function() {
        for (let i = 16; i >= 13; i--) {
            for (let j = i; j > i - 12; j -= 4) {
                if (board[j] === board[j - 4]) {
                    board[j - 4] *= 2;
                    board[j] = 0;
                    j -= 4;
                }
            }
        }
    }

    swipeUp();
    combineBlocks();
    swipeUp();
    addNew();
}

function updateDA() {

    const swipeDown = function() {
        for (let i = 16; i >= 13; i--) {
            for (let c = 0; c < 3; c++) {
                for (let j = i; j > i - 12; j -= 4) {
                    if (board[j] === 0) {
                        for (let k = j; k > i - 12; k -= 4) {
                            board[k] = board[k - 4];
                            board[k - 4] = 0;
                            drawBoard();
                        }
                    }
                }
            }
        }
    }

    const combineBlocks = function() {
        for (let i = 1; i <= 4; i++) {
            for (let j = i; j < i + 12; j += 4) {
                if (board[j] === board[j + 4]) {
                    board[j + 4] *= 2;
                    board[j] = 0;
                    j += 4;
                }
            }
        }
    }

    swipeDown();
    combineBlocks();
    swipeDown();
    addNew();
}

function updateLA() {
    const swipeUp = function() {
        for (let i = 1; i <= 13; i += 4) {
            for (let c = 0; c < 3; c++) {
                for (let j = i; j < i + 3; j++) {
                    if (board[j] === 0) {
                        for (let k = j; k < i + 3; k++) {
                            board[k] = board[k + 1];
                            board[k + 1] = 0;
                            drawBoard();
                        }
                    }
                }
            }
        }
    }

    const combineBlocks = function() {
        for (let i = 16; i >= 4; i-= 4) {
            for (let j = i; j > i - 4; j--) {
                if (board[j] === board[j - 1]) {
                    board[j] *= 2;
                    board[j - 1] = 0;
                    j--;
                }
            }
        }
    }

    swipeUp();
    combineBlocks();
    swipeUp();
    addNew();
}

function updateRA() {
    const swipeUp = function() {
        for (let i = 16; i >= 4; i -= 4) {
            for (let c = 0; c < 3; c++) {
                for (let j = i; j > i - 3; j--) {
                    if (board[j] === 0) {
                        for (let k = j; k > i - 3; k--) {
                            board[k] = board[k - 1];
                            board[k - 1] = 0;
                            drawBoard();
                        }
                    }
                }
            }
        }
    }

    const combineBlocks = function() {
        for (let i = 1; i <= 13; i += 4) {
            for (let j = i; j < i + 4; j++) {
                if (board[j] === board[j + 1]) {
                    board[j + 1] *= 2;
                    board[j] = 0;
                    j++;
                }
            }
        }
    }

    swipeUp();
    combineBlocks();
    swipeUp();
    addNew();
}

function getScore() {
    return (board.reduce((a, b) => a + b));
}
