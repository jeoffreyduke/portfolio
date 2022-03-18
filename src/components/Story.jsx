import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FifthSection from "./story/FifthSection";
import FirstSection from "./story/FirstSection";
import FourthSection from "./story/FourthSection";
import SecondSection from "./story/SecondSection";
import SixthSection from "./story/SixthSection";
import ThirdSection from "./story/ThirdSection";

function Story() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="Story">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </motion.div>
  );
}

export default Story;
