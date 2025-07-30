import React, { useReducer } from 'react'

function reducer(state,action) {
    console.log("state ==>",state);
    // console.log("action ==>",action);
    
    if (action.type === 'incremented_age') {
        return{
            age : state.age + 1
        }
    }
    throw Error('Unknown action.');
    
}

function UseReducer() {
    const [state,dispatch] = useReducer(reducer,{age:23})
    

  return (
    <>
     <button onClick={() =>{dispatch({type:'incremented_age'})}}>Increment Age</button>
     <p>Hello! You are {state.age}.</p> 
    </>
  )
}

export default UseReducer
