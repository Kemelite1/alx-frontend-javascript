// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
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
  