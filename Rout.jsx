import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import FormData from "./Pages/FormData";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/form.css";
import Signup from "./Pages/Signup";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in when app loads
    const email = localStorage.getItem("email-store");
    const password = localStorage.getItem("pass-store");
    if (email && password) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Signup setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/data" /> : 
            <Login setIsAuthenticated={setIsAuthenticated} />
          } 
        />
        <Route 
          path="/data" 
          element={
            isAuthenticated ? 
            <FormData setIsAuthenticated={setIsAuthenticated} /> : 
            <Navigate to="/login" />
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
