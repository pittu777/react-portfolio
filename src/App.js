import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skills";
import Tips from "./components/Tips";
import React from "react";
import { logNameInConsole } from "./components/About/Console";
import Angular from "./components/frontEnd/AllTips/Angular";
import Js from "./components/frontEnd/AllTips/js";
import Css from "./components/frontEnd/AllTips/css";
import Rx from "./components/frontEnd/AllTips/Rx";
import ReactTips from "./components/frontEnd/AllTips/React";
import Typescript from "./components/frontEnd/AllTips/Typescript";
import "./App.scss";

function App() {
  logNameInConsole();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/js" element={<Js />}></Route>
          <Route path="/angularTips" element={<Angular />}></Route>
          <Route path="/reactTips" element={<ReactTips />}></Route>
          <Route path="/cssTips" element={<Css />}></Route>
          <Route path="/rxjsTips" element={<Rx />}></Route>
          <Route path="/typescriptTips" element={<Typescript />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
