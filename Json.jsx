import React, { useEffect, useState } from "react";

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

  const [submittedData, setSubmittedData] = useState([]); // New state for storing all submissions
  const [errors, setErrors] = useState({});

  // Load data from localStorage when component mounts
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
  };

  function submitHandler(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      city,
      languages,
      phone,
      age,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !gender ||
      !city ||
      languages.length == 0 ||
      !phone ||
      !age
    ) {
      let newErrors = validateForm({
        firstName,
        lastName,
        email,
        password,
        gender,
        city,
        languages,
        phone,
        age,
      });

      setErrors(newErrors);
      return;
    }

    let newErrors = validateForm({
      firstName,
      lastName,
      email,
      password,
      gender,
      city,
      languages,
      phone,
      age,
    });

    setErrors(newErrors);

    // If no errors, add the form data to the submissions array
    if (Object.keys(newErrors).length === 0) {
      const newSubmittedData = [...submittedData, formData];
      setSubmittedData(newSubmittedData);
      localStorage.setItem("form-store", JSON.stringify(newSubmittedData));
      
      // Reset form
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
    }
  }

  const validateForm = (errorData) => {
    const errors = {};

    if (!errorData.firstName.trim()) {
      errors.firstName = "FirstName is required";
    }

    if (!errorData.lastName.trim()) {
      errors.lastName = "LastName is required";
    }

    if (!errorData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(errorData.email)) {
      errors.email = "Email is invalid";
    }

    if (!errorData.password) {
      errors.password = "Password is required";
    } else if (errorData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!errorData.gender) {
      errors.gender = "Gender is required";
    }

    if (!errorData.city) {
      errors.city = "City is required";
    }

    if (errorData.languages.length == 0) {
      errors.languages = "Language is required";
    }

    if (!errorData.phone) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!errorData.age) {
      errors.age = "Age Is required";
    }

    return errors;
  };

  return (
    <>
      <div className="main">
        <div className="sign-cnt">
          <div>
            <h2 className="text-center mb-3 ">Signup</h2>
          </div>
          <form>
            {/* ... (keep all your existing form JSX the same) ... */}
          </form>
          
          {/* Display submitted data */}
          <div className="mt-5">
            <h3>Submitted Forms:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>Languages</th>
                  <th>Phone</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.city}</td>
                    <td>{data.languages.join(", ")}</td>
                    <td>{data.phone}</td>
                    <td>{data.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
