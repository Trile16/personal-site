import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import headshot from "./assets/headshot.png";
import githublogo from "./assets/github-mark-white.png";
import linkedinlogo from "./assets/linkedin-mark-white.png";

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
      <div className="link">
        <a href="https://github.com/Trile16" target="_blank">
          <img src={githublogo} className="favicon" />
        </a>
        <a href="https://www.linkedin.com/in/trile16/" target="_blank">
          <img src={linkedinlogo} className="favicon" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
