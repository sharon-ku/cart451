//add a reference to the module... 
const testModuleVar = require('./testModule');
//call the function name ... 
console.log('Results: ' + testModuleVar.name());
testModuleVar.setPetName("Santiago");
console.log(testModuleVar.getPetName());

// testModuleVar.appendPetName();
