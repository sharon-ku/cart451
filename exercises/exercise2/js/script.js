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



let randomPhrase = undefined;

let verbStrings = [];

/**
Preload all assets
*/
function preload() {

}


/**
Create canvas, create floating verbs
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();



    for (let i = 0; i < verbs.length; i++) {
        let verbString = new Verb(verbs[i]);
        verbStrings.push(verbString);
    }

    let randomVerb = random(verbs);
    console.log(`randomVerb:` + randomVerb);

    if (randomVerb === `want`) {
        randomPhrase = random(phrases.want);
    } else if (randomVerb === `discovered`) {
        randomPhrase = random(phrases.discovered);
    } else if (randomVerb === `receive`) {
        randomPhrase = random(phrases.receive);
    } else if (randomVerb === `need`) {
        randomPhrase = random(phrases.need);
    } else if (randomVerb === `has`) {
        randomPhrase = random(phrases.has);
    } else if (randomVerb === `received`) {
        randomPhrase = random(phrases.received);
    } else if (randomVerb === `moving`) {
        randomPhrase = random(phrases.moving);
    } else if (randomVerb === `look`) {
        randomPhrase = random(phrases.look);
    } else if (randomVerb === `approved`) {
        randomPhrase = random(phrases.approved);
    } else if (randomVerb === `start`) {
        randomPhrase = random(phrases.start);
    } else if (randomVerb === `murdered`) {
        randomPhrase = random(phrases.murdered);
    } else if (randomVerb === `contacting`) {
        randomPhrase = random(phrases.contacting);
    } else if (randomVerb === `died`) {
        randomPhrase = random(phrases.died);
    } else if (randomVerb === `made`) {
        randomPhrase = random(phrases.made);
    } else if (randomVerb === `assist`) {
        randomPhrase = random(phrases.assist);
    }

    console.log(randomPhrase);

    // randomPhrase = random(phrases);
    // console.log(randomPhrase);
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