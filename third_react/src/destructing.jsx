//destructing in react is used to extract values from objects and arrays and assign them to variables
// this is a simple example of destructing in react
// this is a functional component
import React from "react";
function Destructing() {
  const person = {
    name: "John",
    age: 25,
    city: "New York",
  };
  const { name, age, city } = person;
  return (
    <div className="bg-gray-400 text-white text-center p-4">
      <p>{name}</p>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}
export default Destructing;
