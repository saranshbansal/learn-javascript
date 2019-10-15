//set initial values
var str = "string";
var num = 1;
var bool = true;

//function that reassigns values
function passValue(str, num, bool) {
  //new variables are copied with the value of the original variables
  str = "othervalue";
  num = 10000;
  boolean = false;
}

//call function that reassigns values
passValue(str, num, bool);

//original variables don't change
console.log(str); // "string"
console.log(num); // 1
console.log(bool); // true
