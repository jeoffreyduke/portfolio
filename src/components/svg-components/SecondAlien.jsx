import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SecondAlien() {
  gsap.registerPlugin(ScrollTrigger);

  const alien = useRef();
  const mouth = useRef();
  const rightArm = useRef();
  const leftArm = useRef();
  const pupil = useRef();

  useEffect(() => {
    gsap.to(alien.current, {
      y: 20,
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
      delay: "1",
    });
    gsap.to(mouth.current, {
      scale: "1.15",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(pupil.current, {
      rotation: "-90",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(rightArm.current, {
      y: "-5",
      repeat: "-1",
      duration: "3",
      yoyoEase: true,
      yoyo: true,
    });
    gsap.to(leftArm.current, {
      y: "-5",
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
        width="117"
        height="106"
        viewBox="0 0 117 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={alien}
      >
        <g id="second-alien">
          <path
            id="rightarm"
            d="M24.3888 55.132C31.6364 45.7029 35.1121 36.2147 32.1521 33.9394C29.192 31.6642 20.917 37.4635 13.6693 46.8926C6.42168 56.3217 2.94592 65.81 5.906 68.0853C8.86609 70.3605 17.1411 64.5612 24.3888 55.132Z"
            fill="#39FF14"
            ref={rightArm}
          />
          <path
            id="head"
            d="M63.8362 86.6018C87.6217 86.6018 106.904 67.3199 106.904 43.5345C106.904 19.749 87.6217 0.467163 63.8362 0.467163C40.0508 0.467163 20.7689 19.749 20.7689 43.5345C20.7689 67.3199 40.0508 86.6018 63.8362 86.6018Z"
            fill="#39FF14"
          />
          <path
            id="leftleg"
            d="M83.4618 77.3341H70.3781V100.776H83.4618V77.3341Z"
            fill="#39FF14"
          />
          <path
            id="rightleg"
            d="M57.2944 77.3341H44.2106V100.776H57.2944V77.3341Z"
            fill="#39FF14"
          />
          <path
            id="leftfoot"
            d="M72.5587 105.137C78.5803 105.137 83.4618 103.306 83.4618 101.048C83.4618 98.7903 78.5803 96.9597 72.5587 96.9597C66.537 96.9597 61.6555 98.7903 61.6555 101.048C61.6555 103.306 66.537 105.137 72.5587 105.137Z"
            fill="#39FF14"
          />
          <path
            id="rightfoot"
            d="M46.3912 104.592C52.4128 104.592 57.2943 102.761 57.2943 100.503C57.2943 98.2451 52.4128 96.4146 46.3912 96.4146C40.3695 96.4146 35.488 98.2451 35.488 100.503C35.488 102.761 40.3695 104.592 46.3912 104.592Z"
            fill="#39FF14"
          />
          <path
            id="eyeball"
            d="M62.7458 47.3505C70.875 47.3505 77.4651 40.7605 77.4651 32.6313C77.4651 24.5021 70.875 17.9121 62.7458 17.9121C54.6167 17.9121 48.0267 24.5021 48.0267 32.6313C48.0267 40.7605 54.6167 47.3505 62.7458 47.3505Z"
            fill="white"
          />
          <path
            id="pupil"
            d="M61.7458 44.5377C64.4556 44.5377 66.6523 42.341 66.6523 39.6313C66.6523 36.9215 64.4556 34.7249 61.7458 34.7249C59.0361 34.7249 56.8395 36.9215 56.8395 39.6313C56.8395 42.341 59.0361 44.5377 61.7458 44.5377Z"
            fill="#3F3D56"
            ref={pupil}
          />
          <path
            id="left-arm"
            d="M114.741 81.9266C118.1 80.2975 116.616 70.3021 111.427 59.6013C106.238 48.9005 99.3075 41.5464 95.9482 43.1755C92.5889 44.8046 94.0724 54.8 99.2618 65.5008C104.451 76.2016 111.381 83.5557 114.741 81.9266Z"
            fill="#39FF14"
            ref={leftArm}
          />
          <path
            id="mouth"
            d="M84.9907 59.0713C84.9907 63.2865 74.1375 71.6099 62.0942 71.6099C50.0509 71.6099 38.759 59.7429 38.759 55.5278C38.759 51.3127 50.051 56.3456 62.0942 56.3456C74.1374 56.3456 84.9907 54.8562 84.9907 59.0713Z"
            fill="white"
            ref={mouth}
          />
        </g>
      </svg>
    </>
  );
}

export default SecondAlien;
