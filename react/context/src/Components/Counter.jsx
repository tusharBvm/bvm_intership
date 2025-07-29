import React, { useContext } from "react";
import { UserContex } from "./UserContext";

function Counter() {

    let CountContext = useContext(UserContex)
    // console.log("counter",CountContext);
    let CountStore = CountContext
    // console.log("countstore==>",CountStore);
    
    
    function increment() {
        // console.log("incre");
       CountStore.setCount = CountContext.count++
    //    console.log(CountContext.count);
       
    }
    
  return (
    <>
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
        <div>
          <button onClick={()=>increment()}>+</button>
        </div>
        <div>
          <h3>Value:- {CountContext.count}</h3>
        </div>
        <div>
          <button>-</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
