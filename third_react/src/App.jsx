import { useState } from "react";
import "./App.css";
import Destructing from "./destructing";
import Apps from "./callback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Destructing /> */}
      <Apps />
    </>
  );
}
export default App;
