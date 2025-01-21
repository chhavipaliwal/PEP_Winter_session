//useState:is used to manage the state of the component means it is used to manage the data of the component
//useState is a hook that lets you add React state to function components
//useState returns an array with two elements
//first element is the current state value, and the second element is a function that lets you update it
//useState is a new way to use the exact same capabilities that this.state provides in a class
// example of useState:
import React, { useState } from "react";
function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-400 text-white text-center p-4">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Increment
      </button>
    </div>
  );
}
export default Hooks;
