import React, { useContext } from 'react'
import { UserContex } from './UserContext'

function Components1() {
    let NameContext = useContext(UserContex)
  return (
    <>
        <h1>Components 1</h1> 
        <h3>{NameContext}</h3>
    </>
  )
}

export default Components1
