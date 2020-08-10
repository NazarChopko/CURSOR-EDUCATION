const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const task1Html = document.querySelector(".task1");
const task2_1Html = document.querySelector(".task2");
const task2_2Html = document.querySelector(".task3");
const task2_3Html = document.querySelector(".task4");
const task3_1Html = document.querySelector(".task5");
const task3_2Html = document.querySelector(".task6");
const task3_3Html = document.querySelector(".task7");

//1
function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(Number(getMyTaxes.call(ukraine, 8000).toFixed(1)));
task1Html.textContent = getMyTaxes.call(ukraine, 8000).toFixed(1);

//2

function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}

console.log(Number(getMiddleTaxes.call(ukraine).toFixed(1)));
console.log(Number(getMiddleTaxes.call(latvia).toFixed(1)));
console.log(Number(getMiddleTaxes.call(litva).toFixed(1)));

task2_1Html.textContent = getMiddleTaxes.call(ukraine).toFixed(1);
task2_2Html.textContent = getMiddleTaxes.call(latvia).toFixed(1);
task2_3Html.textContent = getMiddleTaxes.call(litva).toFixed(1);

//3
function getTotalTaxes() {
  return this.vacancies * this.middleSalary * this.tax;
}

console.log(Number(getTotalTaxes.call(ukraine).toFixed(2)));
console.log(Number(getTotalTaxes.call(latvia).toFixed(2)));
console.log(Number(getTotalTaxes.call(litva).toFixed(2)));

task3_1Html.textContent = getTotalTaxes.call(ukraine).toFixed(2);
task3_2Html.textContent = getTotalTaxes.call(latvia).toFixed(2);
task3_3Html.textContent = getTotalTaxes.call(litva).toFixed(2);

//4
function getMySalary(country) {
  const randSalary = Number(
    Math.round(Math.random() * (1500 - 2000) + 2000).toFixed(2)
  );
  function doTax() {
    return this.tax;
  }
  const countryTax = doTax.call(country);
  const theirTax = Number(randSalary * countryTax).toFixed(2);
  const profit = Number(randSalary - theirTax).toFixed(2);
  const allProperty = `salary: ${randSalary}, taxes: ${theirTax}, profit: ${profit}`;
  return allProperty;
}

console.log(getMySalary(ukraine));
const timerUk = setInterval(() => {
  console.log(getMySalary(ukraine));
}, 10000);
setTimeout(() => {
  clearInterval(timerUk);
}, 60000);

console.log(getMySalary(latvia));
const timerLa = setInterval(() => {
  console.log(getMySalary(latvia));
}, 10000);
setTimeout(() => {
  clearInterval(timerLa);
}, 60000);

console.log(getMySalary(litva));
const timerLi = setInterval(() => {
  console.log(getMySalary(litva));
}, 10000);
setTimeout(() => {
  clearInterval(timerLi);
}, 60000);
