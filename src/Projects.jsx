import { useEffect } from "react";
import "./Projects.css";
import onepgameslogo from "./assets/1p-games-logo.png";
import onepgamespreview from "./assets/1p-games-preview.png";
import plantplazalogo from "./assets/plant-plaza-logo.png";
import plantplazapreview from "./assets/plant-plaza-preview.png";

const Projects = ({ color, navColor }) => {
  useEffect(() => {
    const projectsContainer = document.getElementById("projects-area");
    const links = document.getElementsByTagName("a");

    projectsContainer.style.backgroundColor = navColor;
    for (let link of links) {
      link.style.color = color;
    }
  }, [navColor]);

  return (
    <div id="projects">
      <div id="projects-area">
        <h2 id="projects-title">Projects</h2>
        <hr />
        <div className="card">
          <div className="project-header">
            <div className="project-title">
              <img
                className="project-image"
                src={plantplazalogo}
                alt="Plant Plaza Logo"
              />
              <h3 className="project-name">Plant Plaza</h3>
            </div>
            <div>
              <a
                className="project-links"
                href="https://plantplaza.netlify.app"
                target="_blank"
              >
                Deploy
              </a>
              <a
                className="project-links"
                href="https://github.com/Trile16/plant-plaza"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="project-links"
                href="https://plant-plaza-api.fly.dev"
                target="_blank"
              >
                API Docs
              </a>
            </div>
          </div>
          <a href="https://plantplaza.netlify.app" target="_blank">
            <img
              className="project-preview"
              src={plantplazapreview}
              alt="Plant Plaza Preview"
            />
          </a>
          <p>
            Description: Plant Wishlist Website created with React and Vite that
            uses a self built API made with with Node.js, PostgreSQL, Express,
            and static HTML and CSS. (see API Docs).
          </p>
          <p>
            Overview: This site was created to show proficiency in fullstack
            development. I love plants, and I collect them as a hobby, so I
            decided to build out this site as a passion project. After building
            out my server and database, I was able create a fully functional
            frontend wishlist site that is able to allow users to register,
            login, and add a collection of house plants to their wishlist.
          </p>
        </div>
        <hr />
        <div className="card">
          <div className="project-header">
            <div className="project-title">
              <img
                className="project-image"
                src={onepgameslogo}
                alt="1P Games Logo"
              />
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
          <a href="https://1p-games.netlify.app" target="_blank">
            <img
              className="project-preview"
              src={onepgamespreview}
              alt="1P Games Preview"
            />
          </a>
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
      </div>
    </div>
  );
};

export default Projects;
