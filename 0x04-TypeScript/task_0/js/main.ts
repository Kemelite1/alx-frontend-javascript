//student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  //create two students and an array named studentsList containing the twovariables
  const student1: Student = {
    firstName: "Maria",
    lastName: "David",
    age: 25,
    location: "Lagos",
  };

  const student2: Student = {
    firstName: "Kitchener",
    lastName: "Akoko",
    age: 20,
    location: "Abuja",
  };

  const studentsList: Student[] = [student1, student2];

  //Render a table using Vanilla JavaScript
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });