// Create a component called Counter that accepts a function prop named onIncrement. When a
// button is clicked, it should call this function to increase the count.
import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Click me</button>
      <h1>the count is {props.count};</h1>
    </div>
  );
}
Counter.propTypes = {
  onIncrement: PropTypes.func,
  count: PropTypes.number,
};
export default Counter;
