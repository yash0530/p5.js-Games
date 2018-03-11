function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed= 0;
    this.len = 1;
    this.blocks = [];

    this.update = function() {
        
        for(var i = this.len; i > 0; i--) {
            this.blocks[i] = this.blocks[i - 1];    
        }

        // current block
        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);

        this.blocks[0] = createVector(this.x, this.y);
    }

    this.show = function() {
        fill(255);
        for(var i = 0; i < this.len; i++) {
            rect(this.blocks[i].x, this.blocks[i].y, scl, scl);
        }
    }

    this.direction = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(food) {
        var d = dist(this.x, this.y, food.x, food.y);
        if(d < 5) {
            this.len++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for(var i = 1; i < this.len; i++) {
            var pos = this.blocks[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1) {
                this.len = 1;
                this.blocks = [];
                this.x = 0;
                this.y = 0;
            }
        }
    }
}