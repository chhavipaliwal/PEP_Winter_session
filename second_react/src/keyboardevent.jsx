// Implement an input field that listens for keypress events and logs the pressed key to the
// console.
import React from "react";
function Keyboard() {
  const handleKeyPress = (e) => {
    console.log(e.key);
  };
  return <input onKeyPresss={handleKeyPress} />;
}
export default Keyboard;
