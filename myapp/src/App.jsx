import React from "react";
import  Home  from "./components/Home.jsx";
import  About  from "./components/About.jsx";
import Contact  from "./components/Contact.jsx";
function App() {
  const arr = [
    {
      age:19,
      password:"123@abc",
      phone:1234567898
    },
    {
      age:21,
      password:"1234@abc",
      phone:4567891234
    },
    {
      age:23,
      password:"12345@abc",
      phone:7894561234
    }
  ]
  const arry = [
    {
      name :"Tarun",
      salary:45000
    },
    {
      name :"Rahul",
      salary:35000
    },
    {
      name :"Shyam",
      salary:55000
    }
  ]
  return (
    <div>
      <Home data={arr} />
      <About data={arry} />
      <Contact />
    </div>
  );
}

export default App;
