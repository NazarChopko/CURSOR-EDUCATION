let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", play);
});

export function play(a) {
  let key = a.target;
  key.classList.add("active");
  let note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  note.play();
  note.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
// export const homeWork10 = play(a);
