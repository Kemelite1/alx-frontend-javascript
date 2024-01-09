export default function getStudentsByLocation(studentList, city) {
    // Use filter to get students located in the specified city
    return studentList.filter(student => student.location === city);
  }