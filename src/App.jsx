import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import NavBar from "./NavBar";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [navColor, setNavColor] = useState("#342B8A");
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const html = document.getElementsByTagName("html");
    html[0].style.backgroundColor = navColor;
  }, [navColor]);

  return (
    <>
      <NavBar
        color={color}
        setColor={setColor}
        navColor={navColor}
        setNavColor={setNavColor}
      />
      <Home
        color={color}
        setColor={setColor}
        navColor={navColor}
        setNavColor={setNavColor}
      />
      <About navColor={navColor} />
      <Projects
        color={color}
        navColor={navColor}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />
      <Contact color={color} navColor={navColor} />
    </>
  );
}

export default App;
