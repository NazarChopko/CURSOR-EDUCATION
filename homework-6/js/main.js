const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];



  //1

const getSubjects = (obj) => {
    const subject = Object.keys(obj.subjects);
    return subject.map((el) => el.slice(0,1).toUpperCase() + el.slice(1).replace('_',' '));
}

console.log(getSubjects(students[0]));
console.log(getSubjects(students[1]));
console.log(getSubjects(students[2]));


//2
const getAverageMark = (obj) =>{
    const subject = Object.values(obj.subjects);
    let sum = 0;
    let middle = 0;
    

        for(let j = 0; j < subject.length; j++){
            middle += subject[j].length;
                sum = subject[j].reduce((a,b) => a + b, sum);
    }
        return Number(sum/middle).toFixed(2);
}
console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));


//3
const getStudentInfo = (student) => {
  return {name:student.name,  course:student.course, avarageMark:getAverageMark(student)};
   
}

console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

//4

const getStudentsNames = (name) => { 
  return name.map((el) => el.name).sort();
}
console.log(getStudentsNames(students));

//5

const getBestStudent = (student) => {
  let theBest;
  if(getAverageMark(student[0]) > getAverageMark(student[1]) && getAverageMark(student[0]) > getAverageMark(student[2])){
    theBest = student[0].name;
  } else if (getAverageMark(student[1]) > getAverageMark(student[0]) && getAverageMark(student[1]) > getAverageMark(student[2])){
    theBest = student[1].name;
  } else { theBest = student[2].name;}
  return theBest;
}

console.log(getBestStudent(students));

//6

const calculateWordLetters = (word) =>{
  let result = {};

    for(const value of word){
      let letters = value.toLowerCase();
      if(result[letters]){
        result[letters]++;
      }else{
        result[letters] = 1;
      }
    }
    return result;
}

console.log(calculateWordLetters('MamaHohotala'))









