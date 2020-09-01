const showPlaneted = document.getElementById("btn_show_planets");
const planetsText = document.getElementById("text_planets");

const BASE = "http://swapi.dev/api/";
const toHTTPS = (url) =>
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);

async function getRequest(url) {
  const newUrl = toHTTPS(url);
  let req = await fetch(newUrl);
  let content = await req.json();
  return content;
}

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
});

export default showPlaneted;
