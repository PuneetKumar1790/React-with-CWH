import React from 'react'
import { useParams } from 'react-router-dom'  //useParams() to extract the dynamic username from the URL.

const User = () => {
    const params =useParams() 
  return (
    <div>I am {params.username}</div>
  )
}

export default User