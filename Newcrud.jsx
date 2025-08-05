import React, { useState } from "react";
import "../Assets/crud.css";

function MultiFieldCrud() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState([]);
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    
    const newErrors = validateForm({
      firstName,
      lastName,
      gender,
      language,
      city,
      phone,
      age,
      image,
    });
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const data = {
      firstName,
      lastName,
      gender,
      language,
      city,
      phone,
      age,
      image,
    };

    if (editId === null) {
      setList([...list, data]);
    } else {
      const updatedList = [...list];
      updatedList[editId] = data;
      setList(updatedList);
      setEditId(null);
    }

    resetForm();
  }

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (data.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters long";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (data.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters long";
    }

    if (!data.gender) {
      errors.gender = "Gender is required";
    }

    if (data.language.length === 0) {
      errors.language = "At least one language is required";
    }

    if (!data.city) {
      errors.city = "City is required";
    }

    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!data.age) {
      errors.age = "Age is required";
    } else if (data.age < 1 || data.age > 120) {
      errors.age = "Please enter a valid age (1-120)";
    }

    if (!data.image) {
      errors.image = "Please select an image";
    }

    return errors;
  };

  function languageHandler(e) {
    if (e.target.checked) {
      setLanguage([...language, e.target.value]);
    } else {
      setLanguage(language.filter((lan) => lan !== e.target.value));
    }
  }

  function imageHandler(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setGender("");
    setLanguage([]);
    setCity("");
    setPhone("");
    setAge("");
    setImage(null);
    setErrors({});
  }

  function deleteHandler(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function updateHandler(index) {
    const editData = list[index];
    setFirstName(editData.firstName);
    setLastName(editData.lastName);
    setGender(editData.gender);
    setLanguage(editData.language);
    setCity(editData.city);
    setPhone(editData.phone);
    setAge(editData.age);
    setImage(editData.image);
    setEditId(index);
  }

  function searchHandler(event) {
    setSearchTerm(event.target.value);
  }

  function clearSearch() {
    setSearchTerm("");
  }

  const filteredList = searchTerm
    ? list.filter((el) =>
        el.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : list;

  return (
    <>
      <div className="main">
        <div className="form-cnt">
          <form onSubmit={submitHandler}>
            <div>
              <h2 className="text-center">Input Form</h2>
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="mb-2">Gender</label>
              <div className="d-flex gap-3">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  &nbsp;Male
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  &nbsp;Female
                </div>
              </div>
              {errors.gender && (
                <span className="error-message">{errors.gender}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="mb-2">Language</label>
              <div className="d-flex gap-3">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="English"
                    onChange={languageHandler}
                    checked={language.includes("English")}
                  />
                  &nbsp;English
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="Hindi"
                    onChange={languageHandler}
                    checked={language.includes("Hindi")}
                  />
                  &nbsp;Hindi
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="Gujrati"
                    onChange={languageHandler}
                    checked={language.includes("Gujrati")}
                  />
                  &nbsp;Gujrati
                </div>
              </div>
              {errors.language && (
                <span className="error-message">{errors.language}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <select
                className="form-select"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Tapi">Tapi</option>
              </select>
              {errors.city && (
                <span className="error-message">{errors.city}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Phone No.</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="1"
                max="120"
              />
              {errors.age && <span className="error-message">{errors.age}</span>}
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Select Image</label>
              <input
                type="file"
                className="form-control"
                onChange={imageHandler}
                accept="image/*"
              />
              {errors.image && (
                <span className="error-message">{errors.image}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <input
                type="submit"
                className="form-control submit"
                value={editId === null ? "Submit" : "Update"}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="container mt-4">
        <div className="mb-3 col-4 position-relative">
          <label className="form-label">Search by First Name</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="search"
              onChange={searchHandler}
              value={searchTerm}
              placeholder="Search..."
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary position-absolute end-0 top-50 translate-middle-y"
                type="button"
                onClick={clearSearch}
                style={{ zIndex: 10, right: "10px" }}
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Language</th>
                <th>City</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center">
                    {searchTerm ? "No matching records found" : "No records available"}
                  </td>
                </tr>
              ) : (
                filteredList.map((el, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.gender}</td>
                    <td>{el.language.join(", ")}</td>
                    <td>{el.city}</td>
                    <td>{el.phone}</td>
                    <td>{el.age}</td>
                    <td>
                      {el.image && (
                        <img
                          src={el.image}
                          alt="User"
                          className="img-thumbnail"
                          style={{ width: "80px", height: "80px" }}
                        />
                      )}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => {
                            const originalIndex = list.findIndex(
                              (item) => item.firstName === el.firstName
                            );
                            updateHandler(originalIndex);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            const originalIndex = list.findIndex(
                              (item) => item.firstName === el.firstName
                            );
                            deleteHandler(originalIndex);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MultiFieldCrud;
