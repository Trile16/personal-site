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
import python from "./assets/python.svg";
import docker from "./assets/docker-icon.svg";
import mongo from "./assets/mongodb.svg";
import webpack from "./assets/webpack.svg";
import rust from "./assets/rust.svg"
import cplusplus from "./assets/cplusplus.svg"
import java from "./assets/java.svg"
import sql from "./assets/sql.svg"
import tokioaxum from "./assets/tokioaxum.png"
import mysql from "./assets/mysql.svg"
import observable from "./assets/observable.png"
import numpy from "./assets/numpy.svg"
import pycharm from "./assets/pycharm.svg"
import vscode from "./assets/vscode.svg"
import git from "./assets/git.svg"
import github from "./assets/github-original.svg"
import aws from "./assets/aws.svg"

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
        <h3 className="about-titles">Languages</h3>
        <div id="tech-container">
          <TechCard imgSrc={javascript} name="JavaScript" />
          <TechCard imgSrc={typescript} name="TypeScript" />
          <TechCard imgSrc={python} name="Python" />
          <TechCard imgSrc={cplusplus} name="C++" />
          <TechCard imgSrc={java} name="Java" />
          <TechCard imgSrc={rust} name="Rust" />
          <TechCard imgSrc={html} name="HTML" />
          <TechCard imgSrc={css} name="CSS" />
          <TechCard imgSrc={sql} name="SQL" />
        </div>
        <h3 className="about-titles">Technologies & Frameworks</h3>
        <div id="tech-container">
          <TechCard imgSrc={react} name="React" />
          <TechCard imgSrc={nextjs} name="Next.js" />
          <TechCard imgSrc={nodejs} name="Node.js" />
          <TechCard imgSrc={express} name="Express" />
          <TechCard imgSrc={tokioaxum} name="Axum/Tokio" />
          <TechCard imgSrc={redux} name="Redux" />
          <TechCard imgSrc={tailwindcss} name="Tailwind CSS" />
          <TechCard imgSrc={postgresql} name="PostgreSQL" />
          <TechCard imgSrc={mysql} name="MySQL" />
          <TechCard imgSrc={mongo} name="MongoDB" />
          <TechCard imgSrc={numpy} name="NumPy" />
          <TechCard imgSrc={observable} name="Observable Plot" />
          <TechCard imgSrc={vitejs} name="Vite" />
          <TechCard imgSrc={webpack} name="Webpack" />
        </div>
        <h3 className="about-titles">Tools & Platforms</h3>
        <div id="tech-container">
          <TechCard imgSrc={pycharm} name="PyCharm" />
          <TechCard imgSrc={vscode} name="Visual Studio Code" />
          <TechCard imgSrc={git} name="Git" />
          <TechCard imgSrc={github} name="GitHub" />
          <TechCard imgSrc={aws} name="Amazon Web Services" />
          <TechCard imgSrc={docker} name="Docker" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
