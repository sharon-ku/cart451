const fs = require('fs');
const fileContainer = './myFiles/fileA.txt';

let data = "this is my test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, data);
