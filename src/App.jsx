import React from 'react'
import Movie from './Movie'

const App = () => {

  const obj = {
   name :"  Movie : Sanam Teri Kasam",
    discription:`Discription    : When Saraswati's father throws her out of the house, Inder stands with her against all odds and this brings them close to each other. However, destiny has its own plans to separate them."`,
    Release:"  Release Date    :  5 February 2016 India",
    Directors:" Directors     : Radhika Rao, Vinay Sapru",
    Budget: " Budget   :    25 Crores INR"
  }
  
  return (
    <>
    <Movie  obj={obj}/>
    </>
  )
}

export default App