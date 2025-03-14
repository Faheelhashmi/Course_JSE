const employees=[
	{id: 1, name: 'John Doe', age: 30, department: 'IT', salary:50000},
	{id: 2, name: 'Alics Smith', age: 28, department: 'HR', salary:450000},
	{id: 3, name: 'Bob Jhonson', age: 35, department: 'Finance', salary:60000},
	];

	//function to display all employees

console.log(employees[0].name);
const totalEmployees=employees.map(
					(employee,index)=> `<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}- $${employee.salary}</p>`	
					).join('');
	
document.getElementById('employeesDetails').innerHTML=totalEmployees;


function calculateTotalSalaries(){
	const totalSalaries=employees.reduce(
						(acc,employee) => acc +employee.salary,0
						);
	alert(`Total Salaries: $${totalSalaries}`);
} 

function displayHREmployees(){
	const hrEmployees=employees.filter(employee=>employee.department==='HR');

	const hrEmployeesDisplay=hrEmployees.map(
					(employee,index)=> `<p>${employee.id}: ${employee.name}: ${employee.name}-${employee.department}- $${employee.salary}</p>`	
					).join('');
	
document.getElementById('employeesDetails').innerHTML=hrEmployeesDisplay;

}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
      }
}





//<!DOCTYPE html>
//<html>
//<head>
//	<title>Employee Management System</title>
//</head>
//<body>
//	<h1>Employee Management System</h1>
//	<div>
//		<button onclick="displayEmployees()">Display Employees</button>
//		<button onclick="calculateTotalSalaries()">Calculate Total Salaries</button>
//		<button onclick="displayHREmployees()">Display HR Employees</button>
//		<button onclick="findEmployeeById(2)">Find Employee by ID 2</button>
//	</div>
//	<div id="employeesDetails"></div>
//	<script src="./employee_details.js"></script>
//</body>
//</htmlet ru

