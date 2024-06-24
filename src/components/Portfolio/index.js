
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { logNameInConsole } from "../About/Console";
import "./index.scss";

const Portfolio = () => {
  logNameInConsole();
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/pittu777/portfolio-projects/main/portfolio.json");
        const data = await response.json();
        setPortfolioData(data.portfolio);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div className="image-box" key={idx}>
            <img
              src={port.cover}
              className="portfolio-image"
              alt="portfolio"
            />
            <div className="content">
              <p className="title">{port.title}</p>
              <h4 className="description">{port.description}</h4>
              <button className="btn" onClick={() => window.open(port.url)}>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        {loading ? (
          <p>Loading.....</p>
        ) : (
          renderPortfolio(portfolioData)
        )}
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Portfolio;
