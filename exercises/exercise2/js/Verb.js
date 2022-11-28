class Verb {
    constructor(key, bg, phrase) {
        this.border = 100;

        // movement
        this.x = random(this.border, width - this.border);
        this.y = random(this.border, height - this.border);

        this.speed = 0.5;
        this.vx = this.speed;
        this.vy = this.speed;

        // word that is shown
        this.key = key;
        // phrase attached to it
        this.phrase = phrase;

        // size
        this.size;

        // ellipse
        this.ellipse = {
            width: 120,
            height: 80,
            fill: {
                r: bg.r,
                g: bg.g,
                b: bg.b
            },
        }

    }

    update() {
        this.displayEllipse();
        this.displayString();
        this.constrainMovement();
        this.move();

        this.hover();
    }

    // Draw ellipse
    displayEllipse() {
        push();
        fill(this.ellipse.fill.r, this.ellipse.fill.g, this.ellipse.fill.b);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.ellipse.width, this.ellipse.height);
        pop();
    }

    // Draw string
    displayString() {
        push();
        textSize(this.size);
        fill(255);
        textAlign(CENTER, CENTER);
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
            this.size = 30;
        } else {
            this.size = 20;
        }
    }

    clicked() {
        if (this.overlap()) {
            // this.size = 300;
            console.log(this.phrase);

            let completePhraseString = ``;

            for (let i = 0; i < this.phrase.length; i++) {
                let currentPhraseString = this.phrase[i];
                completePhraseString += ` ${currentPhraseString}`;
                console.log(completePhraseString);
            }
        }
    }
}