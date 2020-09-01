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

export const homeWork9 = paintBlock();
