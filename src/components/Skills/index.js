import { useEffect, useState } from "react";

import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import pdf from "./resume_tech.pdf"
import "./index.css";
import data from "../MyData/MyData";
import { IconCloudDemo } from "../IconCloudDemo";

const Skill = () => {
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
            <span className="text-color">Learning in back-end development including technologies like </span>
            <span>
              <a
              className="link-style"
                href="https://en.wikipedia.org/wiki/HTML5"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Node js
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
                Express JS
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
                mongoDB
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
                REST API
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
                href="https://git-scm.com/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
            </span>
          </div>
        </div>
        
        <div className="skills-charts">

        <IconCloudDemo/>
        </div>
      </div>
      
      <Loader type="pacman" />
      
    </>
  );
};

export default Skill;
