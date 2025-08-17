import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from "./Pages/About";
import UIUX from './Pages/UIUX';
import WebDev from './Pages/WebDev';
import Logos from './Pages/Logos';
import LetTalk from './Pages/LetTalk';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor'; // Import your cursor component
import Projects from './Pages/Projects';

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices on mount
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0
    );
  }, []);

  return (
    <Router>
      {/* Only show cursor on non-touch devices */}
      {!isTouchDevice && <CustomCursor />}
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects/:category/:slug' element={<Projects/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/web-dev" element={<WebDev />} />
        <Route path="/logo-design" element={<Logos />} />
        <Route path="/lets-talk" element={<LetTalk />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;