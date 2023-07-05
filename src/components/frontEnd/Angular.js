import React from 'react';
import {tipsLog1, tipsLog2, tipsLog3, tipsLog4, tipsLog5, tipsLog6 } from "./logoImports";
import "./index.scss"
const Angular = () => {
    
    
  return (
    <div className='container.tips'>
    
    <div  className="tips-logo-cont">
        <a href="https://jstips.co/"
            target="_blank"
            rel="noreferrer">
      <img 
      className='small-image'
      rel="tips-logo" 
    
       src={tipsLog1} 
       
       alt="javascript" />
    </a >
    <a href="https://espeo.eu/blog/30-angular-and-ts-tricks-and-tips-that-will-improve-your-application/"
            target="_blank"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog2} 
       
       alt="javascript" />
    </a>
    <a href="https://www.freecodecamp.org/news/best-practices-for-react/"
            target="_blank"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog3} 
       
       alt="javascript" />
    </a>
    <a href="https://css-tricks.com/snippets/css/"
            target="_blank"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog4} 
       
       alt="javascript" />
    </a>
    
    <a href="https://betterprogramming.pub/rxjs-best-practices-7f559d811514"
            target="_blank"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog5} 
       
       alt="javascript" />
    </a>
    <a href="https://www.telerik.com/blogs/10-quick-tips-learned-using-typescript"
            target="_blank"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog6} 
       
       alt="javascript" />
       
    </a>
    
   

    </div>
    </div>
    
  );
};

export default Angular;
