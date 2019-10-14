let arr = [1, 2, 4, 5, 6, 6, 3];

arr = arr.filter((el, i) => arr.indexOf(el) === i);

const max = Math.max.apply(null, arr);

arr.splice(arr.indexOf(max), 1);

const seconHighest = Math.max.apply(null, arr);

console.log(seconHighest);
