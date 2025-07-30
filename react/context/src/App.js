import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Components1 from "./Components/Components1";
import Components2 from "./Components/Components2";
import { useState } from "react";
import { UserContex } from "./Components/UserContext";

function App() {
  const [name, setName] = useState("Tushar");
  
  return (
    <>
      <UserContex.Provider value={name}>
        <Routes>
          <Route path="/" element={<Components1 />} />
          <Route path="/comp2" element={<Components2 />} />
        </Routes>
      </UserContex.Provider>
    </>
  );
}

export default App;
