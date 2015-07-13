function Animal(name, age, kind){
  this.name = name;
  this.kind = kind;
  this.age = age;
}

Animal.prototype.oink = function(){
  if(this.kind === 'Pig') {
    return "oink";
  } else {
    return "I am not a pig"
  }
};

Animal.prototype.growUp = function() {
  this.age += 1;
};

Animal.prototype.awake = "off";

Animal.prototype.wakeUp = function() {
  this.awake = "awake";
};

Animal.prototype.sleep = "sleeping";

Animal.prototype.feed = function(){
  if( this.awake === "awake") {
    return "Feed it";
  } else if (this.sleep === "sleeping") {
      return "Don't feed it, it's sleeping";
  }
}


module.exports=Animal;
