
const thisResult = document.querySelector('.result');
//1
let writeFirstNumber = Number(prompt('Please,write a number'));
let writeSecondNumber
//2
while(isNaN(writeFirstNumber) || !Number.isInteger(writeFirstNumber) || writeFirstNumber===""){
    writeFirstNumber = Number(prompt('Please,write integer number'));
}

//3
writeSecondNumber = Number(prompt('Please,write second number(more than first number)'));

//4
while(isNaN(writeSecondNumber) || !Number.isInteger(writeSecondNumber) || writeSecondNumber==="" || writeFirstNumber>=writeSecondNumber){
    writeSecondNumber = Number(prompt('Please,write integer number too (more than first number)'));
}

//5
const evenNumbers = confirm('Do you need to skip even numbers?');
let sumOfNumbers = 0;

//6
 if(evenNumbers) {
    for (let j = writeFirstNumber; j <= writeSecondNumber; j++){
        if(evenNumbers && j % 2 == 0){continue;
        }
        sumOfNumbers += j;
    }
    }else{
    for(let j = writeFirstNumber;j <= writeSecondNumber;j++)
        sumOfNumbers += j;
    
}

console.log(sumOfNumbers);

thisResult.textContent = sumOfNumbers;









 
 


