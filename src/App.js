import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Story from "./components/Story";
import Work from "./components/Work";
import Pop from "./components/work/Pop";
import sockflix from "../src/assets/sockflix.jpg";
import flipflop from "../src/assets/flipflop.jpg";
import sockify from "../src/assets/sockify.jpg";
import inkfinity from "../src/assets/inkfinity.jpg";
import poethical from "../src/assets/poethical.jpg";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <header>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active story" : "link story"
            }
            to="/"
            end="true"
          >
            <div>story</div>
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active1" : "link")}
            to="/work"
            end="true"
          >
            <div>work</div>
          </NavLink>
        </header>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Story />} />
          <Route exact path="/work" element={<Work />} />
          <Route
            exact
            path="/sockflix"
            element={
              <Pop
                logo={"Sockflix"}
                small={"Media App"}
                big={"A simple Netflix clone."}
                image={sockflix}
                link={"https://sock-flix.web.app/"}
              />
            }
          />
          <Route
            exact
            path="/flipflop"
            element={
              <Pop
                logo={"Flip-flop"}
                small={"Web Game"}
                big={"A memory-match game."}
                image={flipflop}
                link={"https://flip-flop-duke.netlify.app/"}
              />
            }
          />
          <Route
            exact
            path="/sockify"
            element={
              <Pop
                logo={"Sockify"}
                small={"Media App"}
                big={"A simple Spotify clone."}
                image={sockify}
                link={"https://sockifymusic.web.app/"}
              />
            }
          />
          <Route
            exact
            path="/inkfinity"
            element={
              <Pop
                logo={"Inkfinity"}
                small={"E-commerce"}
                big={"An online Bookstore."}
                image={inkfinity}
                link={"https://inkfinity.org/"}
              />
            }
          />
          <Route
            exact
            path="/poethical"
            element={
              <Pop
                logo={"Poethical"}
                small={"Blog Site"}
                big={"A poetry blog."}
                image={poethical}
                link={"https://poethical.com/"}
              />
            }
          />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
