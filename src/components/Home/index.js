import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
// import LogoTitle from '../../assets/images/logoP.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ','P', 'I', 'T', 'T', 'U', " ", 'P', 'R', 'A', 'S', 'A', 'N', 'T', 'H'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <>
    
      <div className="container home-page">
        <div className="text-zone">
        
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            {/* <img className='logo-size'
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};




export default Home;

