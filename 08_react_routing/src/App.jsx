import './App.css'
import Navbar from '../components/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../components/Login'
import About from '../components/About'
import Home from '../components/Home'
import User from '../components/User'

function App() {
   const router =createBrowserRouter([{
    path:"/",
    element:<><Navbar/><Home/></>
   },{
    path:"/Login",
    element:<><Navbar/><Login/></>
   },{
    path:"/About",
    element:<><Navbar/><About/></>
   },{
    path:"/User/:username",// Dynamic route
    element:<><Navbar/><User/></>
   },
  ])

  return (
    <>
    
    <RouterProvider router={router}/>  
    </>
  )
}

export default App
