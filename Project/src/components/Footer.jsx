import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h2>MarketHub</h2>
          <p>
            A modern React-based product management platform built using real
            APIs for products, users, reviews, and recipes.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#">
              <Github />
            </a>
            <a href="#">
              <Linkedin />
            </a>
            <a href="#">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} MarketHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
