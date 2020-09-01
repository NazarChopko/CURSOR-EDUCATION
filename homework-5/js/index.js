const getRandomArray = (lenght, min, max) =>
  new Array(lenght)
    .fill(0)
    .map(() => parseInt((Math.random() * (min - max) + max).toFixed(0)));

export const random = getRandomArray(15, 1, 100);
