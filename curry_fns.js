const myCurryFn = function(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
};

const result = myCurryFn(1)(2)(3);

console.log(result);

// Reusable functions with currying
function add10() {
  return function(x, y) {
    return x + y + 10;
  };
};

console.log(add10()(100, 120));
