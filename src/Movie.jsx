import React from 'react'

const Movie = ({obj}) => {
  return (
  
     <div className='main'>
     <h1>{obj.name}</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhBba9RBAslGpu0ZJcdKBL3eSpxdSG7dfeA&s" alt="" /> 
      <p>{obj.discription}</p>
      <p>{obj.Release}</p>
      <p>{obj. Directors}</p>
      <p>{obj.Budget}</p>
     </div>
  
  )
}

export default Movie