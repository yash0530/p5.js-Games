function Block(offset) {
    this.offset = offset;
    this.x = window.innerWidth + offset;
    this.y1 = 0;
    this.h1 = Math.random() * window.innerHeight * 0.6;
    this.y2 = this.h1 + 0.25 * window.innerHeight;
    this.h2 = window.innerHeight - this.y2;
    this.width = 100;

    this.update = function(speed) {
        this.x -= speed;
        rect(this.x, this.y1, this.width, this.h1);
        rect(this.x, this.y2, this.width, this.h2);
    }

    this.isDead = function() {
        if (this.x < 0) {
            return true;
        } 
        return false;
    }

    this.redefine = function() {
        this.x = window.innerWidth;
        this.y1 = 0;
        this.h1 = Math.random() * window.innerHeight * 0.7;
        this.y2 = this.h1 + 0.25 * window.innerHeight;
        this.h2 = window.innerHeight - this.y2;
        this.width = 100;
    }
}