import React, {useEffect, useState } from 'react'

function Effect() {
    let [count,setCount] = useState(0)
    let [value,setValue] = useState(0)
    let [timer,setTimer] = useState(1)
    

    // without dependency every render working 
   useEffect(()=>{
    setTimeout(() => {
        setCount(count + 1)
    }, 1000);
   })


   // with empty dependency one time working //
   useEffect(()=>{
    setTimeout(() => {
        setValue(value + 1)
    }, 1000);
   },[])


   // with dependency working on when updated value change in state  
   useEffect(()=>{
    setTimeout(() => {
        setTimer(timer * 2)
    }, 1000);
   },[timer])
    


  return (
  <>
  <h3>useEffect Example</h3>

  <h1>Count :-{count}</h1>

  <h1>Value :-{value}</h1>

  <h1>Timer :-{timer}</h1>

    
    
  </>
  )
}

export default Effect
