import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Components1 from "./Components/Components1";
import Components2 from "./Components/Components2";
import { useState } from "react";
import { UserContex } from "./Components/UserContext";
import Counter from "./Components/Counter";

function App() {
  const [name, setName] = useState("Tushar");
  const [count,setCount] = useState(0)
  // console.log("Count ===>",count);
  
  return (
    <>
      <UserContex.Provider value={{name,count,setCount}}>
        <Routes>
          <Route path="/" element={<Components1 />} />
          <Route path="/comp2" element={<Components2 />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </UserContex.Provider>
    </>
  );
}

export default App;
