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

module.exports=Animal;
