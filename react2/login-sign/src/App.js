import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FormData from "./Pages/FormData";
import NotFound from "./Pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/form.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<FormData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
