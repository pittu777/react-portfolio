import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "./../../AnimatedLetters";
import "./../../Portfolio/index.scss";
import { TipsData } from "../../../data/TipsData";
import logoR from "./../../../assets/images/rxjs.png";

const Rx = () => {
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
            strArray={"RxJS".split("")}
            idx={15}
          />
          <img src={logoR} style={{ height: "30px", width: "30px" }} alt="" />
        </h1>
        <div>
          <h2>
            {TipsData[0].rxjs.map((tip, index) => (
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
export default Rx;
