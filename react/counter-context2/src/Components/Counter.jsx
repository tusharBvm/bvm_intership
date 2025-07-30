import React, { useContext } from 'react'
import { CountContext } from './CountContext'

function Counter() {
    let {count,increment,decrement} = useContext(CountContext)
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter
