import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";

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
  // let [editId,setEditId] = useState(null)
  // const formRef = useRef()
  // console.log("list ==>", list);

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
    // setList((prev) => [...prev, data]);
    setList([...list, data]);
    // formRef.current.reset()
    resetForm()
  }



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
    setFirstName('')
    setLasName('')
    setGender('')
    setLanguage([])
    setCity('')
    setPhone('')
    setAge('')
    setImage(null)
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
   let editData = list[index]
  //  console.log("editData ==>",editData);
    // console.log("editData==>",editData.firstName);
    setFirstName(editData.firstName);
    setLasName(editData.lastName);
    setGender(editData.gender)
    setLanguage(editData.language)
    setCity(editData.city)
    setPhone(editData.phone)
    setAge(editData.age)
    setImage(editData.image)
  }

  return (
    <>
      <div className="main">
        <div className="form-cnt">
          <form onSubmit={submitHandler} >
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
                  &nbsp;Female
                </div>
              </div>
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
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Select Image</label>
              <input
                type="file"
                className="form-control"
                onChange={imageHandler}
                accept="image/*"
             
              />
            </div>
            <div className="mb-3 col-12">
              <input type="submit" className="form-control submit" />
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
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
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MultiFieldCrud;
