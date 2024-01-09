export default function getStudentIdsSum(studentList){
    // Use reduce to calculate the sum of student ids
  return studentList.reduce((sum, student) => sum + student.id, 0);


}