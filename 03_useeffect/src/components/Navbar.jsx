import React,{useEffect} from 'react'




function Navbar({color}) {
    //Case-0
useEffect(() => {
    alert("Run on every render")
  },) //without [] it will run on every render 
  
  
  //Case -1
  useEffect(() => {
    alert("Hey welcome to my page This is first render ")
  }, [])//use efect theek se kaam kare uske liye empty array dena ahai matlab jab kuch bhi change nahi ho raha ho 
  // Usecase-in the starting for once use 
  
  //Case-2
//   useEffect(() => {
//     alert("Count was changed")
//     setcolor(color+1)
//   }, [count]) //Jab Jab count change hoga tab tab case-2 run hoga aur staring me bhi trigger hoga 
  
  
    useEffect(() => {
        alert("Color was changed ")
      }, [color])
    
//example of cleanup function
useEffect(() => {
  alert("Hey welcome to my page .this is the first render of app.jsx")

  return () => {
    alert("component was unmounted means navbar commented or deleted than it will run ")
  }
}, [])
      
  return (
    <div>I am navbar of {color} hehe....</div>
  )
}

export default Navbar