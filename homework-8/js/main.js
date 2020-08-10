class Student {
  constructor(fullName, university, course) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this.allMarks = [5, 4, 4, 5];
    this.isStudent = true;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university} - ${this.fullName}`;
  }

  get marks() {
    if (this.isStudent) {
      return this.allMarks;
    } else {
      return null;
    }
  }

  set marks(value) {
    if (this.isStudent) {
      return this.allMarks.push(value);
    } else {
      return null;
    }
  }

  getAverageMark() {
    if (this.isStudent) {
      return this.marks.reduce((acc, a) => acc + a, 0) / this.marks.length;
    }
  }

  dismiss() {
    return (this.isStudent = false);
  }

  recover() {
    return (this.isStudent = true);
  }
}

const student = new Student("Назар Чопко", "Hogvarts University", 3);

///Advanced
class BudgetStudent extends Student {
  constructor(fullName, university, course) {
    super(fullName, university, course);
    let timer = setInterval(() => {
      this.getScholarship();
    }, 30000);
  }

  getScholarship() {
    if (this.isStudent && this.getAverageMark() >= 4) {
      console.log("Ви отримали 1400 грн. стипендії");
    } else {
      console.log("Ви не отримуєте стипендію");
    }
  }
}

const student1 = new BudgetStudent("Віка Чопко", "Hogvarts University", 1);

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
console.log(student.dismiss());
console.log(student.marks);
console.log(student.recover());
console.log(student.marks);
