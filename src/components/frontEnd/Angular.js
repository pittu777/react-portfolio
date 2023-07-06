import React from 'react';


import {tipsLog1, tipsLog2, tipsLog3, tipsLog4, tipsLog5, tipsLog6 } from "./logoImports";
import "./index.scss"







const Angular = () => {
    


      
  return (
      <>
      
    
    
    
    <div className='container.tips'>
    
    <div  className="tips-logo-cont">
        <a
       href='/jsTips'
      rel="noreferrer">
      <img
      
       
      className='small-image'
      rel="tips-logo" 
    
       src={tipsLog1} 
       
       alt="javascript" />
       
    </a >
    <a href="/angularTips"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog2} 
       
       alt="javascript" />
    </a>
    <a href="/reactTips"
            
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog3} 
       
       alt="javascript" />
    </a>
    <a href="/cssTips"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog4} 
       
       alt="javascript" />
    </a>
    
    <a href="/rxjsTips"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog5} 
       
       alt="javascript" />
    </a>
    <a href="typescriptTips"
            rel="noreferrer">
      <img 
      className="small-image" 
      rel="tips-logo" 
    
       src={tipsLog6} 
       
       alt="javascript" />
       
    </a>
    
   

    </div>
    </div>
    </>
    
  );
};

export default Angular;
