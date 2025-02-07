import { useState } from "react";
import "./App.css";
import Counter from "./assessment";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  const [count, setCount] = useState(0);

  // return <>{/* <Counter /> */}</>;
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
