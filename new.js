var dog = {kind: "dog"}

var doges = function(dog, e, s) {
  console.log(this.kind + "e" + "s");
}

doges.call(dog, "e", "s");

doges.apply(dog, ["e", "s"]);
