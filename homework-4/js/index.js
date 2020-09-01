const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];
function doMarks() {
  let markToStudent = [];
  for (let j = 0; j < students.length; j++) {
    markToStudent.push([students[j], marks[j]]);
  }
  return markToStudent;
}

export const allMarks = doMarks();
