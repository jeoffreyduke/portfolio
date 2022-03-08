import React, { useRef, useEffect } from "react";

function Cursor() {
  return (
    <div className="cursor">
      <svg
        width="50"
        height="50"
        viewBox="0 0 137 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cursor">
          <g id="cursor_2">
            <path
              id="head"
              d="M65.2459 86.2436C89.0313 86.2436 108.313 66.9617 108.313 43.1763C108.313 19.3909 89.0313 0.108978 65.2459 0.108978C41.4605 0.108978 22.1786 19.3909 22.1786 43.1763C22.1786 66.9617 41.4605 86.2436 65.2459 86.2436Z"
              fill="#39FF14"
            />
            <path
              id="eyeball"
              d="M71.6845 47.4473C79.6146 47.4473 86.0432 41.0188 86.0432 33.0887C86.0432 25.1587 79.6146 18.7301 71.6845 18.7301C63.7545 18.7301 57.3259 25.1587 57.3259 33.0887C57.3259 41.0188 63.7545 47.4473 71.6845 47.4473Z"
              fill="white"
            />
            <path
              id="pupil"
              d="M72.5859 43.7281C75.2293 43.7281 77.3721 41.5853 77.3721 38.9419C77.3721 36.2986 75.2293 34.1557 72.5859 34.1557C69.9426 34.1557 67.7997 36.2986 67.7997 38.9419C67.7997 41.5853 69.9426 43.7281 72.5859 43.7281Z"
              fill="#3F3D56"
            />
            <path
              id="mouth"
              d="M62.6771 63.0041C62.452 64.2409 62.4727 65.5098 62.7379 66.7385C63.0032 67.9673 63.5079 69.1318 64.2232 70.1655C64.9385 71.1993 65.8505 72.0819 66.9069 72.7632C67.9634 73.4445 69.1437 73.911 70.3804 74.1362C71.6171 74.3613 72.8861 74.3407 74.1149 74.0754C75.3436 73.8101 76.5081 73.3054 77.5418 72.59C78.5755 71.8747 79.4582 70.9628 80.1395 69.9064C80.8208 68.8499 81.2873 67.6697 81.5125 66.4329L81.5158 66.4144C82.4576 61.2123 78.4355 59.3714 73.2333 58.4297C68.0312 57.488 63.6189 57.802 62.6771 63.0041Z"
              fill="white"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Cursor;