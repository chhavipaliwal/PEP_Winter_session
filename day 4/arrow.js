<<<<<<< HEAD
//arrow operator
//arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target.
{
  const add = (x, y, z) => {
    console.log(x + y + z);
  };
  add(10, 20, 30);
}
{
  const add = (x, y, z = 20) => {
    console.log(x + y + z);
  };
  add(10, 20);
}

//for of loop
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects
// (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
let incomes = [62000, 67000, 75000];
let total = 0;
for (const income of incomes) {
  total += income;
}
console.log(total);
//alert operator
//The alert() method displays an alert box with a specified message and an OK button.
let example = "Sneha";
console.log(`${example} is my name`);
//Shorthand object creation
//The shorthand object creation is a way to create an object with properties from variables.
let firstName = "Sneha";
let lastName = "Bhattacharya";
let person = { firstName, lastName };
console.log(person);
=======
//arrow operator
//arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target.
{
  const add = (x, y, z) => {
    console.log(x + y + z);
  };
  add(10, 20, 30);
}
{
  const add = (x, y, z = 20) => {
    console.log(x + y + z);
  };
  add(10, 20);
}

//for of loop
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects
// (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
let incomes = [62000, 67000, 75000];
let total = 0;
for (const income of incomes) {
  total += income;
}
console.log(total);
//alert operator
//The alert() method displays an alert box with a specified message and an OK button.
let example = "Sneha";
console.log(`${example} is my name`);
//Shorthand object creation
//The shorthand object creation is a way to create an object with properties from variables.
let firstName = "Sneha";
let lastName = "Bhattacharya";
let person = { firstName, lastName };
console.log(person);
>>>>>>> master
