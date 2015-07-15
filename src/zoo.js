// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.openStatus = "Closed";
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};

Zoo.prototype.open = function() {
  this.openStatus = "Open";
};

Zoo.prototype.isOpen = function() {
  if(this.openStatus === "Open") {
    return "Open";
  } else {
    return "Closed";
  }
};

Zoo.prototype.animals = [];

Zoo.prototype.addAnimal = function (animal) {
  if(this.isOpen() === "Open") {
    if(console.log(animal)) {
      this.animals.push(animal);
    } else {
      return "Not an instance of animal";
    }
  } else {
    return "Zoo is closed";
  }
};

module.exports=Zoo;
