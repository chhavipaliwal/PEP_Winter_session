// Create a list of items where clicking on any item logs its text content to the console. Use event
// delegation for handling clicks efficiently
import React from "react";
function Delegation() {
  const handleClick = (e) => {
    console.log(e.target.textContent);
  };
  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}
export default Delegation;
