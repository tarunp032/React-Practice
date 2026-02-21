import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        justifyContent: "center",
      }}
    >
      {students.map((student) => (
        <StudentCard key={student.rollNo} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
