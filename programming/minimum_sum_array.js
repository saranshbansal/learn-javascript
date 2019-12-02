function getMinimumUniqueSum(arr) {
  // Write your code here
  return [...new Set(arr)].reduce((sum, n) => sum + n, 0);
}
console.log(getMinimumUniqueSum(null));
