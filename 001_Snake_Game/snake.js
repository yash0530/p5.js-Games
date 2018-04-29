class Snake {
    constructor() {
        this.length = 1;
        this.body = [];
        this.body.push(Array(0, 0));
    }

    display(grid) {
        for (let i = 0; i < this.body.length; i++) {
            if (i % 2 === 0) {
                fill(255, 255, 0);
            } else {
                fill(255, 0, 0);
            }
            rect(this.body[i][0], this.body[i][1], grid, grid);
        }
    }

    update(grid, dir) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i][0] = this.body[i - 1][0];
            this.body[i][1] = this.body[i - 1][1];
        }

        //-_-\\ 1 => Right || 2 => Left || Up => 3 || Down => 4 //-_-\\ 
        if (dir === 1) {
            this.body[0][0] += grid;
        } else if (dir === 2) {
            this.body[0][0] -= grid;
        } else if (dir === 3) {
            this.body[0][1] -= grid;
        } else if (dir === 4) {
            this.body[0][1] += grid;
        }
    }

    addNew() {
        this.body.push(Array(0, 0));
    }

    collided(fruit) {
        return fruit.x === this.body[0][0] && fruit.y === this.body[0][1]
    }

    isDead() {
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i][0] === this.body[0][0] && this.body[i][1] === this.body[0][1]) {
                return true;
            }
        }
        if (this.body[0][0] > size || this.body[0][1] > size || this.body[0][0] < 0 || this.body[0][1] < 0) {
            return true;
        }
    }
}
