import React, { useRef } from 'react'

function FocusRef() {
    let inputElement = useRef()

    let focusInput = () =>{
        inputElement.current.focus()
    }
  return (
    <>
    <br /><br /><input type="text" ref={inputElement}  /><br /><br />
    <button onClick={()=>focusInput()}>Focus Input</button>
    </>
  )
}

export default FocusRef
