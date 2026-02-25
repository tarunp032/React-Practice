import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    age: "",
  });

  const [error, setError] = useState({});

  const formHandle = (e) => {
    e.preventDefault();

    let newError = {};

    const trimmedData = {
      name: data.name.trim(),
      username: data.username.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password.trim(),
      phone: data.phone.trim(),
      age: data.age.trim(),
    };

    //  Full Validation (All fields required)
    // if (!trimmedData.name) newError.name = "Name is required";
    // if (!trimmedData.username) newError.username = "Username is required";
    if (!trimmedData.email) newError.email = "Email is required";
    if (!trimmedData.password) newError.password = "Password is required";
    // if (!trimmedData.phone) newError.phone = "Phone is required";
    // if (!trimmedData.age) newError.age = "Age is required";

    setError(newError);

    if (Object.keys(newError).length !== 0) return;

    //  Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //  Duplicate check (email OR username)
    const exists = users.find(
      (user) =>
        user.email === trimmedData.email ||
        user.username === trimmedData.username
    );

    if (exists) {
      setError({
        email: "Email or Username already exists",
      });
      return;
    }

    // Save new user
    const newUser = trimmedData;

    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Save current logged in user
    localStorage.setItem("user", JSON.stringify(newUser));

    setUser(newUser);  

    alert("Signup successful!");
    navigate("/");

    // Reset form
    setData({
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      age: "",
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={formHandle}>
        <h2 className="auth-title">Create Account ✨</h2>

        <input
          className="auth-input"
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {/* {error.name && <p className="error">{error.name}</p>} */}

        <input
          className="auth-input"
          type="text"
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        {/* {error.username && <p className="error">{error.username}</p>} */}

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {error.email && <p className="error">{error.email}</p>}

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error.password && <p className="error">{error.password}</p>}

        <input
          className="auth-input"
          type="tel"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        {/* {error.phone && <p className="error">{error.phone}</p>} */}

        <input
          className="auth-input"
          type="number"
          placeholder="Age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        {/* {error.age && <p className="error">{error.age}</p>} */}

        <button className="auth-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;