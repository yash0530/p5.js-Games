function Bird() {
    this.x = width / 8;
    this.y = height / 2;
    this.gravity = 0.5;
    this.velocity = 0;

    this.display = function() {
        fill(255, 0, 100);
        ellipse(this.x, this.y, width / 15, width / 15);
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity = constrain(this.velocity, -1 * height / 80, height / 80);
        this.y = constrain(this.y, 0, height);
        console.log(this.velocity);
    }

    this.tapped = function() {
        this.velocity -= height / 40;
    }
}