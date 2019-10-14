function myFunction() {
  // 'use strict';
  console.log(this === global);
}

function myFunction2(args) {
  this.first_name = args;

  this.displayName = function() {
    console.log(`Name: ${this.first_name}`);
  };
}

myFunction(); // prints true by default but false with strict mode

let obj1 = new myFunction2("from obj1");
let obj2 = new myFunction2("from obj2");

obj1.displayName() // value of this becomes obj1
obj2.displayName() // value of this becomes obj2

obj1.displayName.call(obj2) // value of this becomes obj2 explicitely
const newObj = obj1.displayName.bind(obj2) // Creates new function with value of “this” equals to person2 object

newObj();