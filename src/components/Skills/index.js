import { useEffect, useState } from "react";
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
import pdf from "./pittu.pdf"
import "./index.css";
import data from "../MyData/MyData";
import { IconCloudDemo } from "../IconCloudDemo";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s",]}
              idx={15}
            />
          </h1>
          <p align="LEFT">{`${data[0].skill}`}</p>
          <div className="link-style-container">
          <a className="link-style-cv" href={pdf} target="_blank" rel="noreferrer">RESUME</a>
          </div>
          <div>
            <span className="text-color">Learning in front-end development including technologies like</span>
            <span>
              <a
              className="link-style"
                href="https://en.wikipedia.org/wiki/HTML5"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5
              </a>
            </span>
            <br />,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://en.wikipedia.org/wiki/CSS"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS3
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://en.wikipedia.org/wiki/JavaScript"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://jquery.com/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                jQuery
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://angular.io/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Angular2
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://reactjs.org/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://www.typescriptlang.org/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                TypeScript
              </a>
            </span>
            <br />,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://jasmine.github.io/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Jasmine
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://getbootstrap.com/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://sass-lang.com/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Sass
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a
              className="link-style"
                href="https://git-scm.com/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
            </span>
          </div>
        </div>
        {/* <div className="stage-cube-cont">
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
        </div> */}
        <div className="skills-charts">

        <IconCloudDemo/>
        </div>
      </div>
      <Loader type="pacman" />
      
    </>
  );
};

export default About;
