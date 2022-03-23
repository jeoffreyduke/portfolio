import React, { useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./SixthSection.css";
import MicDrop from "../svg-components/MicDrop";
import Donut from "../svg-components/Donut";

function SixthSection() {
  const sectionSix = useRef();
  const mand = useRef();

  return (
    <div className="SixthSection">
      <div className="story-board">
        <div ref={sectionSix} className="sectioncon Typo">
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
      <div ref={mand} className="mandd">
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
