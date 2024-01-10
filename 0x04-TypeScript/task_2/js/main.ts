//create the DirectorInterface interface
interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//create the TeacherInterface interface
interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

//Director class implementing DirectorInterface
class Director implements DirectorInterface{

    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

}

//Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }

}

//createEmployee function
function createEmployee(salary: number | string): Director | Teacher{
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
      } else {
        return new Director();
      }
}

// console.log(createEmployee(200));
// Teacher
// console.log(createEmployee(1000));
// Director
// console.log(createEmployee('$500'));
// Director

//Function to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

//Function to execute work based on the employee type
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }

  // Examples
//executeWork(createEmployee(200));   // Output: Getting to work
//executeWork(createEmployee(1000));  // Output: Getting to director tasks

// String literal type named Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Unknown subject';
  }
}

// Examples
//console.log(teachClass('Math'));    // Output: Teaching Math
//console.log(teachClass('History')); // Output: Teaching History
