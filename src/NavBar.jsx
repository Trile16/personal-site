import { useState, useEffect } from "react";
import "./NavBar.css";
import headshot from "./assets/headshot.png";
import githublogo from "./assets/github-mark-white.png";
import linkedinlogo from "./assets/linkedin-mark-white.png";
import hamburger from "./assets/hamburger.png";

const NavBar = ({ color, setColor, navColor, setNavColor }) => {
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleMobileMenu = (e) => {
    e.preventDefault();

    const navBar = document.getElementById("nav-bar");
    console.log(navBar.style.display);

    if (!navBar.style.display) {
      setMobileDropdown(true);
      navBar.style.display = "flex";
    } else {
      setMobileDropdown(false);
      navBar.style.display = "";
    }
  };

  useEffect(() => {
    const navBar = document.getElementById("nav-bar");
    const [body] = document.getElementsByTagName("body");
    const links = document.getElementsByTagName("a");
    const buttons = document.getElementsByTagName("button");
    const metaMoblieColor = document.getElementById("meta-color");

    metaMoblieColor.content = navColor;
    body.style.backgroundColor = color;
    navBar.style.backgroundColor = navColor;

    for (let button of buttons) {
      button.classList.remove("hover-class");
    }

    if (navColor === "#0066CC") {
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
    <>
      <img
        id="hamburger"
        src={hamburger}
        alt="hamburger icon"
        onClick={handleMobileMenu}
      />
      <div id="nav-bar">
        <div id="nav-bar-content">
          <div id="nav-me">
            <img id="nav-headshot" src={headshot} />
            <h2 id="nav-name">Tri Le</h2>
          </div>
          <div id="color-bar">
            <button
              id="blue"
              className="color"
              onClick={() => {
                setNavColor("#0066CC");
                setColor("#6699FF");
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            ></button>
            <button
              id="purple"
              className="color"
              onClick={() => {
                setNavColor("#875F9A");
                setColor("#BE90D4");
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            ></button>
            <button
              id="green"
              className="color"
              onClick={() => {
                setNavColor("#006442");
                setColor("#16A085");
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            ></button>
            <button
              id="red"
              className="color"
              onClick={() => {
                setNavColor("#8F1D21");
                setColor("#D24D57");
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            ></button>
          </div>
          <div id="links">
            <a
              className="link"
              href="#"
              onClick={() => {
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            >
              Home
            </a>
            <a
              className="link"
              href="#about"
              onClick={() => {
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            >
              About
            </a>
            <a
              className="link"
              href="#projects"
              onClick={() => {
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            >
              Projects
            </a>
            <a
              className="link"
              href="#contact"
              onClick={() => {
                const navBar = document.getElementById("nav-bar");
                navBar.style.display = "";
              }}
            >
              Contact
            </a>
          </div>
          <div id="socials">
            <a
              className="socials-link"
              href="https://github.com/Trile16"
              target="_blank"
            >
              <img src={githublogo} className="favicon" />
            </a>
            <a
              className="socials-link"
              href="https://www.linkedin.com/in/trile16/"
              target="_blank"
            >
              <img src={linkedinlogo} className="favicon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
