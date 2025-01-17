<<<<<<< HEAD
//object literals
//object literakls is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
{
  let name = "Sneha";
  let age = 21;
  let student = { name: name, age: age };
  console.log(student);
}
function addressMaker(city, state) {
  const newAddress = { city, state };
  console.log(newAddress);
}
addressMaker("Austin", "Texas");
//object literals enhancement
//Object literals are extended to support setting values to variables, making the code more concise.
{
  let name = "Sneha";
  let age = 21;
  let student = { name, age };
  console.log(student);
}
//Object destructuring
//Object destructuring is a way to extract properties from an object and bind them to variables.
{
  let student = { name: "Sneha", age: 21 };
  let { name, age } = student;
  console.log(name, age);
}
=======
//object literals
//object literakls is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
{
  let name = "Sneha";
  let age = 21;
  let student = { name: name, age: age };
  console.log(student);
}
function addressMaker(city, state) {
  const newAddress = { city, state };
  console.log(newAddress);
}
addressMaker("Austin", "Texas");
//object literals enhancement
//Object literals are extended to support setting values to variables, making the code more concise.
{
  let name = "Sneha";
  let age = 21;
  let student = { name, age };
  console.log(student);
}
{
  var names = "Sneha";
  var age = 21;
  var color = "blue";
  var msg = function () {
    console.log(this.name + "Hello");
  };
  var student = { names, age, color, msg };
  console.log(student);
}
//Object destructuring
//Object destructuring is a way to extract properties from an object and bind them to variables.
{
  let student = { name: "Sneha", age: 21 };
  let { name, age } = student;
  console.log(name, age);
}
>>>>>>> master
