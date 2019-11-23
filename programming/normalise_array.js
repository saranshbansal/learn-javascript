let arr = [[[2]], [[5]], 9, 34];

for (let i of arr) {
  print(i);
}

function print(x) {
  if (Array.isArray(x)) {
    for (let j of x) print(j);
  } else {
    console.log(x);
  }
}
