import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Harry")
  const [form, setform] = useState({email:"",phone:""})
  const handleClick=()=>{
    alert("Button Clicked")
  }

  const handleMouseOver=()=>{
    alert("Hey I am a mouse over")
  }
  const handleChange =(e)=>{
    // setname(e.target.value)
    setform({...form,[e.target.name]:e.target.value})
    //latest value not shown in console due to asyncronous nature 
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a pink div 
      </div> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input type="text" name="email" value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
