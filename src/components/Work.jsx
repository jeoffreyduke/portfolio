import React, { useRef } from "react";
import Particles from "react-tsparticles";
import Waves from "./svg-components/Waves";
import "./Work.css";

function Work() {
  return (
    <div className="Work">
      <div className="projects">
        <div className="project-title">
          <span className="project-chars">C</span>
          <span className="project-chars">r</span>
          <span className="project-chars">e</span>
          <span className="project-chars">a</span>
          <span className="project-chars">t</span>
          <span className="project-chars">i</span>
          <span className="project-chars">o</span>
          <span className="project-chars">n</span>
          <span className="project-chars">s</span>
          <span className=" green">:</span>
        </div>

        <hr />
        <div className="box">
          <div className="name">Sockflix</div>
        </div>
        <hr />
        <div className="box">
          <div className="name">Flip-flop</div>
        </div>
        <hr />
        <div className="box">
          <div className="name">Sockify</div>
        </div>
        <hr />
        <div className="box">
          <div className="name">Inkfinity</div>
        </div>
        <hr />
        <div className="box">
          <div className="name">Poethical</div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Work;
