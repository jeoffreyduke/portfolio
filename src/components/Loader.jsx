import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./Loader.css";
import Load from "./svg-components/Load";

function Loader() {
  const point1 = useRef();
  const point2 = useRef();
  const point3 = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.2,
      yoyo: true,
      yoyoEase: "bounce",
    });
    tl.to(point1.current, {
      y: "-5",
      duration: "0.2",
    });
    tl.to(point2.current, {
      y: "-5",
      duration: "0.2",
    });
    tl.to(point3.current, {
      y: "-5",
      duration: "0.2",
    });
  });

  return (
    <motion.div exit={{ y: -500 }} transition={{ duration: 0.5 }}>
      <div className="Loader">
        <Load />
        <div className="loading">
          Writing
          <div ref={point1} className="point">
            .
          </div>
          <div ref={point2} className="point">
            .
          </div>
          <div ref={point3} className="point">
            .
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
