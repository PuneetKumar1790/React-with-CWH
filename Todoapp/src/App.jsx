import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  
  
  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }

  const handleAdd=()=>{
    settodos([...todos,{todo,isCompleted:false}])
    settodo("")
    console.log(todos)
  }
  const handleChange=(e)=>{
    settodo(e.target.value)
  }
  
  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addtodo">
          <h2 className='text-lg font-bold my-5'>Add a Todo</h2>
          <input type="text" onChange={handleChange} value={todo} className='w-1/2 ' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-6 text-sm font-bold'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>Your Todos</h2>
          <div className="todo">
            {todos.map(item=>{
            return <div className="todos flex">
              <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
              <div className="buttons"></div>
              <buttons onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1 text-sm font-bold'>Edit</buttons>
              <buttons onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-1 text-sm font-bold'>Delete</buttons>
            </div>
            })}
          </div>
        </div>
      
    </>
  )
}

export default App