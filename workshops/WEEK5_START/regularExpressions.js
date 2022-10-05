// // Building a literal
// let regexOnexxx = /ab+c/;

// // Another way to do it, different syntax 
// // let regExTwo = new RegEx('ab+c');

// We're looking for sequence abc in a string
let regexOne = /abc/;
// this should return true:
console.log(regexOne.test(" hi do you know your abc's"));
// this will return false:
console.log(regexOne.test("ab craft"));

// EXAMPLE 2: check for 9
let digitEx = /9/;
console.log(digitEx.test("hi do you know"));


// EX3: range: is 0 to 9 within any digit in this string?
let digitExTwo = /[0-9]/;
console.log(digitExTwo.test("9977 hello"));

// EX4: will give false: square brackets make a difference
let digitExThree = /0123456789/;
console.log(digitExThree.test("9977 hello"));

// Ex5: RANGE OF LETERS
let letterExTwo = /[a-z]/;
console.log(letterExTwo.test("998")); //false
console.log(letterExTwo.test("ab")); //true
console.log(letterExTwo.test("ALL UPPERCASE"));

// Ex6: to not care about the case
let letterExTwoAgain = /[a-z]/i;
console.log(letterExTwoAgain.test("ALL UPPERCASE")); //true

// for any digit:
//  \d

// for any alphanumeric character (number or letter, no special chracter)
//  \w

// white space
//  \s

// everything that is not a digit
//  \D

// any non-word character
// \W

// any non-white space character
// \S

// Is there a digit in the following string?
// you don't need to create variables, you can put regular expression in ()
console.log((/\d/).test("abcd"));

// + indicates if [0-9] repeats one or more times (useless in this specific case)
console.log((/[0-9]+/).test("a1d"));

// * means optional: * means splat (you don't care how many times it occurs in the string)
console.log((/[0-9]*/).test("agd"));

// ? means 0 or 1 time it happened
console.log((/[0-9]?/).test("agd"));

// ------------ optional characters ------------------
// the u is optional
console.log((/neighbou?r/).test("neighbor")); //true
console.log((/neighbou?r/).test("neighbour")); //true
console.log((/neighbou?r/).test("neighbou")); //false

// ------------ sequences ------------------
// we are looking for a sequence of 2 numbers or sequence of 3 numbers anywhere in the string
console.log((/\d{2,3}/).test("12fsdfs")); //true
console.log((/\d{2,3}/).test("123 123")); //true
console.log((/\d{2,3}/).test("123456sdfsdf")); //true

// ------------ date ------------------
// Set a pattern to check for a date mm-dd-yyyy
let date_pattern = /\d{1,2}-\d{1,2}-\d{4}/
console.log((date_pattern).test("123-12-2004")); //true
console.log((date_pattern).test("123*12-2004")); //false

// ------------ apply to many characters ------------------
// If we want to apply the + to many characters, put in parentheses
// the first plus refers only to the o, the second plus refers to the entire hoo
let boo = /boo+(hoo)+/;
console.log(boo.test("boohoo")); //true
console.log(boo.test("booooooohooafter")); //true
console.log(boo.test("firsthooboo")); //false

// If you want boo to be the start of the string
let booTwo = /^boo+(hoo)+/;
console.log(booTwo.test("firstboohoo")); //false
console.log(booTwo.test("boohoolast")); //true

// If you want that it has to end with hoo
let booThree = /boo+(hoo)+$/;
console.log(booThree.test("firstboohoo")); //true


// ------------ exec ------------------
// exec gives info about what it finds, to see what was matched
let match = /(\d)+/.exec("123");
console.log(match);

// ----------- funner -----------------
// digit followed by space followed by apple or pear or orange
let fruitCount = /\d+ (apple|pear|orange)/;
console.log(fruitCount.test("I have 10 oranges")); //true

// s is optional, and the sentence has to end with the fruit
let fruitCountTwo = /\d+ (apple|pear|orange)s?$/;
console.log(fruitCountTwo.test("I have 10 oranges")); //true

// ----------- replacing -----------------
// replace all occurrences of y with *, but it only replaces the first occurrence
console.log("todayIsWednesday".replace("y","*"));

//  /g means replace all occurrences
console.log("todayIsWednesday".replace(/y/g,"*"));

// take the first two words and reverse them; $2 and $1 are positions that come with the replace() function
console.log("apple pear banana".replace(/(\w+) (\w+)/, "$2 $1"));

// ----------- tockenizing -----------------
// defining where the splitting will occur: these punctuations and space
let rePun = /[.,; ]/;
// split takes a delimiter, in this case, it's rePun
let splitR1 = ("test has won the day;").split(rePun);
console.log(splitR1);

// end of sentence
let reSentence = /[.?!]/;
let splitR2 = ("test has won the day.testhas won the day.").split(reSentence);
console.log(splitR2);