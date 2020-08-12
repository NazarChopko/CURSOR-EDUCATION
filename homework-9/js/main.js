function getRandomColor() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}

function showBlocks() {
  document.querySelector(".inner-block").classList.toggle("hidden");
}

function paintBlock() {
  let divBlock = document.querySelectorAll(".block ");
  for (let j = 0; j < divBlock.length; j++) {
    divBlock[j].style.backgroundColor = `${getRandomColor()}`;
  }
}

function generateBlocks() {
  paintBlock();
  showBlocks();
  if (document.querySelector(".inner-block").classList.contains("hidden")) {
    document.querySelector(".btn-show").textContent = "Show";
  } else {
    document.querySelector(".btn-show").textContent = "Hidden";
  }
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
