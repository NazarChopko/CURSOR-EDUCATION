function getMaxDigit(maxNumber) {
  return String(maxNumber).split("").sort().reverse()[0];
}

export function homeWork3() {
  console.log(`HW3 - Максимальна цифра (1,2,3,4,5) - ${getMaxDigit(12345)}`);
}
