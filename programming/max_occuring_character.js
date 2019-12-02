function maximumOccurringCharacter(text) {
  // Write your code here
  let maxCount = 0;
  let maxCountCh = "";

  for (let ch of text) {
    if (text.split(ch).length > maxCount) {
      maxCount = text.split(ch).length;
      maxCountCh = ch;
    }
  }
  console.log(maxCountCh);

  return maxCountCh;
}

maximumOccurringCharacter("--aaaa1111--");
