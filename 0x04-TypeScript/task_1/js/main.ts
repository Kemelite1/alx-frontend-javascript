// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }

  //define the Directors interface extending Teacher
  interface Directors extends Teacher{
    numberOfReports: number;
  }

  //define the printTeacherFunction interface
  interface printTeacherFunction{
    (firstName: string, lastName: string): string;
  }
  
  //implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    const fullName = `${firstLetter}. ${lastName}`;
    return fullName;
  }
  // Create a teacher object
  const teacher: Teacher = {
    firstName: 'Victor',
    fullTimeEmployee: false,
    lastName: 'Ogboko',
    location: 'London',
    contract: false,
  };
  
  // Log the teacher object
  console.log(teacher);
  
  //create a director object
  const director: Directors = {
    firstName: 'Gillian',
    fullTimeEmployee: true,
    lastName: 'Adeh',
    location: 'London',
    numberOfReports: 17,
  }

  //log the director object
  console.log(director);
  