import React, { useState } from "react";

function State() {
let [name,setName] = useState('Tushar')
  let [count, setCount] = useState(0);

  function changeName() {
    // console.log("change");
    setName('chirag')
    // console.log(name); 
  }

  function increment() {
    // console.log("demo");
    setCount(count + 1)
    // console.log(count);
  }

  function decrement() {
    // console.log("check");
    if (count <= 0) {
        setCount(0)
    }else{
        setCount(count - 1)
    }
    // console.log(count);
    
  }
  return (
    <>
      <h1>UseState</h1>

        <h3>{name}</h3>
      <button onClick={()=>changeName()}>change</button>

      <div
        style={{
          display: "flex",
          margin: "10px",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => increment()}>+</button>
        </div>
        <h4>{count}</h4>
        <div>
          <button onClick={()=>decrement()}>-</button>
        </div>
      </div>
    </>
  );
}

export default State;
