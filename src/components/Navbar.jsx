// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import resume from "../assets/VarunAnand_Resume_2025_Main_3.pdf";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || "");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-slate-950/90 backdrop-blur-lg shadow-lg border-b border-gray-800/50"
            : "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"} flex items-center`}
            >
              <span className="relative">
                Varun
                <span className="text-purple-500">.</span>
                {scrolled && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  />
                )}
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? darkMode 
                        ? "text-white" 
                        : "text-gray-900"
                      : darkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800/50" 
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      layoutId="navUnderline"
                    />
                  )}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/varun-anand-082b72257/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800/70" 
                    : "text-gray-500 hover:text-blue-600 hover:bg-gray-100"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              
              <a
                href="https://github.com/varunanand07"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? "text-gray-400 hover:text-purple-400 hover:bg-gray-800/70" 
                    : "text-gray-500 hover:text-purple-600 hover:bg-gray-100"
                }`}
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              
              <a
                href={resume}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  darkMode 
                    ? "bg-gray-800 text-white hover:bg-gray-700" 
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
                aria-label="Download Resume"
              >
                <FiDownload className="mr-1.5 h-3 w-3" />
                Resume
              </a>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-200 ${
                  darkMode 
                    ? "bg-gray-800 text-yellow-400 hover:text-yellow-300 hover:bg-gray-700" 
                    : "bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
                aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "dark" : "light"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {darkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 ${
                darkMode 
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full ${
                darkMode 
                  ? "text-white bg-gray-800 hover:bg-gray-700" 
                  : "text-gray-900 bg-gray-100 hover:bg-gray-200"
              }`}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              darkMode ? "bg-gray-900 border-b border-gray-800" : "bg-white border-b border-gray-200"
            }`}
          >
            <div className="px-4 pt-2 pb-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.href.substring(1)
                      ? darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                      : darkMode
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex items-center space-x-4 border-t border-gray-700">
                <a
                  href="https://www.linkedin.com/in/varun-anand-082b72257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                
                <a
                  href="https://github.com/varunanand07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={darkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                
                <a
                  href={resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  aria-label="Download Resume"
                >
                  <FiDownload className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
