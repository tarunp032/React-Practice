import React from "react";
import { useParams, Link } from "react-router-dom";

const StudentDetails = ({ students }) => {
  const { rollNo } = useParams();

  const student = students.find(
    (stu) => stu.rollNo === Number(rollNo)
  );

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{student.name}</h2>

      <p><b>Roll No:</b> {student.rollNo}</p>
      <p><b>Score:</b> {student.score}</p>
      <p><b>Address:</b> {student.address}</p>
      <p><b>Phone:</b> {student.phoneNo}</p>

      <Link
        to="/"
        style={{
          display: "block",
          marginTop: "20px",
          padding: "8px",
          textAlign: "center",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Back
      </Link>
    </div>
  );
};

export default StudentDetails;
