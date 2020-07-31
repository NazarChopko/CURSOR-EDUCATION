const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 5.47, 57, 87, 23, 2, 56, 3, 2];
const task1Html = document.querySelector('.task1');
const task2Html = document.querySelector('.task2');
const task3Html = document.querySelector('.task3');
const task4Html = document.querySelector('.task4');
const task5Html = document.querySelector('.task5');
const task6Html = document.querySelector('.task6');



//1 Масив випадкових чисел
const getRandomArray = (lenght, min, max) => 
Array(lenght).fill(0).map(() => (Math.random()*(min-max)+max).toFixed(0))

const random = getRandomArray(15,1,100);
console.log(random)

task1Html.textContent = random;


//2 середнє арифметичне

const getAverage = (...numbers) => { 
    let notIntegral = numbers.filter((el) => el % 1 === 0);
    let result =  notIntegral.reduce((acum,cur) => acum + cur)/notIntegral.length;
    return result.toFixed(1);
}

console.log(getAverage(...numbers))

task2Html.textContent = getAverage(...numbers);

//3 Фільтрує парні числа
const filterEvenNumbers = (...numbers) => numbers.filter((el) => el % 2 !== 0);
console.log(filterEvenNumbers(...numbers))

task3Html.textContent = filterEvenNumbers(...numbers);

//4 Фільтрує цифри які білльші за 0
const filterMinusNumber = [-1,4,6,-4,-9,4]
const countPositiveNumbers = (filterMinusNumber) => filterMinusNumber.filter((el) => el > 0).length;
console.log(countPositiveNumbers(filterMinusNumber));

task4Html.textContent = countPositiveNumbers(filterMinusNumber);

//5 Цифри які діляться націло на 5
getDividedByFive = (...numbers) => numbers.filter((el) => el % 5 === 0);
console.log(getDividedByFive(...numbers));

task5Html.textContent = getDividedByFive(...numbers);

//6 Ділимо слово по 3 букви
const generateCombinations = (word) => {
    let result = [];
    let skipSpace = ''; 
    for(let i = 0; i < word.length; i++){
        if (word[i] === ' '){continue;}
            skipSpace += word[i];
    }
    
    
    for(let j = 0; j < skipSpace.length; j = j+3){
         result.push(skipSpace.toLowerCase().slice(j,j+3))
    }
    return result}


console.log(generateCombinations('Ca lcuLA teD'));

task6Html.textContent = generateCombinations('Ca lcuLA teD');



