let arr = [1, 2, 3, 4, 5];

arr[Symbol.iterator] = function () {
  let i = 0;
  return {
    next: function () {
      i++;
      return {
        done: i > 10,
        value: i,
      };
    },
  };
};

for (let key of arr) {
  console.log(key);
}
