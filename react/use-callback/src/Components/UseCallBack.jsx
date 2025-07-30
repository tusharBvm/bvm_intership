import React, { useCallback, useState } from 'react'
import Todo from './Todo'

function UseCallBack() {
    const [count,setCount] = useState(0)
    const [todo,setTodo] = useState([])
    const [name,setName] = useState([])
    // console.log("name ==>",name);
    

    const increment = () =>{
        setCount(count + 1)
    }

    const addToDo = useCallback(()=>{
        setTodo([...todo,"New"])
    },[todo])

    // in this code working without dependency.. working like useEffect ..  
    // const addToDo = useCallback(()=>{
    //     setTodo([...todo,"New"])
    // })

    const addName  = useCallback(()=>{
        setName([...name,"Tushar"])
    })

  return (
    <>
      <Todo todo={todo} addToDo={addToDo} />
      <hr />
      
      <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
      </div>
      <hr />

        {name.map((name,index)=>{
            return <p key={index}>{name}</p>
        })}

      <button onClick={addName}>Add Name</button>

    </>
  )
}

export default UseCallBack
