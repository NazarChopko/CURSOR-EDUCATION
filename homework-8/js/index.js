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

export const homeWork8 = student.getInfo();
