import React, { useState } from "react";

function MultiFieldCrud() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLasName] = useState("")
    const [gender,setGender] = useState("")

    function submitHandler(e) {
        e.preventDefault()
        // console.log("check function") 
        console.log(" submit first Name ==> ",firstName);
        console.log(" submit Last name ==> ",lastName);
        console.log(" submit gender==> ",gender);
        
    }

    // function firstNameHandler(e) {
    //     let firstname = e.target.value
    //     console.log(firstname);
    //     setFirstName(firstName)
    // }
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
              <input type="text" className="form-control" name="firstname"  onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" name="lastname"  onChange={(e)=>setLasName(e.target.value)} />
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
                    onChange={(e)=>setGender(e.target.value)}
                  />
                  &nbsp;Male
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e)=>setGender(e.target.value)}
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
                  />
                  &nbsp; English
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="Hindi"
                  />
                  &nbsp;Hindi
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="language"
                    value="Gujrati"
                  />
                  &nbsp; Gujrati
                </div>
              </div>
            </div>
            <div className="mb-3 col-12">
              <select className="form-select">
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
              />
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" min={1} max={100} />
            </div>
            <div className="mb-3 col-12">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" min={1} max={100} />
            </div>
            <div className="mb-3 col-12">
              <input type="submit" className="form-control submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MultiFieldCrud;
