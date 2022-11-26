const TFIDF = require('./TFIDF');
let fs = require('fs');

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    // Number of fraud documents
    let numFraudDocs = 12;
    // Array storing all the docs
    let filenames = [];

    for (let i = 0; i < numFraudDocs; i++) {
        filenames.push(`fraud${i}.txt`);
    }

    for (let i = 0; i < filenames.length; i++) {
        getTermFreq(filenames[i]);
    }

    for (let i = 0; i < filenames.length; i++) {
        getDocFreq(filenames[i]);
    }

    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}

function getDocFreq(filename) {
    let data = fs.readFileSync('files/' + filename, 'utf8');
    tfIDF.docFreq(data);
}

function getTermFreq(filename) {
    let data = fs.readFileSync('files/' + filename, 'utf8');
    tfIDF.termFreq(data);
}









