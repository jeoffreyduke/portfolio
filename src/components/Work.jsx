import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Work.css";
import Pop from "./work/Pop";

function Work() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1 }}
    >
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
            <Link className="pop-link" to="/sockflix" end>
              <div className="name">Sockflix</div>
            </Link>
          </div>
          <hr />
          <div className="box">
            <Link className="pop-link" to="/flipflop" end>
              <div className="name">Flip-flop</div>
            </Link>
          </div>
          <hr />
          <div className="box">
            <Link className="pop-link" to="/sockify" end>
              <div className="name">Sockify</div>
            </Link>
          </div>
          <hr />
          <div className="box">
            <Link className="pop-link" to="/inkfinity" end>
              <div className="name">Inkfinity</div>
            </Link>
          </div>
          <hr />
          <div className="box">
            <Link className="pop-link" to="/poethical" end>
              <div className="name">Poethical</div>
            </Link>
          </div>
          <hr />
        </div>

        <div className="contact">
          <div className="mail">
            <a href="mailto:jeoffreyduke@gmail.com?subject=Lets Work Together">
              Mail
              <svg viewBox="0 0 70 36" className="ct-line m-line">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/jeoffreyduke">
              Github
              <svg viewBox="0 0 70 36" className="ct-line git-line">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </div>
          <div className="linkedin">
            <a href="https://www.linkedin.com/in/jeoffrey-duke-584485149/">
              LinkedIn
              <svg viewBox="0 0 70 36" className="ct-line lin-line">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </div>
          <div className="twitter">
            <a href="https://twitter.com/dukejeoffrey">
              Twitter
              <svg viewBox="0 0 70 36" className="ct-line tw-line">
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
