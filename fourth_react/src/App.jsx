import { useState } from 'react'
import './App.css'
import Travel from './usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Travel />
    </>
  )
}

export default App;
