import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import headshot from "./assets/headshot.png";
import githublogo from "./assets/github-mark-white.png";
import linkedinlogo from "./assets/linkedin-mark-white.png";
import colorchanger from "./assets/color-changer.png";

const NavBar = ({ color, setColor, navColor, setNavColor }) => {
  const [mobileColorDropdown, setMobileColorDropdown] = useState(false);

  useEffect(() => {
    const navBar = document.getElementById("nav-bar");
    const [body] = document.getElementsByTagName("body");
    const links = document.getElementsByTagName("a");
    body.style.backgroundColor = color;
    navBar.style.backgroundColor = navColor;
    const buttons = document.getElementsByTagName("button");

    const colorMenu = document.getElementById("color-bar");
    colorMenu.style.display = "none";
    setMobileColorDropdown(false);

    for (let button of buttons) {
      button.classList.remove("hover-class");
    }

    if (navColor === "#342B8A") {
      const blue = document.getElementById("blue");
      blue.classList.add("hover-class");
    }

    if (navColor === "#875F9A") {
      const purple = document.getElementById("purple");
      purple.classList.add("hover-class");
    }

    if (navColor === "#006442") {
      const green = document.getElementById("green");
      green.classList.add("hover-class");
    }

    if (navColor === "#8F1D21") {
      const red = document.getElementById("red");
      red.classList.add("hover-class");
    }

    for (let link of links) {
      link.style.color = color;
    }
  }, [color]);

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
      <div
        id="color-changer-div"
        onClick={(e) => {
          e.preventDefault();
          const colorMenu = document.getElementById("color-bar");
          if (!mobileColorDropdown) {
            colorMenu.style.display = "flex";
            setMobileColorDropdown(true);
          } else {
            colorMenu.style.display = "none";
            setMobileColorDropdown(false);
          }
        }}
      >
        <img id="color-mobile-image" src={colorchanger} alt="Color Changer" />
      </div>
      <div id="color-bar">
        <button
          id="blue"
          className="color"
          onClick={(e) => {
            e.preventDefault();
            setNavColor("#342B8A");
            setColor("#535bf2");
          }}
        ></button>
        <button
          id="purple"
          className="color"
          onClick={(e) => {
            e.preventDefault();
            setNavColor("#875F9A");
            setColor("#BE90D4");
          }}
        ></button>
        <button
          id="green"
          className="color"
          onClick={(e) => {
            e.preventDefault();
            setNavColor("#006442");
            setColor("#16A085");
          }}
        ></button>
        <button
          id="red"
          className="color"
          onClick={(e) => {
            e.preventDefault();
            setNavColor("#8F1D21");
            setColor("#D24D57");
          }}
        ></button>
      </div>
      <div>
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
