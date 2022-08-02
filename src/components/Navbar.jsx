import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img-div">
        <Link to={""}>
          <img
            className="navbar-img"
            src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
            alt=""
          />
        </Link>
      </div>
      <Link to={""}>
        <button className="nav-button">Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
