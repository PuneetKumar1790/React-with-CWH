import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Usecase-1
function App() {
  const [count, setCount] = useState(0)
  //let a=0;
  const a = useRef(0)

  useEffect(() => {
    // a=a+1 //a value was agin set to 1 from 0 due to rerendering and not increasing on every click -to solve this problem useref exists 
    //Component is getting rerender but the value of it is not getting changed 
    console.log(`Rerendering and the value of a is ${a.current}`)
    a.current=a.current+1
  })
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
