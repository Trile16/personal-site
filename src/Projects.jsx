import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Projects.css";
import onepgameslogo from "./assets/1p-games-logo.png";
import onepgamespreview from "./assets/1p-games-preview.png";
import plantplazalogo from "./assets/plant-plaza-logo.png";
import plantplazapreview from "./assets/plant-plaza-preview.png";
import everydaywidgetslogo from "./assets/everyday-widgets-logo.png";
import everydaywidgetspreview from "./assets/everyday-widgets-preview.png";
import whatshouldicooklogo from "./assets/what-should-i-cook-logo.png";
import whatshouldicookpreview from "./assets/what-should-i-cook-preview.png";

const Projects = ({ color, navColor, tabIndex, setTabIndex }) => {
  useEffect(() => {
    const projectsContainer = document.getElementById("projects-area");
    const links = document.getElementsByTagName("a");

    projectsContainer.style.backgroundColor = navColor;
    for (let link of links) {
      link.style.color = color;
    }
  }, [navColor]);

  useEffect(() => {
    const tabList = document.getElementsByClassName("project-tabs");

    const links = document.getElementsByTagName("a");
    for (let link of links) {
      link.style.color = color;
    }

    for (let tab of tabList) {
      tab.classList.remove("project-tabs-hover-class");
    }

    const selectedTab = document.getElementsByClassName(
      "react-tabs__tab--selected"
    );

    selectedTab[0].classList.add("project-tabs-hover-class");
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
            onSelect={(index) => {
              console.log(index);
              setTabIndex(index);
            }}
          >
            <TabList id="tab-list">
              <Tab className="project-tabs">
                <img src={onepgameslogo} alt="1P Games Logo" />
                <h3>1P Games</h3>
              </Tab>
              <Tab className="project-tabs">
                <img src={whatshouldicooklogo} alt="What Should I Cook?" />
                <h3>What Should I Cook?</h3>
              </Tab>
              <Tab className="project-tabs">
                <img src={plantplazalogo} alt="Plant Plaza Logo" />
                <h3>Plant Plaza</h3>
              </Tab>
              <Tab className="project-tabs">
                <img src={everydaywidgetslogo} alt="Everyday Widgets Logo" />
                <h3>Everyday Widgets</h3>
              </Tab>
            </TabList>
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
                <p>
                  <u>Description</u>: Single Player JavaScript Games
                </p>
                <p>
                  <u>Tech Stack</u>: HTML, CSS, JavaScript, React, Vite
                </p>
                <p>
                  <u>Overview</u>: As a fan of online flash games growing up,
                  this was a project that I enjoyed developing. Being able to
                  build these games and play them once completed is what makes
                  this process so satisfying.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card">
                <div className="project-header">
                  <div className="project-title">
                    <img
                      className="project-image"
                      src={whatshouldicooklogo}
                      alt="What Should I Cook Logo"
                    />
                    <h3 className="project-name">What Should I Cook?</h3>
                  </div>
                  <div>
                    <a
                      className="project-links"
                      href="https://what-should-i-cook.onrender.com/"
                      target="_blank"
                    >
                      Deploy
                    </a>
                    <a
                      className="project-links"
                      href="https://github.com/Trile16/recipe-finder"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <a
                  className="project-prev-link"
                  href="https://what-should-i-cook.onrender.com/"
                  target="_blank"
                >
                  <img
                    className="project-preview"
                    src={whatshouldicookpreview}
                    alt="What Should I Cook Preview"
                  />
                </a>
                <p>
                  <u>Description</u>: Recipe Finder by Ingredients
                </p>
                <p>
                  <u>Tech Stack</u>: HTML, CSS, JavaScript, React, Node,
                  Express, Webpack
                </p>
                <p>
                  <u>Overview</u>: I have a hard time figuring out what meals to
                  make with the food that is in my kitchen, so I built this
                  application so that I can find recipes based on what I have in
                  my fridge and pantry.
                </p>
              </div>
            </TabPanel>
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
                  <u>Description</u>: Plant Wishlist Database Driven Web
                  Application with API Documenation
                </p>
                <p>
                  <u>Tech Stack</u>: HTML, CSS, JavaScript, PostgreSQL, Express,
                  Node, React, Vite
                </p>
                <p>
                  <u>Overview</u>: This site was built to show proficiency in
                  fullstack development. I love plants and collect them as a
                  hobby, so I created this site as a passion project. I used
                  Node, Express, and PostgreSQL to build my server and database,
                  and I used React for frontend development. This web
                  application allows users to register, login, and add or remove
                  plants to their wishlist. API documentation is provded for
                  those who would like to build their own application.
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
                      alt="Everyday Widgets Logo"
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
                <p>
                  <u>Description</u>: Widget Web Application
                </p>
                <p>
                  <u>Tech Stack</u>: HTML, CSS, JavaScript, Next.js, Tailwind
                </p>
                <p>
                  <u>Overview</u>: This site was created to develop replications
                  of applications that we use on a daily basis. This project was
                  fun to develop and gave me an appreciation for those who
                  developed these technologies.
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
