async function evenOrOdd(num) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(num % 2 == 0), 2000);
  });

  let result = await promise; // pause till the promise resolves

  console.log(result); // is number even?
}

evenOrOdd(3);
evenOrOdd(6);
