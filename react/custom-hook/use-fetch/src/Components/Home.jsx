import React from 'react'
import useFetch from './useFetch'

function Home() {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    // console.log("Data ==>",[data]);
   
  return (
    <>
      <h2>Home </h2>
      {
       data && data.map((item)=>{
          return <p key={item.id}>{item.title}</p>
        })
      }
      
    </>
  )
}

export default Home
