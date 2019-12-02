// Solution 1. Math.max: Modifies original array. No explicit loops
let arr = [1, 2, 4, 5, 6, 6, 3];

arr = arr.filter((el, i) => arr.indexOf(el) === i);

const max = Math.max.apply(null, arr);

arr.splice(arr.indexOf(max), 1);

const seconHighest = Math.max.apply(null, arr);

console.log(seconHighest);

// Solution 2. One pass iteration: No need to remove duplicates. No modification of original array
let arr2 = [1, 2, 4, 5, 6, 6, 3];
(biggest = -Infinity), (next_biggest = -Infinity);

for (let i = 0, n = arr2.length; i < n; ++i) {
  let nr = +arr2[i]; // convert to number first

  if (nr > biggest) {
    next_biggest = biggest; // save previous biggest value
    biggest = nr;
  } else if (nr < biggest && nr > next_biggest) {
    next_biggest = nr; // new second biggest value
  }
}

console.log(next_biggest);
