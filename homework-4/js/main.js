const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const task1Html = document.querySelector('.task1');
const task2Html = document.querySelector('.task2');
const task3Html = document.querySelector('.task3');
const task4Html = document.querySelector('.task4');


// 1
function doСouple(){

let girl = [];
let boy = [];
let couples = [];

    for(all of students){
        if(all.endsWith('на') || all.endsWith('ра')){
            girl.push(all);
        } else {boy.push(all);}
    }


    for(j = 0; j < students.length/2; j++){
     couples.push([boy[j],girl[j]]);
    }

    return couples;

}
const allCouples = doСouple();
console.log(doСouple());

task1Html.textContent = allCouples;

//2
function doThemes(){

    let doThemes = [];
     for(j = 0; j < themes.length; j++){
     doThemes.push([allCouples[j].join(' і '), themes[j]]);
    }
    return doThemes;
    }

const allThemes = doThemes();
console.log(doThemes());

task2Html.textContent = allThemes;

//3

function doMarks(){
    let markToStudent = [];
    for(j = 0; j < students.length; j++){
        markToStudent.push([students[j],marks[j]]);
    }
    return markToStudent;
}

const allMarks = doMarks();
console.log(doMarks());

task3Html.textContent = allMarks;

//4

function doRandomMarksForStudents(){
    let randomMarks = [];
    for(j = 0; j < allThemes.length; j++){
        randomMarks.push([allThemes[j] +',' +  ' ' + (Math.ceil((Math.random()*10)/2))])
    }
    return randomMarks;
}

const allDoRandomMarks = doRandomMarksForStudents();
console.log(doRandomMarksForStudents())

task4Html.textContent = allDoRandomMarks;