import React from "react";
import "./Projects.css";
import onepgames from "./assets/1p-games-preview.png";
import plantplaza from "./assets/plant-plaza-preview.png";

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
                GitHub
              </a>
            </div>
          </div>
          <p>
            Description: Single player games built with HTML, CSS, and
            JavaScript all hosted on a site created with Vite/React
          </p>
          <p>
            Overview: This site was created to show proficiency in Vanilla
            JavaScript. As a fan of online flash games growing up, this was a
            project that I enjoyed developing. Being able to create these games
            and play them after is what makes the process so satisfying.
          </p>
        </div>
        <hr />
        <div className="card">
          <div className="project-header">
            <div className="project-title">
              <img className="project-image" src={plantplaza} />
              <h3 className="project-name">Plant Plaza API</h3>
            </div>
            <div>
              <a
                className="project-links"
                href="https://plant-plaza-api.fly.dev"
                target="_blank"
              >
                Deploy
              </a>
              <a
                className="project-links"
                href="https://github.com/Trile16/plant-plaza-backend"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
          <p>
            Description: API for use to build a plant wishlist website created
            with Node.js, PostgreSQL, Express, and static HTML and CSS.
          </p>
          <p>
            Overview: This site was created to show proficiency in backend
            development. I love plants, so I built this project to create a
            database for a list of house plants that I can store on a wishlist.
            This documentation can be viewed on the deploy and can used to build
            out a frontend application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
