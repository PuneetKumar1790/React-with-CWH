import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // count naam ki state hai jisme default value 0 hai jo ki setcount naam ke function se change hogi
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update count </button>
    </>
  )
}

export default App