

import React, { useContext } from 'react'
import { MyContext } from './MyContext';

function Components1() {
      const contextValue = useContext(MyContext);
  return (
   <>
        <h1>{contextValue}</h1>
   </>
  )
}

export default Components1

