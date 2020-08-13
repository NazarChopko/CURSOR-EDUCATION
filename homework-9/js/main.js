function getRandomColor() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}

for (let i = 0; i < 25; i++) {
  let box = document.createElement("div");
  box.className = "block";
  document.querySelector(".current-block").prepend(box);
}

const allBlocks = document.querySelector(".inner-block");
function showBlocks(allBlocks) {
  allBlocks.classList.toggle("hidden");
}

function paintBlock() {
  let divBlock = document.querySelectorAll(".block ");
  for (let j = 0; j < divBlock.length; j++) {
    divBlock[j].style.backgroundColor = `${getRandomColor()}`;
  }
}

function generateBlocks() {
  paintBlock();
  showBlocks(allBlocks);
  document.querySelector(
    ".btn-show"
  ).textContent = allBlocks.classList.contains("hidden") ? "Show" : "Hidden";
}

let interval;
let switcher = false;

function generateBlocksInterval() {
  if (switcher) {
    switcher = false;
    clearInterval(interval);
    document.querySelector(".btn-start").textContent = "Starting";
  } else {
    switcher = true;
    interval = setInterval(() => {
      paintBlock();
    }, 1000);
    document.querySelector(".btn-start").textContent = "Ending";
  }
}
