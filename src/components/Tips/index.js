import { useEffect, useState } from "react";
import { logNameInConsole } from "../About/Console";

import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

import "./index.scss";
import AllTips from "../frontEnd/AllTips";

const Tips = () => {
  logNameInConsole();
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
              strArray={["T", "i", "p", "s"]}
              idx={15}
            />
          </h1>

          <div>
            <p>
              <AllTips />
            </p>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Tips;
