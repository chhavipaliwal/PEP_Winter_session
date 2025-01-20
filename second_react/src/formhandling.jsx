// Implement a form with an input field and a submit button. On form submission, prevent the
// default action and log the input value to the console.
import React from "react";
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
