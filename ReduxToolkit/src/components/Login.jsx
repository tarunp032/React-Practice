import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth?.users || []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      console.log("Logged In User:", user);
      dispatch(loginUser(user));
      alert("Login Successful ");
    } else {
      alert("Invalid Email or Password ");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2 className="auth-title">Login</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
