const button = document.querySelector(".btn");
const answer = document.querySelector(".answer");

const time = 50;
function getRandomChinese(length) {
  return new Promise((resolve) => {
    let current = 0;
    let sign = parseInt(Date.now().toString().slice(-5));
    let result = [];

    while (current < length) {
      sign += current;
      result.push(String.fromCharCode(sign));
      current++;
    }

    setTimeout(() => {
      resolve(result.join(""));
    }, time * length);
  });
}

button.addEventListener("click", () => {
  getRandomChinese(4).then((res) => {
    answer.textContent = res;
  });
});
