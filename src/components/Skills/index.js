import { useEffect, useState } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';




const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
    

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const spanStyles = {
    color: 'yellow',
  };
  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          {/* <p>
          
            Learning in front-end development including technologies like
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">jQuery</span>,
            <span class="tech-tag">Angular2</span>,
            <span class="tech-tag">React</span>,
            <span class="tech-tag">TypeScript</span>,
            <span class="tech-tag">Jasmine</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Sass</span>,
            <span class="tech-tag">Git</span>, etc.
          
          </p>
           */}
           <p>
            Learning in front-end development including technologies like
            <span >
              <a href="https://en.wikipedia.org/wiki/HTML5" style={spanStyles} target="_blank" rel="noopener noreferrer">
                HTML5
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://en.wikipedia.org/wiki/CSS" style={spanStyles} target="_blank" rel="noopener noreferrer">
                CSS3
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://en.wikipedia.org/wiki/JavaScript" style={spanStyles} target="_blank" rel="noopener noreferrer">
                JavaScript
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://jquery.com/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                jQuery
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://angular.io/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                Angular2
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://reactjs.org/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                React
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://www.typescriptlang.org/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                TypeScript
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://jasmine.github.io/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                Jasmine
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://getbootstrap.com/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                Bootstrap
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://sass-lang.com/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                Sass
              </a>
            </span>
            ,
            <span className="tech-tag">
              <a href="https://git-scm.com/" style={spanStyles} target="_blank" rel="noopener noreferrer">
                Git
              </a>
            </span>
            
          </p>
          <p align="LEFT">
            
          
          I am also currently learning React, a popular JavaScript library used for building user interfaces. By gaining knowledge in React, I am expanding my skill set to include the ability to create dynamic and responsive web applications.

My combination of skills in Django, Python, HTML, CSS, JavaScript, and my ongoing learning in React, allow me to approach software development projects with confidence and an understanding of the full-stack development process. With my skills, 
I am able to provide efficient solutions to complex problems and deliver quality results that meet the needs of clients and users.

          
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



export default Skills;


