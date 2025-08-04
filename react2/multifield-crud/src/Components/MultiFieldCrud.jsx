import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";
import "../Assets/crud.css";

function MultiFieldCrud() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasName] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState([]);
  // console.log("  language==> ",language);
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);
  let [editId, setEditId] = useState(null);
  // const formRef = useRef()
  // console.log("list ==>", list);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  

  function submitHandler(e) {
    e.preventDefault();
    // console.log("check function");
    // console.log(" submit first Name ==> ", firstName);
    // console.log(" submit Last name ==> ", lastName);
    // console.log(" submit gender==> ", gender);
    // console.log(" submit language==> ", language);
    // console.log(" submit city==> ", city);
    // console.log(" submit phone==> ", phone);
    // console.log(" submit Age==> ", age);
    // console.log(" submit image==> ", image);

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
    // console.log("new Error==>",newErrors);
    setErrors(newErrors);

    let data = {
      firstName,
      lastName,
      gender,
      language,
      city,
      phone,
      age,
      image,
    };

    // console.log("data ==>",data);

    if (editId == null) {
      // console.log("Add ");
      if (
        firstName !== "" &&
        lastName !== "" &&
        gender !== "" &&
        language.length !== 0 &&
        city !== "" &&
        phone !== "" &&
        age !== "" &&
        image !== null
      ) {
        setList([...list, data]);
      }
    } else {
      // console.log("Update");
      let copyData = [...list];
      // console.log("copyData ==>",copyData);
      copyData[editId] = data;
      setList(copyData);
      setEditId(null);
    }

    // setList((prev) => [...prev, data]);
    // formRef.current.reset()
    resetForm();
  }

  const validateForm = (errorData) => {
    // console.log("errorData==>", errorData);

    const errors = {};

    if (!errorData.firstName.trim()) {
      errors.firstName = "firstName is required";
    } else if (errorData.firstName.length < 4) {
      errors.firstName = "firstName must be at least 4 characters long";
    }

    if (!errorData.lastName.trim()) {
      errors.lastName = "lastName is required";
    } else if (errorData.lastName.length < 4) {
      errors.lastName = "lastName must be at least 4 characters long";
    }

    if (!errorData.gender) {
      errors.gender = "gender is required";
    }

    if (errorData.language.length == 0) {
      errors.language = "Language is required";
    }

    if (!errorData.city) {
      errors.city = "City is required";
    }

    if (!errorData.phone) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!errorData.age) {
      errors.age = "Please enter Age ";
    }

    if (!errorData.image) {
      errors.image = "Please Select Image ";
    }

    return errors;
  };

  // function firstNameHandler(e) {
  //     let firstname = e.target.value
  //     console.log(firstname);
  //     setFirstName(firstName)
  // }

  function languageHandler(e) {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    if (e.target.checked) {
      // let check = [...language,e.target.value]
      // console.log("check ==>",check);
      setLanguage([...language, e.target.value]);
    } else {
      // let filter = language.filter((lan)=>lan !== e.target.value)
      // // console.log("filter ==>",filter);
      setLanguage(language.filter((lan) => lan !== e.target.value));
    }
  }

  function imageHandler(e) {
    let imageTarget = e.target.files;
    // console.log("image target ==>",imageTarget);
    if (imageTarget && imageTarget[0]) {
      // let check = (URL.createObjectURL(imageTarget[0]))
      // console.log("check ==>",check);
      setImage(URL.createObjectURL(imageTarget[0]));
    }
  }

  function resetForm() {
    // console.log("demo");
    setFirstName("");
    setLasName("");
    setGender("");
    setLanguage([]);
    setCity("");
    setPhone("");
    setAge("");
    setImage(null);
  }

  // function ShowTable() {
  //    {
  //     return list.map((el,index) => {
  //       // console.log("el ==>", el);
  //       return (
  //         <tr key={index}>
  //           <td>{index + 1}</td>
  //           <td>{el.firstName}</td>
  //           <td>{el.lastName}</td>
  //           <td>{el.gender}</td>
  //           <td>{el.language}</td>
  //           <td>{el.city}</td>
  //           <td>{el.phone}</td>
  //           <td>{el.age}</td>
  //         </tr>
  //       );
  //     });
  //   }
  // }

  function deleteHandler(index) {
    // console.log("index",index);
    let copyData = [...list];
    // console.log("copyData ===>",copyData);
    copyData.splice(index, 1);
    setList(copyData);
  }

  function updateHandler(index) {
    // console.log(index);
    let editData = list[index];
    //  console.log("editData ==>",editData);
    // console.log("editData==>",editData.firstName);
    setFirstName(editData.firstName);
    setLasName(editData.lastName);
    setGender(editData.gender);
    setLanguage(editData.language);
    setCity(editData.city);
    setPhone(editData.phone);
    setAge(editData.age);
    setImage(editData.image);
    setEditId(index);
  }

  // function searchHandler(e) {
  //     let searchData = e.target.value.toLowerCase()
  //     // console.log("searchData==>",searchData);

  //     let filterData = list.filter((el)=>{
  //       return (
  //         el.firstName.toLowerCase().includes(searchData)
  //       )
  //     })
  //     console.log("filterData ===>",filterData);
  // }
  // ======================================================================================= ///

  //   function SearchForm({ data }) {
  //   const [searchTerm, setSearchTerm] = useState('');

  //   const handleSearchChange = (event) => {
  //     setSearchTerm(event.target.value);
  //   };
  //   const filteredItems = data.filter(item =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         placeholder="Search..."
  //         value={searchTerm}
  //         onChange={handleSearchChange}
  //       />
  //       <ul>
  //         {filteredItems.map(item => (
  //           <li key={item.id}>{item.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // lodu filter data to thy pan double output htay jai/
  // }

  function searchHandler(event) {
    // console.log("target value ==>",event.target.value);
    setSearchTerm(event.target.value);
  }
  const filterData = list.filter((el) =>
    el.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('filterData ==>',filterData);

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
                onChange={(e) => setLasName(e.target.value)}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
            <div className="mb-3 col-12 ">
              <label className="mb-2 ">Gender</label> <br />
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
                  &nbsp;Female <br />
                </div>
              </div>
              {errors.gender && (
                <span className="error-message">{errors.gender}</span>
              )}
            </div>
            <div className="mb-3 col-12">
              <label className="mb-2">Language</label> <br />
              <div className="d-flex gap-3">
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="English"
                    // onChange={(e)=>setLanguage(e.target.value)}
                    onChange={languageHandler}
                    checked={language.includes("English")}
                  />
                  &nbsp; English
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="Hindi"
                    // onChange={(e)=>setLanguage(e.target.value)}
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
                    // onChange={(e)=>setLanguage(e.target.value)}
                    onChange={languageHandler}
                    checked={language.includes("Gujrati")}
                  />
                  &nbsp; Gujrati
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
                <option>Select City</option>
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
                minLength={10}
                maxLength={10}
                name="phone"
                value={phone}
                pattern="[0-9]{10}"
                onChange={(e) => setPhone(e.target.value)}
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
                min={1}
                max={100}
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              {errors.age && (
                <span className="error-message">{errors.age}</span>
              )}
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
              <input type="submit" className="form-control submit" />
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />

      <div className="mb-3 col-4">
        <label className="form-label">Search Here</label>
        <input
          type="text"
          className="form-control"
          name="search"
          // onChange={(e) => setFirstName(e.target.value)}
          onChange={searchHandler}
          value={searchTerm}
        />
      </div>

      {/* {filterData.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.gender}</td>
                <td>{el.language}</td>
                <td>{el.city}</td>
                <td>{el.phone}</td>
                <td>{el.age}</td>
                <td>
                  <img
                    src={el.image}
                    alt="Not Upload"
                    style={{ width: "150px", height: "150px", padding: "10px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateHandler(index)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))} */}

      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">gender</th>
              <th scope="col">language</th>
              <th scope="col">city</th>
              <th scope="col">phone</th>
              <th scope="col">age</th>
              <th scope="col">image</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {/* {
            list.map(d => {
              return (
                <tr>
                  <td>{d.firstName}</td>
                </tr>
              )
            })
            
            } */}

            {/* <ShowTable/> */}

            {list.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.gender}</td>
                <td>{el.language}</td>
                <td>{el.city}</td>
                <td>{el.phone}</td>
                <td>{el.age}</td>
                <td>
                  <img
                    src={el.image}
                    alt="Not Upload"
                    style={{ width: "150px", height: "150px", padding: "10px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateHandler(index)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}

              {filterData.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.gender}</td>
                <td>{el.language}</td>
                <td>{el.city}</td>
                <td>{el.phone}</td>
                <td>{el.age}</td>
                <td>
                  <img
                    src={el.image}
                    alt="Not Upload"
                    style={{ width: "150px", height: "150px", padding: "10px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateHandler(index)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>
  );
}

export default MultiFieldCrud;
