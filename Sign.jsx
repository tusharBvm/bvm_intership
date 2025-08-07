import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    languages: [],
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle languages checkbox
      if (name === "languages") {
        setFormData(prev => {
          if (checked) {
            return {
              ...prev,
              languages: [...prev.languages, value]
            };
          } else {
            return {
              ...prev,
              languages: prev.languages.filter(lang => lang !== value)
            };
          }
        });
      }
    } else {
      // Handle all other inputs
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    
    // Store form data in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { ...formData, id: Date.now() }; // Add unique ID
    const updatedUsers = [...existingUsers, newUser];
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    console.log("Form data saved to localStorage:", newUser);
    
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      languages: [],
      phone: "",
      age: "",
    });
    
    alert("Registration successful!");
  }

  return (
    <>
      <div className="main">
        <div className="sign-cnt">
          <div>
            <h2 className="text-center mb-3">Signup</h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>
            </div>
            <div className="d-flex">
              <div className="mb-3 col-6">
                <label className="form-label">Gender</label>
                <br />
                <input
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  name="gender"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                />
                &nbsp; Male &nbsp;
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  name="gender"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                />
                &nbsp; Female
              </div>

              <div className="mb-3 cnt-set col-6">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  required
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label">Language</label> <br />
                <div className="d-flex gap-5">
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="English"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("English")}
                    />
                    &nbsp; English
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Hindi"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Hindi")}
                    />
                    &nbsp; Hindi
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Gujrati"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Gujrati")}
                    />
                    &nbsp; Gujrati
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">Phone No.</label>
                <input
                  type="tel"
                  className="form-control"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                />
              </div>

              <div className="mb-3 col-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  max={100}
                  name="age"
                  onChange={handleChange}
                  value={formData.age}
                  required
                />
              </div>
            </div>
            <div className="mb-3 mt-3">
              <button
                type="submit"
                className="form-control submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
