import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ""}));
    }
    if (loginError) {
      setLoginError("");
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    setLoginError("");

    const { email, password } = loginData;

    // Form validation
    let newErrors = validateForm(loginData);
    setErrors(newErrors);

    // If there are validation errors, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Check if user exists in localStorage
    const storedData = localStorage.getItem("form-store");
    if (!storedData) {
      setLoginError("No registered users found");
      return;
    }

    try {
      const userData = JSON.parse(storedData);
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        setLoginError("Invalid email or password");
        return;
      }

      // Login successful - reset form
      setLoginData({
        email: "",
        password: "",
      });
      
      // Here you would typically redirect or set auth state
      console.log("Login successful", user);
      
    } catch (error) {
      console.error("Error parsing user data:", error);
      setLoginError("Error processing login. Please try again.");
    }
  }

  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  return (
    <div className="main">
      <div className="login-cnt">
        <div>
          <h2 className="text-center mb-3">Login</h2>
        </div>
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="mb-3 col-12">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={handlerChange}
              value={loginData.email}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3 mt-5 col-12">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              onChange={handlerChange}
              value={loginData.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <div className="mb-3 mt-3">
            <button
              type="submit"
              className="form-control log-submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
