// src/App.jsx
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // New footer component
import { MotionConfig } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // State for theme toggling
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Disable animations after initial scroll to prevent flickering
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  
  return (
    <MotionConfig reducedMotion={hasScrolled ? "always" : "user"}>
      <div className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${darkMode ? 'bg-slate-950 text-neutral-300' : 'bg-gray-50 text-gray-800'}`}>
        {/* Background Decorations */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className={`relative h-full w-full ${darkMode ? 'bg-slate-950' : 'bg-gray-50'}`}>
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Technologies darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Certifications darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </MotionConfig>
  );
};

export default App;
