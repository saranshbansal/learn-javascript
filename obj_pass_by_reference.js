//created original object with property 'original'
var obj = {};
obj.original = "original";

//function that will add a new property to an object passed to it, and will also try to reassign the object in vain.
function prototypeProperty(obj) {
  //add new property attribute to object
  obj.property = "new property";
  //edit the original text of the .original property
  obj.original = "edited";
  //function will overwrite the external reference with a new reference
  //does not affect the external object
  obj = {};
}

prototypeProperty(obj);

console.log(obj.property); // "new property", note how the original obj is not empty
console.log(obj.original); // "edited", even though strings are immutable, the function was changing the properties of the mutable object, not the string.
