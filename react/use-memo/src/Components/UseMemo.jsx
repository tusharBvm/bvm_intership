import React, { useMemo, useState } from 'react'

function UseMemo() {
    let [count,setCount] = useState(0)
    let calculation = useMemo(() => expansiveCalculation(count),[count])
    // let calculation = expansiveCalculation(count)

    let Increment = () =>{
        setCount(count + 1)    
    }
  return (
    <>
      <h1>Use Memo</h1>

        <p>Count : {count}</p>
      <button onClick={Increment}>Increment</button>
      <h2>Expensive Calculation</h2>
        <h3>{calculation}</h3>
    </>
  )
}

const expansiveCalculation = (num) =>{
    for(let i = 0 ; i < 1000000000 ; i++){
        num = num + 1
    }
    return num;
}

export default UseMemo
