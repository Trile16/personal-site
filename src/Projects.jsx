import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Projects.css";
import onepgameslogo from "./assets/1p-games-logo.png";
import onepgamespreview from "./assets/1p-games-preview.png";
import plantplazalogo from "./assets/plant-plaza-logo.png";
import plantplazapreview from "./assets/plant-plaza-preview.png";
import everydaywidgetslogo from "./assets/everyday-widgets-logo.png";
import everydaywidgetspreview from "./assets/everyday-widgets-preview.png";

const Projects = ({ color, navColor, tabIndex, setTabIndex }) => {
  const [tabName, setTabName] = useState("Plant Plaza");

  useEffect(() => {
    const projectsContainer = document.getElementById("projects-area");
    const links = document.getElementsByTagName("a");

    projectsContainer.style.backgroundColor = navColor;
    for (let link of links) {
      link.style.color = color;
    }
  }, [navColor, tabIndex]);

  useEffect(() => {
    const tabList = document.getElementsByClassName("project-tabs");

    for (let tab of tabList) {
      tab.classList.remove("project-tabs-hover-class");
    }

    if (tabIndex === 0) {
      const tab = document.getElementById("tab:r1:0");
      tab.classList.add("project-tabs-hover-class");
    }

    if (tabIndex === 1) {
      const tab = document.getElementById("tab:r1:1");
      tab.classList.add("project-tabs-hover-class");
    }

    if (tabIndex === 2) {
      const tab = document.getElementById("tab:r1:2");
      tab.classList.add("project-tabs-hover-class");
    }
  }, [tabIndex]);

  return (
    <div id="projects">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="projects-area">
        <h2 id="projects-title">Projects</h2>
        <div className="App">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList id="tab-list">
              <Tab className="project-tabs">
                <img src={plantplazalogo} alt="Plant Plaza Logo" />
                <h3>Plant Plaza</h3>
              </Tab>
              <Tab className="project-tabs">
                <img src={everydaywidgetslogo} alt="Plant Plaza Logo" />
                <h3>Everyday Widgets</h3>
              </Tab>
              <Tab className="project-tabs">
                <img src={onepgameslogo} alt="1P Games Logo" />
                <h3>1P Games</h3>
              </Tab>
            </TabList>
            <TabPanel>
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
                <a
                  className="project-prev-link"
                  href="https://plantplaza.netlify.app"
                  target="_blank"
                >
                  <img
                    className="project-preview"
                    src={plantplazapreview}
                    alt="Plant Plaza Preview"
                  />
                </a>
                <p>
                  Description: Plant Wishlist Database Driven Web Application with API
                  Documenation
                </p>
                <p>
                  Tech Stack: HTML, CSS, JavaScript, PostgreSQL, Express, Node,
                  React, Vite
                </p>
                <p>
                  Overview: This site was built to show proficiency in fullstack
                  development. I love plants and collect them as a hobby, so I
                  created this site as a passion project. I used Node, Express,
                  and PostgreSQL to build my server and database, and I used
                  React for frontend development. This web application allows
                  users to register, login, and add or remove plants to their
                  wishlist. API documentation is provded for those who would
                  like to build their own application.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card">
                <div className="project-header">
                  <div className="project-title">
                    <img
                      className="project-image"
                      src={everydaywidgetslogo}
                      alt="Plant Plaza Logo"
                    />
                    <h3 className="project-name">Everyday Widgets</h3>
                  </div>
                  <div>
                    <a
                      className="project-links"
                      href="https://everyday-widgets.vercel.app/"
                      target="_blank"
                    >
                      Deploy
                    </a>
                    <a
                      className="project-links"
                      href="https://github.com/Trile16/everyday-widgets"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <a
                  className="project-prev-link"
                  href="https://everyday-widgets.vercel.app/"
                  target="_blank"
                >
                  <img
                    className="project-preview"
                    src={everydaywidgetspreview}
                    alt="Everyday Widgets Preview"
                  />
                </a>
                <p>Description: Widget Web Application</p>
                <p>Tech Stack: HTML, CSS, JavaScript, Next.js, Tailwind</p>
                <p>
                  Overview: We use many simple widgets everyday, so I decided to
                  build my own replications of applications on a single landing
                  page. This site was fun to develop, as it required more effort
                  than expected.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
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
                <a
                  className="project-prev-link"
                  href="https://1p-games.netlify.app"
                  target="_blank"
                >
                  <img
                    className="project-preview"
                    src={onepgamespreview}
                    alt="1P Games Preview"
                  />
                </a>
                <p>Description: Single Player JavaScript Games</p>
                <p>Tech Stack: HTML, CSS, JavaScript, React, Vite</p>
                <p>
                  Overview: As a fan of online flash games growing up, this was
                  a project that I enjoyed developing. Being able to build these
                  games and play them once completed is what makes this process
                  so satisfying.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
