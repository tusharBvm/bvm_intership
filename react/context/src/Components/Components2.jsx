import React, { useContext } from 'react'
import { UserContex } from './UserContext'

function Components2() {
    let NameContext = useContext(UserContex)
  return (
    <>
        <h1>Components 2</h1> 
        <h2>{NameContext}</h2>
    </>
  )
}

export default Components2
