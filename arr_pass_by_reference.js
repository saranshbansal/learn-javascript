//create new array
var arr = [1, 2, 3, 4, 5];

//function that changes first two array values, pops the last value, and replaces the external reference with its own internal reference.
function modifyArray(arr) {
  //update the first two array values
  arr[0] = 100;
  arr[1] = 200;

  //remove the last array value, array is now length 4
  arr.pop();

  //futilly try to replace the array with another one
  //only the internal arr has been replaced, the original arr outside this scope is still the same
  arr = [-2534, -345, -3463, -4536, -6453];
}

//pass in the og array
modifyArray(arr);

console.log(arr[0]); //100 note how none of the array values are reflecting the new negative values
console.log(arr[1]); //200
console.log(arr.length); //4
