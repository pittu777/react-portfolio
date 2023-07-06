import { useEffect, useState } from 'react';
// import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import CVPDF from './PITTU_PRASANTH_21BCS11497_CV.pdf';
import AnimatedLetters from '../AnimatedLetters';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import './index.css';
// import TextShpere from './tagCloud';
import TagCloud from "TagCloud";




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
  const TextShpere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = [
          "HTML",
          "CSS",
          "SASS",
          "JavaScript",
          "React",
          "Vue",
          "Nuxt",
          "NodeJS",
          "Babel",
          "Jquery",
          "ES6",
          "GIT",
          "GITHUB",
          "karma",
          "JSON",
          "Rest",
          "Bootstrap",
          "npm",
          "_lodash",
          "Bower",
          "RxJs"
        ];
        let radius = 300;
        if (window.innerWidth <= 768) {
          radius = 150; // Radius for mobile screens
        }
  
        const options = {
          radius: radius,
          maxSpeed: "fast",
          initSpeed: "fast",
          keep: true,
        };
  
        TagCloud(container, texts, options);
      };
    }, []);
    
  }
  

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
          
          
         
           <p>
            Learning in front-end development including technologies like
            <span >
              <a href="https://en.wikipedia.org/wiki/HTML5" style={spanStyles} target="_blank" rel="noopener noreferrer">
                HTML5
              </a>
            </span>
            <br/>
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
            <br/>
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


            Visit my
            <a rel="noreferrer" style={spanStyles} target="_blank" href="https://www.linkedin.com/in/pittu-prasanth-2a3a28230/">LinkedIn </a>
            profile for more details. Also you can checkout my cv 
            <Link to={CVPDF} style={spanStyles} target="_blank" rel="noopener noreferrer">Link</Link>
            
          
          </p>
          
          
        </div>
       
        {/* <div style={{ position: 'absolute', right: 0 }} className="myCanvasContaine">
        
        {/* span tag className must be "tagcloud"  */}
        {/* <TextShpere style={{ backgroundColor: 'transparent' }} />
        
        </div> */} 
        
        <div className="myCanvas">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
        <TextShpere/>
        
        </div>
        
      
          
        </div>
        
        
          
        
      
      <Loader type="pacman" />
    </>
  );
};



export default Skills;


