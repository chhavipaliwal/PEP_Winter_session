//i want to make a label which is diplays the value of input field
//and yes there should be a two buttons one is incement by 2 and otheris decrement by 2 using useState
import React, { useState } from "react";
function Usestate() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-400 text-white text-center p-4">
      <h1>{count}</h1>
      <button
        className="m-2"
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 2);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default Usestate;
