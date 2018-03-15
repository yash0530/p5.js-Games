function Block() {
    this.x = width;
    this.y1 = 0;
    this.h1 = Math.random() * height * 0.6;
    this.y2 = this.h1 + height * 0.25;
    this.h2 = height - this.y2;
    this.width = width / 4;

    this.display = function() {
        fill(0, 255, 0);
        rect(this.x, this.y1, this.width, this.h1);
        rect(this.x, this.y2, this.width, this.h2);
    }

    this.update = function() {
        this.x -= 2;
    }

    this.isDead = function() {
        if (this.x < -this.width) {
            return true;
        } return false;
    }
    
    this.displayRed = function() {
        fill(255, 0, 0);
        rect(this.x, this.y1, this.width, this.h1);
        rect(this.x, this.y2, this.width, this.h2);
    }
}