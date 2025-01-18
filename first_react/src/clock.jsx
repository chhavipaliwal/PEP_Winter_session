import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // Cleanup timer
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans text-3xl bg-[#282c34] text-white">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
