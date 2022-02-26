import React from "react";
import FifthSection from "./story/FifthSection";
import FirstSection from "./story/FirstSection";
import FourthSection from "./story/FourthSection";
import SecondSection from "./story/SecondSection";
import SixthSection from "./story/SixthSection";
import ThirdSection from "./story/ThirdSection";

function Story() {
  return (
    <div className="Story">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}

export default Story;
