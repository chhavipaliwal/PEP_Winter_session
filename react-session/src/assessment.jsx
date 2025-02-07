// after 10 counter is showing great job youve reached ahigh number //below 0 negative count in red color
//above 0 to 10 keep going! text in green color using tailwind
//make a counter where two buttons increment and decrement  where the counter is displayed the count should be displayed in the center of the screen
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="text-center text-4xl font-bold">Counter : {count}</h1>

      {count > 10 && (
        <h2 className="text-center text-4xl font-bold text-green-500">
          Great job you've reached a high number
        </h2>
      )}
      {count < 0 && (
        <h2 className="text-center text-4xl font-bold text-red-500">
          Negative count
        </h2>
      )}
      {count >= 0 && count <= 10 && (
        <h2 className="text-center text-4xl font-bold text-green-500">
          Keep going!
        </h2>
      )}
      <div classname="">
        <button
          onClick={() => setCount(count + 1)}
          className="border border-black rounded-xl mx-2 p-4"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="border border-black rounded-xl p-4 "
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
