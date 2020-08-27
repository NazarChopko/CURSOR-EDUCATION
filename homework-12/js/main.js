const container = document.getElementById("main_container");
const charactersBtn = document.getElementById("characters_btn");
const charList = document.getElementById("list_char");
const charText = document.getElementById("text_characters");
const showPlaneted = document.getElementById("btn_show_planets");
const planetsText = document.getElementById("text_planets");
const btnNextPrev = document.getElementById("two_btn");
const next = document.getElementById("next");
const prev = document.getElementById("previous");

const BASE = "https://swapi.dev/api/";

async function getRequest(url) {
  let req = await fetch(url);
  let content = await req.json();
  return content;
}

///1 - CHARACTERS

function urlFilms(part) {
  return `${BASE}films/${part}/`;
}

let films;
charactersBtn.addEventListener("click", () => {
  let num = charList.options[charList.selectedIndex].value;
  if (num === "1") {
    films = urlFilms(1);
  } else if (num === "2") {
    films = urlFilms(2);
  } else if (num === "3") {
    films = urlFilms(3);
  } else if (num === "4") {
    films = urlFilms(4);
  } else if (num === "5") {
    films = urlFilms(5);
  } else if (num === "6") {
    films = urlFilms(6);
  }

  let char = "";
  getRequest(films)
    .then((charRes) => charRes.characters.map(getRequest))
    .then((res) => Promise.all(res))
    .then((res) => {
      res.map((prop) => {
        char += `<div class="char_info">
             <h2>Name:</h2><h3>${prop.name},</h3>
             <h2>Birthday:</h2><h3>${prop.birth_year},</h3>
             <h2>Gender:</h2><h3>${prop.gender}.</h3>
             </div>`;
        charText.innerHTML = `${char}`;
      });
    });
});

/////2 PLANETS
let numPage = 1;
function urlPlaneted(numPage) {
  return `${BASE}planets/?page=${numPage}`;
}

showPlaneted.addEventListener("click", () => {
  getRequest(urlPlaneted(numPage)).then((resultPlanets) => {
    let planets = "";
    for (let j = 0; j < resultPlanets.results.length; j++) {
      planets += `<div class="plan_info">
           <h2>Name:</h2><h3>${resultPlanets.results[j].name}</h3>
           </div>`;

      planetsText.innerHTML = `${planets}`;
    }
  });

  btnNextPrev.classList.remove("hidden");
});

next.addEventListener("click", () => {
  if (numPage >= 6) {
    return;
  }
  getRequest(urlPlaneted(++numPage)).then((nextResult) => {
    let planets = "";
    for (let j = 0; j < nextResult.results.length; j++) {
      planets += `<div class="plan_info">
           <h2>Name:</h2><h3>${nextResult.results[j].name}</h3>
           </div>`;

      planetsText.innerHTML = `${planets}`;
    }
  });
});

prev.addEventListener("click", () => {
  if (numPage < 1) {
    return;
  }
  getRequest(urlPlaneted(--numPage))
    .then((prevResult) => {
      let planets = "";
      for (let j = 0; j < prevResult.results.length; j++) {
        planets += `<div class="plan_info">
           <h2>Name:</h2><h3>${prevResult.results[j].name}</h3>
           </div>`;

        planetsText.innerHTML = `${planets}`;
      }
    })
    .catch(() => {
      console.error("BROOOOO, stop clicking, this first page!!!!");
    });
});
