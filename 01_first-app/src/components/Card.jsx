import React from 'react'
import "./card.css"
//prop is acting as object 
//use {{}} to use inline css
//height and width can be set through img tag
//overflow hidden is used in container 
const Card =(props)=>{
  console.log(props)
  return (
    <div className='card' style={{overflow:'hidden'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz96di6wdAF1YCRiFnyV8j1f0jXWVk6GJLjg&s" alt="" width={320} height={233}
      style={{border:"10px solid olive"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card