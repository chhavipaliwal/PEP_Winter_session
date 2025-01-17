// Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
// }
// ask(
//  "Do you agree?",
//  function() { alert("You agreed."); },
//  function() { alert("You canceled the execution."); }
// );
/*const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
*/

// Identify the output of the following code
// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(materials.map((material) => material.length))
// Output: [8, 6, 7, 9]
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));

// Write an arrow function called square that takes a number as an argument and returns its
// square.
const square = (num) => num * num;
console.log(square(5));

// Write an arrow function called add that takes two numbers as arguments and returns their
// sum.
const add = (x, y) => x + y;
console.log(add(10, 20));

// Given an array of numbers, use an arrow function to create a new array that contains the
// squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].
const numbers = [1, 2, 3];
const squares = numbers.map((num) => num * num);
console.log(squares);

// Use an arrow function to reverse a given string. For example, if the input is "hello", the output
// should be "olleh".
const str = "hello";
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

// Create a chainable object using arrow functions that allows you to set a value and then add
// or multiply it by a number. For example:
// const result = chainable(5).add(3).multiply(2); // result should be 16
const chainable = (num) => {
  return {
    add: (x) => chainable(num + x),
    multiply: (x) => chainable(num * x),
    value: () => num,
  };
};
const result = chainable(5).add(3).multiply(2).value();
console.log(result);

// Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
// }
// ask(
//  "Do you agree?",
//  function() { alert("You agreed."); },
//  function() { alert("You canceled the execution."); }
// );
/*const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
*/

// Identify the output of the following code
// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
// console.log(materials.map((material) => material.length))
// Output: [8, 6, 7, 9]
{
  const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
  console.log(materials.map((material) => material.length));
}
// Write an arrow function called square that takes a number as an argument and returns its
// square.
{
  const square = (num) => num * num;
  console.log(square(5));

  // Write an arrow function called add that takes two numbers as arguments and returns their
  // sum.
  const add = (x, y) => x + y;
  console.log(add(10, 20));
}
// Given an array of numbers, use an arrow function to create a new array that contains the
// squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].
{
  const numbers = [1, 2, 3];
  const squares = numbers.map((num) => num * num);
  console.log(squares);

  // Use an arrow function to reverse a given string. For example, if the input is "hello", the output
  // should be "olleh".
  const str = "fallsss";
  const reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);

  // Create a chainable object using arrow functions that allows you to set a value and then add
  // or multiply it by a number. For example:
  // const result = chainable(5).add(3).multiply(2); // result should be 16
  const chainable = (num) => {
    return {
      add: (x) => chainable(num + x),
      multiply: (x) => chainable(num * x),
      value: () => num,
    };
  };
  const result = chainable(5).add(3).multiply(5).value();
  console.log(result);
}
