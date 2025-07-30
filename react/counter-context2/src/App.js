import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useState } from 'react';
import { CountContext } from './Components/CountContext';
import Counter2 from './Components/Counter2';

function App() {
  let [count,setCount] = useState(0)

  let increment = () => {
    setCount(count + 1)
  }

  let decrement = () =>{
    setCount(count - 1)
  }

  return (
    <>
    <CountContext.Provider value={{count,increment,decrement}}>
      <Counter/>
      <Counter2/>
    </CountContext.Provider>
    </>
  );
}

export default App;
