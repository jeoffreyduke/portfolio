import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Story from "./components/Story";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active story" : "link story"
          }
          to="/"
          end
        >
          <span>story</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "link")}
          to="/work"
        >
          <span>work</span>
        </NavLink>
      </header>
      <Routes>
        <Route exact path="/" element={<Story />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
