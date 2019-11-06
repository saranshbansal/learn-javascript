let arr = [1, 2, 4, 5, 6, 6, 3];

arr = arr.filter((el, i) => arr.indexOf(el) === i);

function nthHighest(arr, n) {
  const max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  if (n === 1) {
    return max;
  } else {
    return nthHighest(arr, n - 1);
  }
}

console.log(nthHighest(arr, 2));