import logo from './logo.svg';
import './App.css';
import Student from './Pages/Student';
import State from './Pages/State';
import Effect from './Pages/Effect';
import { Route, Routes } from 'react-router-dom';
import Components1 from './Components/Components1';
import Components2 from './Components/Components2';
import Components3 from './Components/Components3';
import Components4 from './Components/Components4';
import { useState } from 'react';
import { MyContext} from './Components/MyContext';


function App() {

  const [value,setValue]  = useState('Hello, World!')

  let studentData = [
    {name:'tushar',age:'23',city:'surat',grade:'A'},
    {name:'dipak',age:'20',city:'tapi',grade:'B'},
    {name:'chirag',age:'22',city:'bharuch',grade:'C'},
    {name:'jay',age:'19',city:'baroda',grade:'A'},
    {name:'raj',age:'21',city:'rajkot',grade:'E'},
  ]
  return (
   <>
   <MyContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Student  student={studentData}/>}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/effect" element={  <Effect/>}/>
        <Route path="/comp1" element={  <Components1/>}/>
        <Route path="/comp2" element={  <Components2/>}/>
        <Route path="/comp3" element={  <Components3/>}/>
        <Route path="/comp4" element={  <Components4/>}/>
      </Routes>
      </MyContext.Provider>

   </>
  );
}

export default App;
