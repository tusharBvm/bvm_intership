import React, { useContext } from 'react'
import { CountContext } from './CountContext'

function Counter() {
    const {count,increment,decrement} = useContext(CountContext)
    
  return (
    <>
    <div>
        <p>value :- {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    </>
  )
}

export default Counter
