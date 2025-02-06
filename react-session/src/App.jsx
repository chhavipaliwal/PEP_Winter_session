import { useState } from "react";
import "./App.css";
import ConditionalGreeting from "./conditionalgreeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ConditionalGreeting />
    </>
  );
}

export default App;
