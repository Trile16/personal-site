import { useEffect } from "react";
import "./About.css";

const About = ({ navColor }) => {
  useEffect(() => {
    const infoContainer = document.getElementById("info-container");
    infoContainer.style.backgroundColor = navColor;
  }, [navColor]);

  return (
    <div id="about">
      <div id="info-container">
        <h2 className="about-titles">About</h2>
        <hr />
        <p>
          Software Engineer/Fullstack Developer with a passion to build smooth,
          functional websites.
        </p>
        <p>
          One and a half years of experience in utilizing various technologies
          for web development instruction.
        </p>
        <hr />
        <h2 className="about-titles">Tech Stack</h2>
        <p>
          Developing With: JavaScript | React & Redux | Node.js | Express |
          PostgreSQL | Vite
        </p>
        <p>Learning: Next.js</p>
        <p>Focus: Problem Solving | Communication | Teamwork </p>
      </div>
    </div>
  );
};

export default About;
