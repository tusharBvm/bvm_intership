import React, { useState } from "react";

function MultiFieldCrud() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasName] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [dataList, setDataList] = useState([]);

  // Validation state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: "",
    city: "",
    phone: "",
    age: "",
    image: "",
  });

  // Handle form submission
  function submitHandler(e) {
    e.preventDefault();
    
    // Form Validation
    let formErrors = { ...errors };
    let valid = true;

    if (!firstName) {
      formErrors.firstName = "First Name is required";
      valid = false;
    } else {
      formErrors.firstName = "";
    }

    if (!lastName) {
      formErrors.lastName = "Last Name is required";
      valid = false;
    } else {
      formErrors.lastName = "";
    }

    if (!gender) {
      formErrors.gender = "Gender is required";
      valid = false;
    } else {
      formErrors.gender = "";
    }

    if (!languages.length) {
      formErrors.languages = "At least one language must be selected";
      valid = false;
    } else {
      formErrors.languages = "";
    }

    if (!city) {
      formErrors.city = "City is required";
      valid = false;
    } else {
      formErrors.city = "";
    }

    if (!phone || phone.length !== 10) {
      formErrors.phone = "Phone number must be 10 digits";
      valid = false;
    } else {
      formErrors.phone = "";
    }

    if (!age || age < 1 || age > 100) {
      formErrors.age = "Age must be between 1 and 100";
      valid = false;
    } else {
      formErrors.age = "";
    }

    if (!image) {
      formErrors.image = "Image is required";
      valid = false;
    } else {
      formErrors.image = "";
    }

    setErrors(formErrors);

    if (!valid) return;

    const formData = {
      firstName,
      lastName,
      gender,
      languages,
      city,
      phone,
      age,
      image,
    };

    setDataList([...dataList, formData]);
    resetForm();
  }

  // Reset form after submission
  function resetForm() {
    setFirstName("");
    setLasName("");
    setGender("");
    setLanguages([]);
    setCity("");
    setPhone("");
    setAge("");
    setImage(null);
  }

  // Handle language checkbox change
  function handleLanguageChange(e) {
    const value = e.target.value;
    setLanguages(prev =>
      prev.includes(value) ? prev.filter(lang => lang !== value) : [...prev, value]
    );
  }

  // Handle image upload
  function handleImageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  // Handle deleting data
  function handleDelete(index) {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);
  }

  // Handle editing data
  function handleEdit(index) {
    const dataToEdit = dataList[index];
    setFirstName(dataToEdit.firstName);
    setLasName(dataToEdit.lastName);
    setGender(dataToEdit.gender);
    setLanguages(dataToEdit.languages);
    setCity(dataToEdit.city);
    setPhone(dataToEdit.phone);
    setAge(dataToEdit.age);
    setImage(dataToEdit.image);

    // Remove edited data from the list
    handleDelete(index);
  }

  return (
    <>
      <div className="main">
        <div className="form-cnt">
          <form onSubmit={submitHandler}>
            <div>
              <h2 className="text-center">Input Form</h2>
            </div>

            {/* First Name */}
            <div className="mb-3 col-12">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div className="mb-3 col-12">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLasName(e.target.value)}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            {/* Gender */}
            <div className="mb-3 col-12">
              <label className="mb-2">Gender</label> <br />
              <div className="d-flex gap-3">
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "Male"}
                  />
                  &nbsp;Male
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === "Female"}
                  />
                  &nbsp;Female
                </div>
              </div>
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>

            {/* Language */}
            <div className="mb-3 col-12">
              <label className="mb-2">Language</label> <br />
              <div className="d-flex gap-3">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="English"
                    onChange={handleLanguageChange}
                    checked={languages.includes("English")}
                  />
                  &nbsp;English
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Hindi"
                    onChange={handleLanguageChange}
                    checked={languages.includes("Hindi")}
                  />
                  &nbsp;Hindi
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Gujrati"
                    onChange={handleLanguageChange}
                    checked={languages.includes("Gujrati")}
                  />
                  &nbsp;Gujrati
                </div>
              </div>
              {errors.languages && <p className="error">{errors.languages}</p>}
            </div>

            {/* City */}
            <div className="mb-3 col-12">
              <label className="form-label">Select City</label>
              <select
                className="form-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Tapi">Tapi</option>
              </select>
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            {/* Phone Number */}
            <div className="mb-3 col-12">
              <label className="form-label">Phone No.</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={10}
                maxLength={10}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            {/* Age */}
            <div className="mb-3 col-12">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={1}
                max={100}
              />
              {errors.age && <p className="error">{errors.age}</p>}
            </div>

            {/* Image Upload */}
            <div className="mb-3 col-12">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && <img src={image} alt="preview" style={{ width: "100px", height: "100px" }} />}
              {errors.image && <p className="error">{errors.image}</p>}
            </div>

            {/* Submit Button */}
            <div className="mb-3 col-12">
              <input type="submit" className="form-control submit" />
            </div>
          </form>
        </div>
      </div>

      {/* Display Data */}
      <div>
        <h3>Submitted Data:</h3>
        <ul>
          {dataList.map((data, index) => (
            <li key={index}>
              <div>
                <strong>Name:</strong> {data.firstName} {data.lastName} <br />
                <strong>Gender:</strong> {data.gender} <br />
                <strong>Languages:</strong> {data.languages.join(", ")} <br />
                <strong>City:</strong> {data.city} <br />
                <strong>Phone:</strong> {data.phone} <br />
                <strong>Age:</strong> {data.age} <br />
                {data.image && <img src={data.image} alt="preview" style={{ width: "50px", height: "50px" }} />}
              </div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MultiFieldCrud;
