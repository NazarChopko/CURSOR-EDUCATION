const task1Html = document.querySelector(".task1");
const task2Html = document.querySelector(".task2");
const task3Html = document.querySelector(".task3");
const task4Html = document.querySelector(".task4");
const task5Html = document.querySelector(".task5");
const task6Html = document.querySelector(".task6");
const task7Html = document.querySelector(".task7");
const task8Html = document.querySelector(".task8");

// 1.Найбільше число
function getMaxDigit(maxNumber) {
  return String(maxNumber).split("").sort().reverse()[0];
}

task1Html.textContent = getMaxDigit(
  prompt("Введіть число з якого хочете вивести максимальну цифру?")
);

//2.Степінь

function power(n, m) {
  if (
    n === 0 ||
    n < 0 ||
    m < 0 ||
    m === 0 ||
    !Number.isInteger(m) ||
    !Number.isInteger(n)
  ) {
    alert("Введіть додатнє ціле число");
  } else {
    let result = 1;
    for (let i = 1; i <= m; i++) {
      result *= n;
    }
    return result;
  }
}

console.log(power(2, 3));
task2Html.textContent = power(2, 3);

//3.Імя
function reformName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(reformName("naZAR"));

task3Html.textContent = reformName("naZAR");

//4.Податки

function doTax(salary) {
  if (Number.isInteger(salary)) {
    let tax = 19.5 / 100;
    tax = salary * tax;
    salary = Number(salary - tax).toFixed(2);
    return salary;
  } else {
    return alert("Введіть число");
  }
}

console.log(doTax(16784));
task4Html.textContent = doTax(16784);

//5.Рандомне число

function returnNumber(n, m) {
  n = Math.round(n);
  m = Math.round(m);
  return (randomNumber = Number(Math.random() * (n - m) + m).toFixed(0));
}
console.log(returnNumber(8, 20));

task5Html.textContent = returnNumber(8, 20);

//6.Повторення букви
function repeatLetter(letter, word) {
  letter = letter.toLowerCase();
  word = word.toLowerCase();
  let sumLetters = 0;
  for (let j = 0; j < word.length; j++) {
    if (letter === word[j]) {
      sumLetters++;
    }
  }
  return sumLetters;
}

console.log(repeatLetter("a", "banana"));

task6Html.textContent = repeatLetter("a", "banana");

//7.Конвертація валюти
function doConvertedMoney(value) {
  if (String(value).split("").reverse()[0] === "$") {
    value = (parseInt(value) * 27).toFixed(2) + " " + "UAH";
    return value;
  } else if (
    String(value).split("").reverse()[0] === "H" ||
    String(value).split("").reverse()[0] === "h"
  ) {
    value = (parseInt(value) / 27).toFixed(2) + " " + "$";
    return value;
  } else {
    return "Введіть суму конвертації";
  }
}

console.log(doConvertedMoney("500$"));

task7Html.textContent = doConvertedMoney("500$");

//8.Randome password

function writeRandomPassword(length = 8) {
  if (!isNaN(length) && length > 0) {
    let password = "";
    for (let j = 0; j < length; j++) {
      password += parseInt(Math.floor(Math.random() * 10));
    }
    return password;
  } else {
    return "Please, write a number!";
  }
}

console.log(writeRandomPassword(6));

task8Html.textContent = writeRandomPassword(6);
