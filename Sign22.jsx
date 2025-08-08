import React, { useEffect, useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    languages: [],
    phone: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("form-store");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "languages") {
        setFormData((prev) => {
          if (checked) {
            return {
              ...prev,
              languages: [...prev.languages, value],
            };
          } else {
            return {
              ...prev,
              languages: prev.languages.filter((lang) => lang !== value),
            };
          }
        });
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Validate field on change if form has been submitted
    if (isSubmitted) {
      const newErrors = validateForm(formData);
      setErrors(newErrors);
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmitted(true);
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newSubmittedData = [...submittedData, formData];
      setSubmittedData(newSubmittedData);
      localStorage.setItem("form-store", JSON.stringify(newSubmittedData));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        languages: [],
        phone: "",
        age: "",
      });
      
      setIsSubmitted(false); // Reset submission state
    }
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(data.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(data.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[^A-Za-z0-9]/.test(data.password)) {
      errors.password = "Password must contain at least one special character";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!data.gender) {
      errors.gender = "Gender is required";
    }

    if (!data.city) {
      errors.city = "City is required";
    }

    if (data.languages.length === 0) {
      errors.languages = "At least one language is required";
    }

    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!data.age) {
      errors.age = "Age is required";
    } else if (data.age < 1 || data.age > 100) {
      errors.age = "Age must be between 1 and 100";
    }

    return errors;
  };

  return (
    <>
      <div className="main">
        <div className="sign-cnt">
          <div>
            <h2 className="text-center mb-3">Signup</h2>
          </div>
          <form>
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
            </div>
            
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
            </div>
            
            <div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                )}
              </div>
            </div>
            
            <div className="d-flex">
              <div className="mb-3 col-6">
                <label className="form-label">Gender</label>
                <br />
                <div className={`form-check form-check-inline ${errors.gender ? "is-invalid" : ""}`}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value="Male"
                    name="gender"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    value="Female"
                    name="gender"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                  />
                  <label className="form-check-label">Female</label>
                </div>
                {errors.gender && (
                  <div className="invalid-feedback d-block">{errors.gender}</div>
                )}
              </div>

              <div className="mb-3 cnt-set col-6">
                <label className="form-label">Select City</label>
                <select
                  className={`form-select ${errors.city ? "is-invalid" : ""}`}
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
                </select>
                {errors.city && (
                  <div className="invalid-feedback">{errors.city}</div>
                )}
              </div>
            </div>
            
            <div>
              <div className="mb-3">
                <label className="form-label">Language</label>
                <div className={`d-flex gap-5 ${errors.languages ? "is-invalid" : ""}`}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="English"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("English")}
                    />
                    <label className="form-check-label">English</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Hindi"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Hindi")}
                    />
                    <label className="form-check-label">Hindi</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Gujrati"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Gujrati")}
                    />
                    <label className="form-check-label">Gujrati</label>
                  </div>
                </div>
                {errors.languages && (
                  <div className="invalid-feedback d-block">{errors.languages}</div>
                )}
              </div>
            </div>
            
            <div className="d-flex gap-3">
              <div className="mb-3">
                <label className="form-label">Phone No.</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              <div className="mb-3 col-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className={`form-control ${errors.age ? "is-invalid" : ""}`}
                  min={1}
                  max={100}
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                {errors.age && (
                  <div className="invalid-feedback">{errors.age}</div>
                )}
              </div>
            </div>
            
            <div className="mb-3 mt-3">
              <button
                type="submit"
                className="form-control submit btn btn-primary"
                onClick={submitHandler}
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
