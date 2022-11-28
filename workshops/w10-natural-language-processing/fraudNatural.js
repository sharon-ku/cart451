let fs = require('fs');

/* ===============
Grab files
=============== */

// File containing tokens that appear in more than one email
let file = fs.readFileSync('files/results/tfidf-results-only-keywords-more-than-once.txt', 'utf8');
// File containing tokens that appear in more than one email AND are verbs
let fileOnlyVerbs = fs.readFileSync('files/results/tfidf-results-only-keywords-more-than-once-only-verbs.txt', 'utf8');
// File containing all 12 emails
let fileAllEmails = fs.readFileSync('files/fraud-all.txt', 'utf8');
// console.log(file);


/* ===============
Natural start
=============== */

let natural = require('natural');
// console.log(natural);


/* ===============
Tokenizing
=============== */
// Tokenizing all words that appear in more than one document
let tokenizer = new natural.WordTokenizer();
let tokens = tokenizer.tokenize(file);
console.log(`tokens` + tokens);

// Tokenizing all words that appear in more than one document AND are verbs only
let tokensVerbs = tokenizer.tokenize(fileOnlyVerbs);
console.log(`tokensVerbs` + tokensVerbs);

/* ===============
Stemming
=============== */
console.log(`===stemming starts here:====`)

for (let i = 0; i < tokens.length; i++) {
    console.log(natural.PorterStemmer.stem(tokens[i]));
}


/* ===============
Sentence splitter: did not ise
=============== */
// let sentenceSplitter = new natural.SentenceTokenizer();


/* ===============
Parts of speech
=============== */
const language = "EN";
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
let ruleSet = new natural.RuleSet('EN');
let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

console.log(`===pos starts here:====`)

console.log(tagger.tag(tokens));





/* ===============
Ngrams
=============== */
let NGrams = natural.NGrams;

// // Find sets of 7 consecutive words where the middle word is a token

// let bigrams = NGrams.ngrams(fileAllEmails, 7);
// // console.log(bigrams);

// let numTokensToConsider = 50;
// for (let j = 0; j < numTokensToConsider; j++) {
//     for (let i = 0; i < bigrams.length; i++) {
//         if (bigrams[i][3].toLowerCase() === tokens[j]) {
//             console.log(bigrams[i]);
//         }
//     }
// }

// Find sets of 10 consecutive words where the third word is a verb token
let bigrams = NGrams.ngrams(fileAllEmails, 10);
// console.log(bigrams);

let numVerbTokensToConsider = 15;
for (let j = 0; j < numVerbTokensToConsider; j++) {
    for (let i = 0; i < bigrams.length; i++) {
        if (bigrams[i][2].toLowerCase() === tokensVerbs[j]) {
            console.log(bigrams[i]);
        }
    }
}


/* ===============
WordNet: did not use
=============== */
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