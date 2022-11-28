// Template to create a verb (bubble with verb on it)

class Verb {
    constructor(key, bg, phrase) {
        if (width > 1000) {
            this.border = 400;
        } else {
            this.border = 100;
        }

        this.borderTop = 220;
        this.borderBottom = 300;

        // movement
        this.x = random(this.border, width - this.border);
        this.y = random(this.borderTop, height - this.borderBottom);

        this.speed = 0.3;
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
            width: 95,
            height: 60,
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
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.key, this.x, this.y);
        pop();
    }

    // don't let it escapes
    constrainMovement() {
        this.x = constrain(this.x, this.border, width - this.border);
        this.y = constrain(this.y, this.borderTop, height - this.borderBottom);
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
        if (mouseX > this.x - this.ellipse.width / 2 && mouseX < this.x + this.ellipse.width / 2 && mouseY > this.y - this.ellipse.height / 2 && mouseY < this.y + this.ellipse.height / 2) {
            return true;
        } else {
            return false;
        }
    }

    hover() {
        if (this.overlap()) {
            this.size = 20;
        } else {
            this.size = 15;
        }
    }

    // When clicked on bubble:
    clicked() {
        if (this.overlap()) {
            console.log(this.phrase);

            let completePhraseString = ``;

            // Transform array of strings into single string
            for (let i = 0; i < this.phrase.length; i++) {
                let currentPhraseString = this.phrase[i];
                completePhraseString += ` ${currentPhraseString}`;
                console.log(completePhraseString);
            }

            // Update scam message displayed in box
            $(`#scam-phrase`).text(completePhraseString);

            $(`#scam-phrase`).effect("highlight", "slow");

        }
    }
}