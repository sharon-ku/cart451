let fs = require('fs');

// Grab file
let file = fs.readFileSync('files/fraud-tfidf-results.txt', 'utf8');
console.log(file);


let natural = require('natural');
// console.log(natural);
let tokenizer = new natural.WordTokenizer();
// let stemmer = natural.PorterStemmer();
let tokens = tokenizer.tokenize(file);
console.log(`tokens` + tokens);

console.log(`===stemming starts here:====`)

for (let i = 0; i < tokens.length; i++) {
    console.log(natural.PorterStemmer.stem(tokens[i]));
}


// let sentenceSplitter = new natural.SentenceTokenizer();

// // Ngrams
// let NGrams = natural.NGrams;

// let bigrams = NGrams.ngrams("the lazy dog jumped over the high mountains.", 5);
// console.log(bigrams);

// Parts of speech
const language = "EN";
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
let ruleSet = new natural.RuleSet('EN');
let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

console.log(`===pos starts here:====`)

console.log(tagger.tag(tokens));

// // WordNet
// let wordnet = new natural.WordNet();

// wordnet.lookup('chair', function (results) {
//     results.forEach(function (result) {
//         console.log('------------------------------------');
//         // synsetOffset = where it is within the network
//         console.log(result.synsetOffset);
//         console.log(result.pos);
//         console.log(result.lemma);
//         console.log(result.synonyms);
//         console.log(result.gloss);
//     });
// });