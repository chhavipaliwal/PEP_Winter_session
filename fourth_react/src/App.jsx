import { useState } from 'react'
import './App.css'
import Travel from './usestate'
import ShoppingCart from './shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Travel /> */}
      <ShoppingCart />
    </>
  );
}

export default App;
