function Bird() {
    this.x = 100;
    this.y = window.innerHeight / 2;

    this.update = function(speed) {
        this.y += speed;
        this.y = constrain(this.y, 0, window.innerHeight);
        ellipse(this.x, this.y, 15, 15);
    }
}