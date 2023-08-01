import { useEffect } from "react";
import "./About.css";

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
          Hey, my name is Tri, and I'm a Software Engineer/Fullstack Developer
          with a passion to build smooth, functional applications.
        </p>
        <p>
          I help people become web developers, and I enjoy developing to help organizations build and scale.
        </p>
        <p>Focus: Problem Solving | Communication | Teamwork </p>
        <hr />
        <h2 className="about-titles">Tech Stack</h2>
        <hr />
        <p>
          Developing With: JavaScript | TypeScript | React | Redux | Next.js | Node.js |
          Express | PostgreSQL | Vite | Tailwind CSS
        </p>
        <hr />
      </div>
    </div>
  );
};

export default About;
