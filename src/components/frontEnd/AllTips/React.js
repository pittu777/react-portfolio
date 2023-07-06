import { useEffect, useState } from 'react';
// import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from "./../../AnimatedLetters"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './index.scss';
// import data from '../MyData/MyData';


const ReactTps = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
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
                strArray={["R","E","A","C","T"]}
                idx={15}
              />
            </h1>
            <p align="LEFT">
              
             tip from raect
            
            </p>
          </div>
          
          </div>
        
        <Loader type="pacman" />
      </>
    );
  };

export default ReactTps;