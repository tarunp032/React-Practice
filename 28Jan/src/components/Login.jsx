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
    if (!data.email.trim()) newError.email = "Email is required";
    if (!data.password.trim()) newError.password = "Password is required";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      try {
        let users = [];
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
          const parsed = JSON.parse(storedUsers);
          if (Array.isArray(parsed)) {
            users = parsed;
          } else {
            console.error("Invalid users data, resetting:", parsed);
            localStorage.removeItem("users");
          }
        }

        const user = users.find(
          (u) =>
            u.email === data.email.trim() && u.password === data.password.trim()
        );

        if (!user) {
          setError({ email: "No user found or wrong credentials" });
          return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("isLogin", "true");
        alert("Login Successfully");
        window.location.href = "/product";
      } catch (err) {
        console.error("Parse error:", err);
        setError({ email: "Data error, clear storage and retry" });
        localStorage.removeItem("users");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={formHandle}>
        <h2>Welcome Back 👋</h2>

        <input
          className="input"
          type="email"
          placeholder="Email address"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {error.email && <span className="error">{error.email}</span>}

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error.password && <span className="error">{error.password}</span>}

        <button className="primary-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
