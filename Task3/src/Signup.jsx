import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const formHandle = (e) => {
    e.preventDefault();

    localStorage.setItem("isSignup", "true");
    navigate("/product");
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={formHandle}>
        <h2>Create Account</h2>

        <input
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br/>

        <input
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <br/>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br/>

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br/>

        <input
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        <br/>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
