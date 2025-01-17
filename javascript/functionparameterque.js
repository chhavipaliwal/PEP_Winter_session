// Write a function calculateDiscount that takes two
// parameters: price and discount (with a default value of 10). The function should
// return the final price after applying the discount.

function calculateDiscount(price, discount = 10) {
  return price - (price * discount) / 100;
}
console.log(calculateDiscount(100)); // 90

// Create a function mergeArrays that takes two arrays as parameters and returns a new
// array that combines both arrays using the spread operator.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]

// Write a function logArguments that takes any number of arguments and logs them to
// the console. Use rest parameters to collect the arguments
function logArguments(...args) {
  console.log(args);
}
logArguments("a", "b", "c", "d"); // ["a", "b", "c", "d"]
logArguments(true, false); // [true, false]

// Define a function sum that takes three numbers as parameters and returns their sum. Use
// the spread operator to call this function with an array of numbers.

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

// Write a function createUserProfile that takes three
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown").
// Return an object with these properties.
function createUserProfile(username, age = 25, country = "Unknown") {
  return {
    username,
    age,
    country,
  };
}
console.log(createUserProfile("john_doe"));

// Create a function createMessage that takes a default message and an indefinite
// number of names. The function should return an array of personalized messages for
// each name, using the default message.
function createMessage(message, ...names) {
  return names.map((name) => `${message} ${name}`);
}
console.log(createMessage("Hello", "Alice", "Bob", "Charlie"));
