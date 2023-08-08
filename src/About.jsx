import { useEffect } from "react";
import "./About.css";
import TechCard from "./TechCard";
import html from "./assets/html-5.svg";
import css from "./assets/css-3.svg";
import javascript from "./assets/javascript.svg";
import typescript from "./assets/typescript.svg";
import react from "./assets/react.svg";
import nextjs from "./assets/nextjs.svg";
import postgresql from "./assets/postgresql.svg";
import express from "./assets/express.svg";
import nodejs from "./assets/nodejs.svg";
import vitejs from "./assets/vitejs.svg";
import redux from "./assets/redux.svg";
import tailwindcss from "./assets/tailwindcss.svg";

const About = ({ navColor }) => {
  useEffect(() => {
    const infoContainer = document.getElementById("info-container");
    infoContainer.style.backgroundColor = navColor;

    const about = document.getElementById("about");
    about.style.backgroundColor = navColor;
  }, [navColor]);

  return (
    <div id="about">
      <div id="info-container">
        <h2 className="about-titles">About</h2>
        <hr />
        <p>
          Hey, my name is Tri, and I'm a Software Engineer / Full Stack
          Developer with a passion to build smooth, functional applications.
        </p>
        <p>
          I help people become web developers, and I enjoy developing to help
          organizations build and scale.
        </p>
        <p>Focus: Problem Solving | Communication | Teamwork </p>
        <hr />
        <h2 className="about-titles">Tech Stack</h2>
        <hr />
        <div id="tech-container">
          <TechCard imgSrc={html} name="HTML" />
          <TechCard imgSrc={css} name="CSS" />
          <TechCard imgSrc={javascript} name="JavaScript" />
          <TechCard imgSrc={typescript} name="TypeScript" />
          <TechCard imgSrc={react} name="React" />
          <TechCard imgSrc={nextjs} name="Next.js" />
          <TechCard imgSrc={postgresql} name="PostgreSQL" />
          <TechCard imgSrc={express} name="Express" />
          <TechCard imgSrc={nodejs} name="Node.js" />
          <TechCard imgSrc={vitejs} name="Vite" />
          <TechCard imgSrc={redux} name="Redux" />
          <TechCard imgSrc={tailwindcss} name="Tailwind CSS" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
