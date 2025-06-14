
import { useEffect, useRef, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import data from "../MyData/MyData";
import { logNameInConsole } from "./Console";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";



gsap.registerPlugin(ScrambleTextPlugin);

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutRef = useRef(null); // 🔹 Ref to the paragraph element

  logNameInConsole();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");

      // Animate Scrambled Text after initial delay
      gsap.to(aboutRef.current, {
        duration: 10,
        scrambleText: {
          text: data[0].aboutMe,
          chars: "upperAndLowerCase",
          revealDelay: 0.5,
        },
        ease: "power2.out"
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <div className="about-container">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
          </div>

          {/* 🔹 ScrambleText applied here */}
          <p
            className="contact-desc text-left"
            ref={aboutRef}
          >
           
            Loading...
          </p>

        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
