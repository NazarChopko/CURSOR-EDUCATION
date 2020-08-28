const startGenerate = document.querySelector(".res");
const startGenerateBtn = document.querySelector(".btn");
const plusBtn = document.getElementById("plus_btn");
const minusBtn = document.getElementById("minus_btn");
const res = document.getElementById("result_advance");

///TASK 1
function* createIdGenerator() {
  for (let j = 1; j < Infinity; j++) {
    yield j;
  }
}

const idGenerator = createIdGenerator();

startGenerateBtn.addEventListener("click", () => {
  startGenerate.textContent = `Your result - ${idGenerator.next().value}
`;
});

///TASK 2

let font = 14;
let agree;

function* plusSize() {
  while (agree === true) {
    yield (font += 2);
  }
}

function* minusSize() {
  while (agree === false) {
    yield (font -= 2);
  }
}

let plus = plusSize();
let minus = minusSize();

plusBtn.addEventListener("click", () => {
  agree = true;
  res.style.fontSize = `${plus.next().value}px`;
});

minusBtn.addEventListener("click", () => {
  agree = false;
  res.style.fontSize = `${minus.next().value}px`;
  if (font < 2) {
    res.style.fontSize = `${2}px`;
    font = 2;
  }
});
