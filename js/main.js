//Початкові змінні
const milk= 15.678;
const salmon = 123.965;
const sausage = 90.2345;
const profitHtml = document.querySelector(".myamount");
const sumForPayHtml = document.querySelector(".forpay");
const percRandomHtml = document.querySelector(".persent");
//1
const maxNumber = Math.max(milk,salmon,sausage);
console.log(maxNumber);

//2
const minNumber = Math.min(milk,salmon,sausage);
console.log(minNumber);

//3
const amount = milk + salmon + sausage;
console.log(amount);

//4
const roundingMilk = Math.floor(milk);
const roundingSalmon = Math.floor(salmon);
const roundingSausage = Math.floor(sausage);

const newRoundingAmount = roundingMilk + roundingSalmon + roundingSausage;
console.log(newRoundingAmount);

//5
const allNumbers = Math.floor(newRoundingAmount/100)*100;
console.log(allNumbers);

//6
const evenOrOdd = newRoundingAmount % 2 === 0 ?'Yes' :'No';
console.log(evenOrOdd);

//7
const money = 500;
const rest = money - amount;
console.log(rest);

//8
const middleNumber = Number(((amount)/3).toFixed(2));
console.log(middleNumber)

//9
const randomSale = Number((Math.random()*100).toFixed(0));
console.log(randomSale);

const monneyForPay = Number((amount-(amount*randomSale/100)).toFixed(2));
console.log(monneyForPay);

//10
const income =Number(((amount/2)-(amount*randomSale/100)).toFixed(0))
console.log(income);

//Ініціалізація динамічних чисел в html
profitHtml.textContent = income;
sumForPayHtml.textContent = monneyForPay;
percRandomHtml.textContent = randomSale;
