import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import headshot from "./assets/headshot.png";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <NavLink to="/" className="link">
        <img id="headshot" src={headshot} />
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/projects" className="link">
        Projects
      </NavLink>
    </div>
  );
};

export default NavBar;
