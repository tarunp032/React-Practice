import React, { useState } from "react";

const Task = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const formHandle = (e) => {
    e.preventDefault();
    console.log(data); 
  };

  return (
    <div>
      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}
export default Task;
