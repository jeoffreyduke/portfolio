import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriterEffect from "react-typewriter-effect";
import TypeAnimation from "react-type-animation";
import "./FourthSection.css";
import Mind from "../svg-components/Mind";
import Three from "../svg-components/Three";

function FourthSection() {
  const sectionFour = useRef();

  return (
    <div className="FourthSection">
      <div className="story-board">
        <div ref={sectionFour} className="sectioncon">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.97rem",
            }}
            startDelay={1000}
            cursorColor="black"
            text="Five years later, he began to notice too much ease in his craft 
            and finally decided to take it a step further, 
            he finally decided to use his purpose, his acquired talent, 
            for the realisation of the worlds in people`s minds, and that was 
            where his search began, 
            as he scanned and spanned universes in this quest."
            typeSpeed={100}
            scrollArea={sectionFour.current}
          />
        </div>
      </div>
      <div className="tandm">
        <div className="three">
          <Three />
        </div>
        <div className="mind">
          <Mind />
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
