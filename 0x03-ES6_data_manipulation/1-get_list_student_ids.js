export default function getListStudentIds(studentList){
    // checks if the input is an array.
    if (!Array.isArray(studentList)) {
        return [];
      }

  // Use map to extract the ids from the array of objects
  return studentList.map(student => student.id);
}