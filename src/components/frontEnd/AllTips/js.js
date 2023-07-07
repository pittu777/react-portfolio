import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "./../../AnimatedLetters";
import "./../../Portfolio/index.scss";
import { TipsData } from "../../../data/TipsData";
import logojs from "./../../../assets/images/javascript.png"

const Js = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"JS".split("")}
            idx={15}
          />
          <img src={logojs} style = {{width:"30px", height:"30px", margin:"20px 0px 0px 20px"}} alt="" />
        </h1>
        <div>
          <h2>
            {TipsData[0].javascript.map((tip, index) => (
              <div key={index}>
                <span className="line-number">{index + 1}. </span>
                {tip}
              </div>
            ))}
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Js;
