import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeWriterEffect from "react-typewriter-effect";
import TypeAnimation from "react-type-animation";
import "./ThirdSection.css";
import Abduction from "../svg-components/Abduction";
import Skills from "../svg-components/Skills";
import FirstAlien from "../svg-components/FirstAlien";
import Team from "../svg-components/Team";

function ThirdSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionThree = useRef();
  const thirdSection = useRef();

  return (
    <div ref={thirdSection} className="ThirdSection">
      <div className="story-board">
        <div ref={sectionThree} className="sectioncon">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.97rem",
            }}
            startDelay={1000}
            cursorColor="black"
            text="Sleepless nights became his wife. 
            Coffee and eye-bags became his cousins. As he worked and created; 
            totally jacked with purpose -- driven to learn more, and do more."
            typeSpeed={100}
            scrollArea={sectionThree.current}
          />
        </div>
      </div>
      <div className="sandt">
        <div className="skills">
          <Skills section={thirdSection} />
        </div>
        <div className="team">
          <Team />
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
