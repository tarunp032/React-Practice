import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const formHandle = (e) => {
    e.preventDefault();

    let newError = {};
    if (!data.email) newError.email = "Email is required";
    if (!data.password) newError.password = "Password is required";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      const result = JSON.parse(localStorage.getItem("user"));
      console.log("Complete data", result);

      if (!result) {
        alert("No user found, please signup first");
        return;
      }

      if (data.email !== result.email && data.password !== result.password) {
        alert("Wrong Email and Wrong Password");
        return;
      } else if (data.email !== result.email) {
        alert("Wrong Email");
        return;
      } else if (data.password !== result.password) {
        alert("Wrong Password");
        return;
      } else {
        alert("Login Successfully");
        console.log("Login Data:", data);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={formHandle}>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to your account</p>

        <div className="input-group">
          <input
            className="input"
            type="text"
            placeholder="Email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {error.email && <span className="error">{error.email}</span>}
        </div>

        <div className="input-group">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {error.password && <span className="error">{error.password}</span>}
        </div>

        <button className="primary-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
