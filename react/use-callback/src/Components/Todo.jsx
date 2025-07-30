import React from 'react'

function Todo({todo,addToDo}){
    // console.log("todo==>",todo);
    
  return (
    <>
      <h1>To Do.. page </h1>
        {todo?.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
      <button onClick={addToDo}>Add ToDo</button>

    </>
  )
}

export default Todo
