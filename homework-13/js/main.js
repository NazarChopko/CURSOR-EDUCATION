const startGenerate = document.querySelector(".res");
const startGenerateBtn = document.querySelector(".btn");

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
