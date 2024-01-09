export default function updateStudentGradeByCity(studentList, city, newGrades) {
    // Use filter to get students located in the specified city
    const studentsInCity = studentList.filter(student => student.location === city);
  
    // Use map to update grades based on newGrades array
    const updatedStudents = studentsInCity.map(student => {
      // Find the corresponding grade object in newGrades
      const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
  
      // Update the student's grade or set it to 'N/A' if not found
      const updatedGrade = matchingGrade ? matchingGrade.grade : 'N/A';
  
      // Return a new object with updated grade
      return { ...student, grade: updatedGrade };
    });
  
    return updatedStudents;
  }
  