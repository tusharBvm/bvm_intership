import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [count,setCount] = useState(0)
    const preCountRef = useRef()

    useEffect(()=>{
        preCountRef.current = count
    },[count])
    
  return (
    <>
        <p>Current Count : {count}</p>
        <p>Previous Count : {preCountRef.current}</p>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseRef
