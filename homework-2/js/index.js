let sumOfNumbers = 0;

for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    continue;
  }
  sumOfNumbers += j;
}

export default sumOfNumbers;
