import React from "react";

function Student({ student }) {
  // console.log("student==>",student);

  return (
    <>
    <h1>Props Example</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student, index) => (
            <tr key={index} align="center">
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.city}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Student;
