import React from "react";
import "./Projects.css";
import onepgames from "./assets/1p-games-preview.png";

const Projects = () => {
  return (
    <div id="projects">
      <div id="projects-area">
        <h2 id="projects-title">Projects</h2>
        <hr />
        <div className="card">
          <div className="project-header">
            <div className="project-title">
              <img className="project-image" src={onepgames} />
              <h3 className="project-name">1P Games</h3>
            </div>
            <div>
              <a
                className="project-links"
                href="https://1p-games.netlify.app"
                target="_blank"
              >
                Deploy
              </a>
              <a
                className="project-links"
                href="https://github.com/Trile16/game-site"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <p>
            Description: Single player games built with HTML, CSS, and
            JavaScript all hosted on a site created with Vite/React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
