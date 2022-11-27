class Verb {
    constructor(key) {
        this.border = 100;

        // movement
        this.x = random(this.border, width - this.border);
        this.y = random(this.border, height - this.border);

        this.speed = 0.5;
        this.vx = this.speed;
        this.vy = this.speed;

        // word that is shown
        this.key = key;

        // size
        this.size = 50;
    }

    update() {
        this.display();
        this.constrainMovement();
        this.move();

        this.hover();
    }

    // Draw string
    display() {
        push();
        textSize(this.size);
        fill(255);
        textAlign(CENTER);
        text(this.key, this.x, this.y);
        pop();
    }

    // don't let it escapes
    constrainMovement() {
        this.x = constrain(this.x, this.border, width - this.border);
        this.y = constrain(this.y, this.border, height - this.border);
    }

    // Move randomly
    move() {

        if (random() < 0.01) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        this.x += this.vx;
        this.y += this.vy;


    }

    overlap() {
        if (mouseX > this.x - this.size / 2 && mouseX < this.x + this.size / 2 && mouseY > this.y - this.size / 2 && mouseY < this.y + this.size / 2) {
            return true;
        } else {
            return false;
        }
    }

    hover() {
        if (this.overlap()) {
            this.size = 100;
        } else {
            this.size = 50;
        }
    }

    clicked() {
        if (this.overlap()) {
            this.size = 300;
        }
    }
}