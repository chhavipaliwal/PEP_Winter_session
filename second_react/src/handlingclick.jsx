// Create a button in a component that, when clicked, logs "Button clicked!" to the console.
import React from "react";
function Click() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return <button onClick={handleClick}>Click me</button>;
}
export default Click;
