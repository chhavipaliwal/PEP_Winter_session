//callback functiob is a function that is passed as an argument to another function
// and is executed after some operation has been completed
//here is the code of callback function
import React from "react";

function Apps() {
  // Function that takes a name and a callback
  function greetUser(name, callback) {
    // Set greeting message
    setGreeting(`Hello, ${name}!`);
    // Call the callback function
    callback();
  }

  // Callback function to set farewell message
  function sayGoodbye() {
    setFarewell("Goodbye! Have a great day!");
  }

  // State variables for the messages
  const [greeting, setGreeting] = React.useState("");
  const [farewell, setFarewell] = React.useState("");

  // Trigger the greetUser function when the component mounts
  React.useEffect(() => {
    greetUser("John", sayGoodbye);
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>{farewell}</h2>
    </div>
  );
}

export default Apps;
