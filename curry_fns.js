const myCurryFn = function(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
};

// OR Shorthand::
const myCurryFn2 = a => b => c => a + b + c;

const result = myCurryFn(1)(2)(3);
console.log(result);

const result2 = myCurryFn2(1)(2)(3);
console.log(result2);

// Reusable functions with currying
function add10() {
  return function(x, y) {
    return x + y + 10;
  };
}

console.log(add10()(100, 120));
