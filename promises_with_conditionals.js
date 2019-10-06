const getNumbers = originalNumber => {
  console.log("you entered: " + originalNumber);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(originalNumber);
    }, 2000);
  }).then(originalNumber => {
    console.log("result: ");
    /*we can return "originalNumber" if it's odd, but if it is an even number
  we'd make another call to return the next number*/
    if (originalNumber % 2 === 0) {
      return getNextNumber(originalNumber).then(nextNumber => {
        console.log(nextNumber);
        return nextNumber;
      });
    } else {
      console.log(originalNumber);
      return originalNumber;
    }
  });
};

const getNextNumber = number => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number + 1);
    }, 2000);
  });
};

getNumbers(5);
getNumbers(6);
