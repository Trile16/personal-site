import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [navColor, setNavColor] = useState("#342B8A");

  return (
    <>
      <NavBar
        color={color}
        setColor={setColor}
        navColor={navColor}
        setNavColor={setNavColor}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              color={color}
              setColor={setColor}
              navColor={navColor}
              setNavColor={setNavColor}
            />
          }
        />
        <Route path="/about" element={<About navColor={navColor} />} />
        <Route
          path="/projects"
          element={<Projects color={color} navColor={navColor} />}
        />
      </Routes>
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
        </ul>
      </div>
    </>
  );
}

export default App;
