//a scenerio where i want to display the employee display employee no, emlpoyeename, employee salary,
// employee department using callback function
//here is a code of callback function
function display(employee, callback) {
  console.log("Employee no: " + employee.no);
  console.log("Employee name: " + employee.name);
  console.log("Employee salary: " + employee.salary);
  console.log("Employee department: " + employee.department);
  callback();
}
function displayEmployee() {
  console.log("Employee details displayed successfully");
}
const employee = {
  no: 101,
  name: "Sai",
  salary: 20000,
  department: "IT",
};
display(employee, displayEmployee);
