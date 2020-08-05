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
    return subject.map((el) => el.slice(0,1).toUpperCase() + el.slice(1).replace('_',' ').toLowerCase());
}

console.log(getSubjects(students[0]));
console.log(getSubjects(students[1]));
console.log(getSubjects(students[2]));


//2
const getAverageMark = (obj) =>{
    const subject = Object.values(obj.subjects).flat();
    let sum = 0;
    let middle = subject.length;
        sum = subject.reduce((acc,a) => acc + a, 0)
    return Number((sum/middle).toFixed(2));
}
console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));


//3
const getStudentInfo = (student) => {
   const{name,course} = student
   return { name,course,avarageMark:getAverageMark(student)}
}

console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

//4

const getStudentsNames = name => name.map((el) => el.name).sort();

console.log(getStudentsNames(students));

//5

const getBestStudent = (student) => {
  const maxMark = Math.max(...student.map(item => getAverageMark(item)));
  const bestStudent = student.find(item => getAverageMark(item) === maxMark);
  return bestStudent.name;
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








