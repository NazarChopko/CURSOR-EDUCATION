let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", play);
});

function play(a) {
  let key = a.target;
  key.classList.add("active");
  let note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  note.play();
  note.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

document.addEventListener("keydown", function (e) {
  const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const musicDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
  musicDiv.classList.add("active");
  music.currentTime = 0;
  if (!music) return;
  music.play();
  music.addEventListener("ended", () => {
    musicDiv.classList.remove("active");
  });
});
