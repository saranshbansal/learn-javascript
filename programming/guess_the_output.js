var res = (function(
    x,
    f = () => {
      return x;
    }
  ) {
    var x;
    var y = x;
    x = "B";
    return [x, f(x), y, f()];
  })("A");
  
  console.log("1. ", res);
  
  // -----------
  
  const v = "abc";
  function f(fun = x => v) {
    const v = "xyz";
    console.log("2. ", fun());
  }
  
  f();
  
  // -----------
  const a = [];
  for (var i of ["a", "b", "c"]) {
    a.push(() => i);
  }
  
  for (const i of [1, 2, 3]) {
    a.push(() => i);
  }
  
  console.log(
    "4. ",
    a.map(x => x())
  );
  