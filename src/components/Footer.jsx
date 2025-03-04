import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { CONTACT } from "../constants";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Varun Anand. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href={`mailto:${CONTACT.email}`}
              className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/varun-anand-082b72257/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/varunanand07"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${darkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 