import { useState } from "react";
import "./App.css";
import Destructing from "./destructing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Destructing />
    </>
  );
}

export default App;
