import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FirstAlien() {
  gsap.registerPlugin(ScrollTrigger);

  const alien = useRef();
  const mouth = useRef();
  const rightArm = useRef();
  const leftArm = useRef();
  const pupil = useRef();

  useEffect(() => {
    gsap.to(alien.current, { y: 20, repeat: "-1", duration: "3", yoyo: true });
    gsap.to(mouth.current, {
      scale: "1.2",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(pupil.current, {
      rotation: "-45",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(rightArm.current, {
      y: "-4",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(leftArm.current, {
      y: "-4",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(alien.current, {
      x: "1400",
      rotate: "360",
      duration: "10",
      ease: "slow (5, 5, false)",
      scrollTrigger: {
        trigger: alien.current.querySelector(".first"),
        start: "top top",
        scrub: true,
      },
    });
  });

  return (
    <>
      <svg
        width="100"
        height="100"
        viewBox="0 0 137 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={alien}
        className="firstAlien"
      >
        <g id="first-alien">
          <path
            id="leftarm"
            d="M116.651 28.3006C127.396 23.2042 134.81 16.3382 133.21 12.9649C131.61 9.59155 121.603 10.9884 110.857 16.0848C100.112 21.1811 92.6979 28.0472 94.2978 31.4205C95.8977 34.7938 105.906 33.397 116.651 28.3006Z"
            fill="#39FF14"
            ref={leftArm}
          />
          <path
            id="rightarm"
            d="M24.622 53.9939C32.2567 44.8753 36.1252 35.5403 33.2626 33.1436C30.4 30.7468 21.8903 36.1959 14.2556 45.3145C6.62091 54.4331 2.75235 63.7681 5.61495 66.1649C8.47754 68.5616 16.9873 63.1125 24.622 53.9939Z"
            fill="#39FF14"
            ref={rightArm}
          />
          <path
            id="head"
            d="M65.2459 86.2436C89.0313 86.2436 108.313 66.9617 108.313 43.1763C108.313 19.3909 89.0313 0.108978 65.2459 0.108978C41.4605 0.108978 22.1786 19.3909 22.1786 43.1763C22.1786 66.9617 41.4605 86.2436 65.2459 86.2436Z"
            fill="#39FF14"
          />
          <path
            id="rightleg"
            d="M60.1009 75.9758H47.0171V99.4175H60.1009V75.9758Z"
            fill="#39FF14"
          />
          <path
            id="leftleg"
            d="M86.2683 75.9758H73.1846V99.4175H86.2683V75.9758Z"
            fill="#39FF14"
          />
          <path
            id="rightfoot"
            d="M57.9203 103.779C63.9419 103.779 68.8234 101.948 68.8234 99.6901C68.8234 97.432 63.9419 95.6014 57.9203 95.6014C51.8986 95.6014 47.0171 97.432 47.0171 99.6901C47.0171 101.948 51.8986 103.779 57.9203 103.779Z"
            fill="#39FF14"
          />
          <path
            id="leftfoot"
            d="M84.0877 105.234C90.1094 105.234 94.9909 103.403 94.9909 101.145C94.9909 98.8869 90.1094 97.0563 84.0877 97.0563C78.0661 97.0563 73.1846 98.8869 73.1846 101.145C73.1846 103.403 78.0661 105.234 84.0877 105.234Z"
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
            ref={pupil}
          />
          <path
            ref={mouth}
            id="mouth"
            d="M62.6771 63.0041C62.452 64.2409 62.4727 65.5098 62.7379 66.7385C63.0032 67.9673 63.5079 69.1318 64.2232 70.1655C64.9385 71.1993 65.8505 72.0819 66.9069 72.7632C67.9634 73.4445 69.1437 73.911 70.3804 74.1362C71.6171 74.3613 72.8861 74.3407 74.1149 74.0754C75.3436 73.8101 76.5081 73.3054 77.5418 72.59C78.5755 71.8747 79.4582 70.9628 80.1395 69.9064C80.8208 68.8499 81.2873 67.6697 81.5125 66.4329V66.4329L81.5158 66.4144C82.4576 61.2123 78.4355 59.3714 73.2333 58.4297C68.0312 57.488 63.6189 57.802 62.6771 63.0041Z"
            fill="white"
          />
        </g>
      </svg>
    </>
  );
}

export default FirstAlien;
