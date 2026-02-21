import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";

function App() {
  const students = [
    {
      rollNo: 101,
      name: "Amit Sharma",
      score: 78,
      address: "Shastri Nagar, Jaipur, Rajasthan",
      phoneNo: "9876543210",
    },
    {
      rollNo: 102,
      name: "Neha Verma",
      score: 65,
      address: "Sector 15, Noida, Uttar Pradesh",
      phoneNo: "9123456789",
    },
    {
      rollNo: 103,
      name: "Rohit Singh",
      score: 42,
      address: "Kankarbagh, Patna, Bihar",
      phoneNo: "9988776655",
    },
    {
      rollNo: 104,
      name: "Priya Gupta",
      score: 88,
      address: "Civil Lines, Prayagraj, Uttar Pradesh",
      phoneNo: "9090909090",
    },
     {
    "rollNo": 105,
    "name": "Kunal Mehta",
    "score": 55,
    "address": "Navrangpura, Ahmedabad, Gujarat",
    "phoneNo": "9812345678"
  },
  {
    "rollNo": 106,
    "name": "Sneha Patil",
    "score": 91,
    "address": "Shivaji Nagar, Pune, Maharashtra",
    "phoneNo": "9765432109"
  },
  {
    "rollNo": 107,
    "name": "Arjun Reddy",
    "score": 34,
    "address": "Madhapur, Hyderabad, Telangana",
    "phoneNo": "9345678123"
  },
  {
    "rollNo": 108,
    "name": "Pooja Nair",
    "score": 72,
    "address": "Kakkanad, Kochi, Kerala",
    "phoneNo": "9654321876"
  },
  {
    "rollNo": 109,
    "name": "Rahul Das",
    "score": 60,
    "address": "Salt Lake, Kolkata, West Bengal",
    "phoneNo": "9432109876"
  },
  {
    "rollNo": 110,
    "name": "Anjali Mishra",
    "score": 49,
    "address": "Alambagh, Lucknow, Uttar Pradesh",
    "phoneNo": "9898989898"
  }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #566366, #6ba3e2)",
        padding: "30px",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList students={students} />} />
          <Route
            path="/student/:rollNo"
            element={<StudentDetails students={students} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
