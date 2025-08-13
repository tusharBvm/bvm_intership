import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import FormData from "./Pages/FormData";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/form.css";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email-store");
    const password = localStorage.getItem("pass-store");
    if (email && password) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* Protected route */}
        <Route
          path="/data"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FormData setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
