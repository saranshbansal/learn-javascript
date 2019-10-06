const getNumbers = async originalNumber => {
  console.log("you entered: " + originalNumber);
  let firstNumber = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(originalNumber);
    }, 2000);
  });

  if (firstNumber % 2 === 0) {
    let secondNumber = await getNextNumber(originalNumber);
    console.log(secondNumber);
    return secondNumber;
  } else {
    console.log(originalNumber);
    return firstNumber;
  }
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
