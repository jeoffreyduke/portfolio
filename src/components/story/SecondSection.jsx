import React, { useRef } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./SecondSection.css";
import Abduction from "../svg-components/Abduction";
import TrueLove from "../svg-components/TrueLove";
import Thinking from "../svg-components/Thinking";
import Coding from "../svg-components/Coding";

function SecondSection() {
  const storyTitle = useRef();
  const sectionOne = useRef();
  const sectionTwo = useRef();

  return (
    <>
      <div className="SecondSection">
        <div className="story-board">
          <div ref={storyTitle} className="story-title">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "1.2rem",
              }}
              startDelay={1000}
              cursorColor="black"
              hideCursorAfterText={true}
              text="Shall we tell a story?"
              typeSpeed={100}
              scrollArea={storyTitle.current}
            />
          </div>
          <div className="story-content">
            <div ref={sectionOne} className="sectioncon">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "0.97rem",
                }}
                startDelay={4000}
                cursorColor="black"
                text="There is an incredibly average young human-alien, whose location; although far from a hundred percent precise, 
            can be traced to the Milky-Way Galaxy, where he was born; roughly two decades ago. 
            Born to seperated parents; this average-joe found life to be quite messy, 
            and his Asperger`s Syndrome did not really help matters. 
            Strange as he was he kept waking up each morning, as his life whisked by, 
            like the microscopic sand particles that ride the desert air."
                typeSpeed={100}
                scrollArea={sectionOne.current}
              />
            </div>
          </div>
        </div>
        <canvas id="canvas">
          <div className="thinking">
            <Thinking />
          </div>
          <div className="abduction">
            <Abduction />
          </div>
        </canvas>
      </div>
      <div className="SecondSection1">
        <div className="story-content sc1">
          <div ref={sectionTwo} className="sectioncon second">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.97rem",
              }}
              startDelay={1000}
              cursorColor="black"
              text="Aimlessly as always this young man discovered the ability to create. 
            Creation always made him wonder, and wonder always made him create. 
            So, he began, and for once in his life, HE KEPT AT IT."
              typeSpeed={100}
              scrollArea={sectionTwo.current}
            />
          </div>
        </div>
        <div className="coding">
          <Coding />
        </div>
        <div className="true-love">
          <TrueLove />
        </div>
      </div>
    </>
  );
}

export default SecondSection;
