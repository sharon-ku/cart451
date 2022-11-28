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

// all possible verbs
let verbs = [`want`, `discovered`, `receive`, `need`, `has`, `received`, `moving`, `look`, `approved`, `start`, `murdered`, `contacting`, `died`, `made`, `assist`];

// store all verb objects (moving circles with verb inside)
let verbStrings = [];

/**
Preload all assets
*/
function preload() {

}

// Create a verb object and store in verbStrings
function createVerbFor(string, i, ellipseBgR, ellipseBgG, ellipseBgB, phraseUsed) {
    let ellipseBg = {
        r: ellipseBgR,
        g: ellipseBgG,
        b: ellipseBgB
    };

    if (verbs[i] === string) {
        for (let j = 0; j < phraseUsed.length; j++) {
            let verbString = new Verb(verbs[i], ellipseBg, phraseUsed[j]);
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

    // Create all the verb objects
    for (let i = 0; i < verbs.length; i++) {
        // bittersweet (red-coral)
        createVerbFor(`want`, i, 255, 107, 108, phrases.want);
        // maximum yellow red (mustard yellow)
        createVerbFor(`discovered`, i, 255, 193, 69, phrases.discovered);
        // sap green
        createVerbFor(`receive`, i, 63, 125, 32, phrases.receive);
        // french pink
        createVerbFor(`need`, i, 225, 114, 159, phrases.need);
        // dutch white
        createVerbFor(`has`, i, 219, 211, 173, phrases.has);
        // green ryb
        createVerbFor(`received`, i, 114, 176, 29, phrases.received);
        // dark blue gray
        createVerbFor(`moving`, i, 91, 95, 151, phrases.moving);
        // lavender gray
        createVerbFor(`look`, i, 184, 184, 209, phrases.look);
        // steel teal
        createVerbFor(`approved`, i, 98, 146, 158, phrases.approved);
        // dark electric blue
        createVerbFor(`start`, i, 84, 106, 123, phrases.start);
        // bistre (mud brown)
        createVerbFor(`murdered`, i, 73, 44, 29, phrases.murdered);
        // carolina blue
        createVerbFor(`contacting`, i, 27, 152, 224, phrases.contacting);
        // black shadows (light pinkish beige)
        createVerbFor(`died`, i, 191, 172, 181, phrases.died);
        // turquoise blue
        createVerbFor(`made`, i, 129, 244, 225, phrases.made);
        // atomic tangerine
        createVerbFor(`assist`, i, 247, 153, 110, phrases.assist);

    }

}



/**
Updates every frame
*/
function draw() {
    background(0);

    // Update all verb objects
    for (let i = 0; i < verbStrings.length; i++) {
        let verbString = verbStrings[i];
        verbString.update();
    }

}

// Click on verb objects
function mouseClicked() {
    for (let i = 0; i < verbStrings.length; i++) {
        let verbString = verbStrings[i];
        verbString.clicked();
    }
}