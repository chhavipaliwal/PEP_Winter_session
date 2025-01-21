// Define a function that takes a callback as a parameter
// {
//   function greetUser(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback(); // Call the callback function
//   }

//   // Define the callback function
//   function sayGoodbye() {
//     console.log("Goodbye! Have a great day!");
//   }

//   // Use the greetUser function with sayGoodbye as the callback
//   greetUser("John", sayGoodbye);
// }

function myfun(val) {
  console.log(val(), "Hello, world!");
}
function callback() {
  console.log("Goodbye, world!");
  return "called";
}
myfun(callback);
