import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Hey kritika ",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another Todo",
      desc: "I am a good todo too "
    },
    {
      title: "Hey i am a grocery todo",
      desc: "I am a good todo but i am a grocery todo"
    },
  ])

  //map must take a unique key 

  //chota mota component:-

  // const Todo=({todo})=>{return(<>
  // <div className="todo">{todo.title}</div>
  // <div className="todo">{todo.desc}</div>
  // </>)
  // }
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
      {/* {showbtn?<button>I will be shown when secnd button is clicked </button>:"Thenga "}    use it if you want to use else part as well  */}
      {showbtn && <button>I will be shown when secnd button is clicked </button>}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        {todos.map(todo => {
          return (
            <div key={todo.title}>
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          );
        })}

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