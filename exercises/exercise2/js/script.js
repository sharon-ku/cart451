/**
EXERCISE 2: NLP
Sharon Ku

Output results from NLP in visualization
*/



// want
// discovered
// receive
// need
// has
// received
// moving
// look
// approved
// start
// murdered
// contacting
// died
// made
// assist


"use strict";

let verbs = [`want`, `discovered`, `receive`, `need`, `has`, `received`, `moving`, `look`, `approved`, `start`, `murdered`, `contacting`, `died`, `made`, `assist`];



let verbStrings = [];

let ellipseBg = undefined;

/**
Preload all assets
*/
function preload() {

}

function createVerbFor(string, i, ellipseBgR, ellipseBgG, ellipseBgB, numPhrases) {
    let ellipseBg = {
        r: ellipseBgR,
        g: ellipseBgG,
        b: ellipseBgB
    };

    if (verbs[i] === string) {
        for (let j = 0; j < numPhrases; j++) {
            let verbString = new Verb(verbs[i], ellipseBg, phrases.want[j]);
            verbStrings.push(verbString);
        }
    }
}


/**
Create canvas, create floating verbs
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();


    for (let i = 0; i < verbs.length; i++) {
        // bittersweet (red-coral)
        createVerbFor(`want`, i, 255, 107, 108, phrases.want.length);
        // maximum yellow red (mustard yellow)
        createVerbFor(`discovered`, i, 255, 193, 69, phrases.discovered.length);
        // sap green
        createVerbFor(`receive`, i, 63, 125, 32, phrases.receive.length);
        // french pink
        createVerbFor(`need`, i, 225, 114, 159, phrases.need.length);
        // dutch white
        createVerbFor(`has`, i, 219, 211, 173, phrases.has.length);
        // green ryb
        createVerbFor(`received`, i, 114, 176, 29, phrases.received.length);
        // dark blue gray
        createVerbFor(`moving`, i, 91, 95, 151, phrases.moving.length);
        // lavender gray
        createVerbFor(`look`, i, 184, 184, 209, phrases.look.length);
        // steel teal
        createVerbFor(`approved`, i, 98, 146, 158, phrases.approved.length);
        // dark electric blue
        createVerbFor(`start`, i, 84, 106, 123, phrases.start.length);
        // bistre (mud brown)
        createVerbFor(`murdered`, i, 73, 44, 29, phrases.murdered.length);
        // carolina blue
        createVerbFor(`contacting`, i, 27, 152, 224, phrases.contacting.length);
        // black shadows (light pinkish beige)
        createVerbFor(`died`, i, 191, 172, 181, phrases.died.length);
        // turquoise blue
        createVerbFor(`made`, i, 129, 244, 225, phrases.made.length);
        // atomic tangerine
        createVerbFor(`assist`, i, 247, 153, 110, phrases.assist.length);

    }

}



/**
Updates every frame
*/
function draw() {
    background(0);

    for (let i = 0; i < verbStrings.length; i++) {
        let verbString = verbStrings[i];
        verbString.update();
    }

    // push();
    // fill(255);
    // textSize(30);
    // text(`want`, 100, 100);
    // pop();
}


function mouseClicked() {
    for (let i = 0; i < verbStrings.length; i++) {
        let verbString = verbStrings[i];
        verbString.clicked();
    }
}