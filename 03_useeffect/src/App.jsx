import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
//Whenever there is change in state the react render the entire content 
//Use effcet 
//Strict mode run code two times in the case of development 
function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0)

//Case-2
useEffect(() => {
  alert("Count was changed")
  setcolor(color+1)
}, [count]) //Jab Jab count change hoga tab tab case-2 run hoga aur staring me bhi trigger hoga 


//When count is changed it will rerender the whole page 

//Summary:-Firstly navbar will render it will alert -Run on every render than alert-Hey welcome to my page This is first render than color set to 0 theferore alert-Color was changed
//than left rendering willl take place than count was set to 0 alert -Count was changed than again whole rendering will take place including navbar 
//alert-Run on every render than color was changed 

//After clicking count:=
//runon every render->count was changed ->run on every render->color was changed 
  return (
    <>
    {/* <Navbar color={"navy"+" blue"+color}/> */}
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