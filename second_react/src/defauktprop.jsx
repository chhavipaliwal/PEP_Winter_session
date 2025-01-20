// •Implement a component Car that accepts a prop brand. If no brand is provided, it should
// default to "Toyota".
import React from "react";

function Car(props) {
  return <h1>{props.brand || "Toyota"}</h1>;
}
export default Car;
