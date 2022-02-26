import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriterEffect from "react-typewriter-effect";
import TypeAnimation from "react-type-animation";
import "./SixthSection.css";
import Abduction from "../svg-components/Abduction";
import MicDrop from "../svg-components/MicDrop";
import Donut from "../svg-components/Donut";

function SixthSection() {
  const sectionSix = useRef();

  return (
    <div className="SixthSection">
      <div className="story-board">
        <div ref={sectionSix} className="sectioncon">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.97rem",
            }}
            startDelay={1000}
            cursorColor="black"
            text="The end?"
            typeSpeed={100}
            scrollArea={sectionSix.current}
          />
        </div>
      </div>
      <div className="mandd">
        <div className="mic-drop">
          <MicDrop />
        </div>
        <div className="donut">
          <Donut />
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
