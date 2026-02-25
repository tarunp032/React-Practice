import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
    <nav>
      <Link to="/">Home</Link> | {" "}
      {isLoggedIn && <Link to="/products">Products</Link>} | {" "}
      {!isLoggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  )
}

export default Header
