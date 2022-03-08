import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Pop.css";

function Pop({ logo, small, big, image, link }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="Pop">
        <div className="pop-box">
          <div className="exit">
            <Link to="/work" end>
              <svg
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"
                />
              </svg>
            </Link>
          </div>
          <img className="pop-img" src={image} alt="" srcset="" />

          <a style={{ textDecoration: "none", cursor: "inherit" }} href={link}>
            <div className="pop-content">
              <div className="logo">{logo}</div>
              <div className="small-txt">{small}</div>
              <div className="big-txt">{big}</div>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Pop;
