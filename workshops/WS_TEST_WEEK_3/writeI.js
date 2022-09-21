const fs = require('fs');
const fileContainer = './myFiles/fileA.txt';

let dataThird = "this is my third test string written at "+(new Date)+"to "+fileContainer+"\n"+"more text on second line";
fs.writeFileSync(fileContainer, dataThird);

let textToAppend = "\n" + (new Date) + " Text copied and appended  to " + fileContainer;
fs.appendFileSync(fileContainer, textToAppend);