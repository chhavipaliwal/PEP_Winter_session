import { useState } from "react";
import "./App.css";
import Sports from "./props";
import Greeting from "./basicprop";
import UserProfile from "./multipleprop";
import Car from "./defauktprop";
import Product from "./proptype";
import Counter from "./counter";
import Apps from "./nestedprop";
import StatusMessage from "./conditionalprop";
import Click from "./handlingclick";
import Form from "./formhandling";
import EventBinding from "./eventbinding";
import Synthetic from "./synthetic";
import Delegation from "./delegation";
import Mouse from "./mouse";
import Keyboard from "./keyboardevent";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("loading");

  return (
    <>
      {/* <Sports /> */}
      {/* <Greeting name="John" /> */}
      {/* <UserProfile firstName="John" lastName="Doe" age={25} /> */}
      {/* <Car brand="" /> */}
      {/* <Product name="John" price={25} isAvailable={true} /> */}
      {/* <Counter count={count} onIncrement={() => setCount(count + 1)} /> */}
      {/* <Apps /> */}
      {/* <StatusMessage status={status} /> */}
      {/* <Click /> */}
      {/* <Form /> */}
      {/* <EventBinding /> */}
      {/* <Synthetic /> */}
      {/* <Delegation /> */}
      {/* <Mouse
        render={(x, y) => {
          return (
            <div>
              <h1>Mouse Position</h1>
              <p>X: {x}</p>
              <p>Y: {y}</p>
            </div>
          );
        }}
      /> */}
      <Keyboard />
    </>
  );
}

export default App;
