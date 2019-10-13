const array = [1, 4, 5, 3, 4, 5, 6, 1, 5];

// 1. Set
[...new Set(array)];

// 2. filter
array.filter((item, index) => array.indexOf(item) === index);

// 3. reduce
array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);

console.log(array);

