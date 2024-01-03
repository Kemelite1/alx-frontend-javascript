export default function createIteratorObject(report) {
    const iterator = {
      departments: Object.keys(report.allEmployees),
      currentDepartmentIndex: 0,
      currentEmployeeIndex: 0,
      next() {
        if (this.currentDepartmentIndex >= this.departments.length) {
          return { done: true };
        }
  
        const department = this.departments[this.currentDepartmentIndex];
        const employees = report.allEmployees[department];
  
        if (this.currentEmployeeIndex >= employees.length) {
          this.currentDepartmentIndex++;
          this.currentEmployeeIndex = 0;
          return this.next();
        }
  
        const employee = employees[this.currentEmployeeIndex];
        this.currentEmployeeIndex++;
  
        return { value: employee, done: false };
      },
    };
  
    iterator[Symbol.iterator] = function () {
      return this;
    };
  
    return iterator;
  }
  