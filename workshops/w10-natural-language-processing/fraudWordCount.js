// Pulling our concordance object from a separate "module" - concordance.js
let WordCount = require('./wordCount');

// app.use(express.static('public'));
let fs = require('fs');

// And we'll look at all files in the jane austen directory
let file = fs.readFileSync('files/fraud0.txt', 'utf8');
// console.log(file);


// An object that acts as dictionary of words and counts
let wordCount = new WordCount();
wordCount.process(file);
wordCount.sortByCount();
wordCount.logTheDict();