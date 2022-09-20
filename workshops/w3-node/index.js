// //add a reference to the module... 
// const testModuleVar = require('./testModule');
// //call the function name ... 
// console.log('Results: ' + testModuleVar.name());
// testModuleVar.setPetName("Santiago");
// console.log(testModuleVar.getPetName());

// // testModuleVar.appendPetName();


//use the static ...
const testModuleStat = require('./staticModule');
console.log(testModuleStat);
 
testModuleStat.passMessage("testMessage");
testModuleStat.passMessage("testMessage_2");
testModuleStat.passMessage("testMessage_3");
 
// next var
const testModuleStatTwo = require('./staticModule');
console.log(testModuleStatTwo);
testModuleStatTwo.passMessage("testMessage");
testModuleStatTwo.passMessage("testMessage_2");
testModuleStatTwo.passMessage("testMessage_3");