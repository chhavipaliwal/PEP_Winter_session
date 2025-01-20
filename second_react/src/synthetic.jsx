// •Explain how React's synthetic event system works compared to native events, and write an
// example where you handle an input change event using synthetic eventsand log the input value
// to the console.
import React from "react";
function Synthetic() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return <input onChange={handleChange} />;
}
export default Synthetic;
