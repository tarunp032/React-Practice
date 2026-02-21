import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../slice/authSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert("Name, Email and Password are required!");
      return;
    }

    console.log("Signup Data:", formData); 
    
    dispatch(signupUser(formData));
    alert("Signup Successful ");

    setFormData({
      name: "",
      username: "",
      email: "",
      phone: "",
      age: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Signup</h2>

        <input
          className="auth-input"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="auth-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
