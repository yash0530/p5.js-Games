class Fruit {
    constructor(grid) {
        this.x = floor(random(0, 25)) * grid;
        this.y = floor(random(0, 25)) * grid;
        console.log(this.x, this.y);
    }

    display(grid) {
        fill(0, 255, 0);
        rect(this.x, this.y, grid, grid);
    }
}
