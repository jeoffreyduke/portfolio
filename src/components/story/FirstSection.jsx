import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypeAnimation from "react-type-animation";
import "./FirstSection.css";
import FirstAlien from "../svg-components/FirstAlien";
import Guy from "../svg-components/Guy";
import SecondAlien from "../svg-components/SecondAlien";

function FirstSection() {
  gsap.registerPlugin(ScrollTrigger);

  const comma = useRef();
  const first = useRef();
  const second = useRef();
  const moveBtn = useRef();

  useEffect(() => {
    gsap.from(comma.current, {
      scale: "0.5",
      duration: "2.5",
      ease: "elastic",
      yoyoEase: "true",
      delay: "0.2",
    });
    gsap.to(first.current, {
      y: "5",
      yoyo: true,
      duration: "1.4",
      yoyoEase: "true",
      ease: "power1.ease",
      repeat: "-1",
    });
    gsap.to(second.current, {
      y: "5",
      yoyo: true,
      duration: "1.4",
      yoyoEase: "true",
      ease: "power1.ease",
      repeat: "-1",
    });
    gsap.to(moveBtn.current, {
      opacity: "-1",
      duration: "1.5",
      ease: "power1.Out",
      scrollTrigger: {
        trigger: document.body.querySelector(".donut"),
        scrub: true,
      },
    });

    const interval = setInterval(() => {
      gsap.from(comma.current, {
        scale: "0.5",
        duration: "2.5",
        ease: "elastic",
        yoyoEase: "true",
      });
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="FirstSection">
      <div className="welcome">
        <span className="white-big">H</span>
        <span className="white-big">o</span>
        <span className="white-big">l</span>
        <span className="white-big">a</span>
        <span className="white-big">!</span>
        <div ref={comma} className="yellow-big">
          ,
        </div>
        <br />
        <span className="white-big">I</span>
        <span className="white-big">`</span>
        <span className="white-big">m</span>
        <span className="white-big"> J</span>
        <span className="white-big">e</span>
        <span className="white-big">o</span>
        <span className="white-big">f</span>
        <span className="white-big">f</span>
        <span className="white-big">r</span>
        <span className="white-big">e</span>
        <span className="white-big">y</span>
        <div className="welcome-small">
          <TypeAnimation
            cursor
            sequence={[
              "",
              1000,
              "I like to think of myself as a storyteller",
              1000,
              "Or maybe a...",
              1000,
              "Creative web-developer from Nigeria",
              5000,
              "",
            ]}
            wrapper="span"
            repeat={Infinity}
            className="welcome-small"
          />
        </div>
        <div className="welcome-btn-con">
          <a href="../../assets/duke-resume.pdf" download>
            <button className="welcome-btn">download résumé</button>
          </a>
        </div>
      </div>
      <div className="guy-portfolio">
        <Guy />
      </div>
      <div className="first-alien">
        <FirstAlien />
      </div>
      <div className="second-alien">
        <SecondAlien />
      </div>
      <div className="move-button-con">
        <svg
          width="45"
          height="45"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={moveBtn}
        >
          <path
            d="M12 17C11.7348 16.9999 11.4805 16.8946 11.293 16.707L7.293 12.707C7.19749 12.6148 7.12131 12.5044 7.0689 12.3824C7.01649 12.2604 6.9889 12.1292 6.98775 11.9964C6.9866 11.8636 7.0119 11.7319 7.06218 11.609C7.11246 11.4862 7.18671 11.3745 7.28061 11.2806C7.3745 11.1867 7.48615 11.1125 7.60905 11.0622C7.73194 11.0119 7.86362 10.9866 7.9964 10.9878C8.12918 10.9889 8.2604 11.0165 8.38241 11.0689C8.50441 11.1213 8.61475 11.1975 8.707 11.293L12 14.586L15.293 11.293C15.4816 11.1108 15.7342 11.01 15.9964 11.0123C16.2586 11.0146 16.5094 11.1198 16.6948 11.3052C16.8802 11.4906 16.9854 11.7414 16.9877 12.0036C16.99 12.2658 16.8892 12.5184 16.707 12.707L12.707 16.707C12.5195 16.8946 12.2652 16.9999 12 17Z"
            fill="white"
            ref={first}
          />
          <path
            d="M12 13C11.7348 12.9999 11.4805 12.8946 11.293 12.707L7.293 8.707C7.19749 8.61475 7.12131 8.50441 7.0689 8.38241C7.01649 8.2604 6.9889 8.12918 6.98775 7.9964C6.9866 7.86362 7.0119 7.73194 7.06218 7.60905C7.11246 7.48615 7.18671 7.3745 7.28061 7.28061C7.3745 7.18671 7.48615 7.11246 7.60905 7.06218C7.73194 7.0119 7.86362 6.9866 7.9964 6.98775C8.12918 6.9889 8.2604 7.01649 8.38241 7.0689C8.50441 7.12131 8.61475 7.19749 8.707 7.293L12 10.586L15.293 7.293C15.3852 7.19749 15.4956 7.12131 15.6176 7.0689C15.7396 7.01649 15.8708 6.9889 16.0036 6.98775C16.1364 6.9866 16.2681 7.0119 16.391 7.06218C16.5139 7.11246 16.6255 7.18671 16.7194 7.28061C16.8133 7.3745 16.8875 7.48615 16.9378 7.60905C16.9881 7.73194 17.0134 7.86362 17.0123 7.9964C17.0111 8.12918 16.9835 8.2604 16.9311 8.38241C16.8787 8.50441 16.8025 8.61475 16.707 8.707L12.707 12.707C12.5195 12.8946 12.2652 12.9999 12 13Z"
            fill="white"
            ref={second}
          />
        </svg>
      </div>
    </div>
  );
}

export default FirstSection;
