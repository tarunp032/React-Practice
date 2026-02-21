import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();


  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        MarketHub
      </div>

      <nav className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      
    </header>
  );
};

export default Header;
