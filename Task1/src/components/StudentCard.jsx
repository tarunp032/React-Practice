import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "8px", color: "#333" }}>
        {student.name}
      </h3>

      <p style={{ marginBottom: "15px", color: "#666" }}>
        Roll No: {student.rollNo}
      </p>

      <Link
        to={`/student/${student.rollNo}`}
        style={{
          display: "inline-block",
          padding: "8px 16px",
          borderRadius: "6px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Details
      </Link>
    </div>
  );
};

export default StudentCard;
