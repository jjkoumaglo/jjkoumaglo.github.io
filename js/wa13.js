//Problem 1: Create JSON for each employee
const employees = [
    {
     firstName: 'Sam',
     department: 'Tech',
     designation: 'Manager',
     salary: 40000,
     raiseEligible: true
    },
    {
     firstName: 'Mary',
     department: 'Finance',
     designation: 'Trainee',
     salary: 18500,
     raiseEligible: true
    },
    {
     firstName: 'Bill',
     department: 'HR',
     designation: 'Executive',
     salary: 21200,
     raiseEligible: false

    }
];

//Problem 2: Create JSON for the company
const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
    };
// Add a new employee to the company
const newEmployee = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
    };
company.employees.push(newEmployee);

// Problem 3: Calculate the total salary for all company employees
let totalSalary = 0;
for (let employee of company.employees) {
totalSalary += employee.salary;
}

console.log('Total Salary:', totalSalary);

// Problem 4: Implement raise functionality
function updateSalary(employee) {
    if (employee.raiseEligible) {
    employee.salary += employee.salary * 0.1;
    employee.raiseEligible = false;
    }
}
for (let employee of company.employees) {
updateSalary(employee);}

// Problem 5: Implement WFH functionality
const wfhEmployees = ['Anna', 'Sam'];
for (let employee of company.employees) {
    if (wfhEmployees.includes(employee.firstName)) {
    employee.wfh = true;
 } else {
       employee.wfh = false;
    }
}

console.log('Updated Company JSON:', company);
