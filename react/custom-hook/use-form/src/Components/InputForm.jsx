import React from 'react'
import useForm from './useForm'

 function InputForm() {
    const firstNameProps = useForm('Tushar')
    // console.log("f prps ==>",firstNameProps);
    const lastNameProps = useForm('Raval')
    // console.log("l prps ==>",lastNameProps);
 
  return (
    <>
      <h1>Input Form</h1>

      <label>First Name :</label>
      <input {...firstNameProps} /><br /><br />

      <label>Last Name :</label>
      <input {...lastNameProps} />
      <p><b>Good Morning ,{firstNameProps.value} {lastNameProps.value}</b></p>
    </>
  )
}

export default InputForm
