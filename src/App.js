import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Skill from './components/Skills';
import Tips from './components/Tips';
import React from "react"
import AngularTip from './components/frontEnd/AllTips/Angular';
import Css from './components/frontEnd/AllTips/css';
import ReactTps from './components/frontEnd/AllTips/React';
import Type from './components/frontEnd/AllTips/Typescript';
import Rx from './components/frontEnd/AllTips/Rx';
import Js from './components/frontEnd/AllTips/js';


import './App.scss';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/tips" element={<Tips/>}/>
          <Route path="/jsTips" element={<Js/>}></Route>
          <Route path="/angularTips" element={<AngularTip/>}></Route>
          <Route path="/reactTips" element={<ReactTps/>}></Route>
          <Route path="/cssTips" element={<Css/>}></Route>
          <Route path="/rxjsTips" element={<Rx/>}></Route>
          <Route path="/typescriptTips" element={<Type/>}></Route>
        
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
