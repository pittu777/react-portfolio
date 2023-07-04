import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Skill from './components/Skills';
import Tips from './components/Tips';

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
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
