board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
circle = true;
enterActive = false;
mouseActive = true;

function setup() {
    createCanvas(600, 600);
    background(51);
    drawBoard();
}

function drawBoard() {
    
    // printing the borders
    stroke(255);
    line(200, 0, 200, 600);
    line(400, 0, 400, 600);
    line(0, 200, 600, 200);
    line(0, 400, 600, 400);

    for (var i = 0; i < 9; i++) {

        // getting x and y ( centers of blocks )
        if ((i + 1) % 3 === 1) {
            x = 100;
            y = 100 + (((i + 1) % 3) - 1 + (int)((i + 1) / 3)) * 200;
        }
        else if ((i + 1) % 3 === 2) {
            x = 300;
            y = 100 + (((i + 1) % 3) - 2 + (int)((i + 1) / 3)) * 200;
        }
        else {
            x = 500;
            y = 100 + (((i + 1) % 3) - 1 + (int)((i + 1) / 3)) * 200;
        }

        // printing symbols
        if (board[i] === 0) {
            ellipse( x, y, 100, 100);
        }
        else if (board[i] === 1) {
            line( x - 50, y - 50, x + 50, y + 50);
            line(x + 50, y - 50, x - 50, y + 50);
        }
        else {}
    }
}

function updateBoard(n) {
    if (board[n] === -1) {
        if(circle) {
            board[n] = 0;
            circle = false;
            drawBoard();
            if (hasWon(0)) {
                reset(0);
            }
            else if (over()) {
                reset(-1);
            }
        }
        else {
            board[n] = 1;
            circle = true;
            drawBoard();
            if (hasWon(1)) {
                reset(1);
            }
            else if (over()) {
                reset(-1);
            }
        }
    }
}

function mousePressed() {
    if (mouseActive) {
        console.log(mouseX, mouseY);

        // getting the block number when mouse is pressed
        var n;
        if (mouseX < 200) {
            if (mouseY < 200) {
                n = 0;
            }
            else if (mouseY < 400) {
                n = 3;
            }
            else if (mouseY < 600) {
                n = 6;
            }
        }
        else if (mouseX < 400) {
            if (mouseY < 200) {
                n = 1;
            }
            else if (mouseY < 400) {
                n = 4;
            }
            else if (mouseY < 600) {
                n = 7;
            }
        }
        else if (mouseX < 600) {
            if (mouseY < 200) {
                n = 2;
            }
            else if (mouseY < 400) {
                n = 5;
            }
            else if (mouseY < 600) {
                n = 8;
            }
        }

        updateBoard(n);
        console.log(n);
    }
}

function hasWon(player) {
    if (board[0] == player && board[1] == player && board[2] == player) {
        return true;
    }
    else if (board[3] == player && board[4] == player && board[5] == player) {
        return true;
    }
    else if (board[6] == player && board[7] == player && board[8] == player) {
        return true;
    }
    else if (board[0] == player && board[3] == player && board[6] == player) {
        return true;
    }
    else if (board[1] == player && board[4] == player && board[7] == player) {
        return true;
    }
    else if (board[2] == player && board[5] == player && board[8] == player) {
        return true;
    }
    else if (board[0] == player && board[4] == player && board[8] == player) {
        return true;
    }
    else if (board[2] == player && board[4] == player && board[6] == player) {
        return true;
    }
    return false;
}

function reset(player) {
    board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    createCanvas(600, 600);
    background(51);

    fill(255);
    textSize(32);
    if (player === 0) {
        text("Player O has Won. !!\n\n\n\t\t\tPress Enter", 150, 300);
        console.log("Player O Won");
    }
    else if (player === 1) {
        text("Player X has Won. !!\n\n\n\t\t\tPress Enter", 150, 300);
        console.log("Player X Won");
    }
    else if (player == -1) {
        text("____ No result ____\n\n\n\t\t\tPress Enter", 150, 300);
        console.log("Draw");
    }

    enterActive = true;
    mouseActive = false;
}

function keyPressed() {
    if (enterActive && keyCode === ENTER) {
        enterActive = false;
        mouseActive = true;
        createCanvas(600, 600);
        background(51);
        drawBoard();
    }
}

function over() {
    for (var i = 0; i < 9; i++) {
        if (board[i] == -1) {
            return false;
        }
    }
    return true;
}
