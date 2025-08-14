import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser } from "../actions/crudActions";

const Crud = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const initialFormState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    languages: [],
    gender: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  
  const languageOptions = ["English", "Hindi", "Spanish", "French", "German"];


  const cityOptions = ["New York", "London", "Tokyo", "Paris", "Mumbai"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages = [...formData.languages];

    if (checked) {
      updatedLanguages.push(value);
    } else {
      updatedLanguages = updatedLanguages.filter((lang) => lang !== value);
    }

    setFormData({ ...formData, languages: updatedLanguages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.mobile ||
      !formData.gender ||
      !formData.city ||
      formData.languages.length === 0
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (editing) {
      dispatch(updateUser(formData));
    } else {
      dispatch(
        addUser({
          ...formData,
          id: Date.now(), // Generate unique ID
        })
      );
    }

    // Reset form
    setFormData(initialFormState);
    setEditing(false);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditing(true);
  };

  const handleDelete = (id) => {
     {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="crud-container">
      <h1>User Management</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="user-form">
        <h2>{editing ? "Edit User" : "Add User"}</h2>

        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile No *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>City *</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            >
              <option value="">Select City</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Languages *</label>
          <div className="checkbox-group">
            {languageOptions.map((lang) => (
              <label key={lang}>
                <input
                  type="checkbox"
                  value={lang}
                  checked={formData.languages.includes(lang)}
                  onChange={handleCheckboxChange}
                />
                {lang}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Gender *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleInputChange}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editing ? "Update" : "Add"} User
          </button>

          {editing && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setFormData(initialFormState);
                setEditing(false);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Users Table */}
      <div className="users-table">
        <h2>Users List</h2>
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Languages</th>
                <th>Gender</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.languages.join(", ")}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-users">No users found. Please add some users.</p>
        )}
      </div>
    </div>
  );
};

export default Crud;
