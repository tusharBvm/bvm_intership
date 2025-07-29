import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Components2() {
    const contextValue = useContext(MyContext)
  return (
     <>
   <h1>Componnets2</h1>
   <h2>{contextValue}</h2>
   </>
  )
}

export default Components2
