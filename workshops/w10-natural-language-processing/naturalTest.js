let natural = require('natural');
// console.log(natural);
let tokenizer = new natural.WordTokenizer();
// let stemmer = natural.PorterStemmer();
let tokens = tokenizer.tokenize("the lazy dog jumped over the high mountains.");
console.log(tokens);
console.log(natural.PorterStemmer.stem(tokens[7]));