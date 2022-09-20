let petName = "Max";


module.exports.name = function() {
    return "Sabine";
}

module.exports.age = function() {
    return "29 (really)";
}

module.exports.setPetName = function(inComing) {
    petName = inComing;
}

module.exports.getPetName = function() {
    appendPetName();
    return petName;
}

/** private **/
function appendPetName(){
    petName = petName +"****";
  }