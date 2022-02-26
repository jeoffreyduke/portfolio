import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriterEffect from "react-typewriter-effect";
import TypeAnimation from "react-type-animation";
import "./FifthSection.css";
import Donut from "../svg-components/Donut";
import Launch from "../svg-components/Launch";
import Decide from "../svg-components/Decide";

function FifthSection() {
  const sectionFive = useRef();

  return (
    <div className="FifthSection">
      <div className="story-board">
        <div ref={sectionFive} className="sectioncon">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.97rem",
            }}
            startDelay={1000}
            cursorColor="black"
            text="Unfortunately we have no idea where he is, or will be next, 
            but he left something behind -- a rocket; 
            where anyone with an unrealised world in their head can make contact with him, 
            click the Red button to go back, or if you will; 
            click the Green button to begin your next quest to him 
            and watch him pull the world out of your mind just to place it in your hands."
            typeSpeed={100}
            scrollArea={sectionFive.current}
          />
        </div>
      </div>
      <div className="landd">
        <div className="launch">
          <Launch />
        </div>
        <div className="decide">
          <Decide />
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
