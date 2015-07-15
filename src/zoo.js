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
    for(var i = 0; i < this.animals.length; i ++) {
      if(this.animals[i].name === animal.name && this.animals[i].kind === animal.kind) {
         return "Sorry, that animal already lives here";
       }
    }
      if(animal.constructor.name === "Animal") {
        this.animals.push(animal);
        return "It's in the cage!";
      } else {
        return "Not an instance of animal";
      }
  } else {
    return "Zoo is closed";
  }
};

Zoo.prototype.removeAnimal = function (animal) {
  if(this.isOpen() === "Open") {
    for(var i = 0; i < this.animals.length; i ++) {
      if(this.animals[i].name === animal.name && this.animals[i].kind === animal.kind) {
          console.log(this.animals);
          this.animals.splice(i , 1 );
          console.log(this.animals);
         return "I think you made me kill it =(";
       }
    }
  } else {
    return "Zoo no open";
  }
};

module.exports=Zoo;
