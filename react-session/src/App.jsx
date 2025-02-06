import { useState } from "react";
import "./App.css";
import ConditionalGreeting from "./conditionalgreeting";
import SignUpForm from "./signupform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ConditionalGreeting /> */}
      <SignUpForm />
    </>
  );
}

export default App;
