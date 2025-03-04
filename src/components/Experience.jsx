import React from 'react';
import { EXPERIENCES } from '../constants';
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { IoMdVideocam } from "react-icons/io";
import { motion } from "framer-motion";

import dellLogo from '../assets/dell-logo.jpg';
import liferayLogo from '../assets/liferay-logo.png';

const Experience = ({ darkMode }) => {
  return (
    <div id="experience" className={`py-16 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold"
      >
        <span className={darkMode ? "text-white" : "text-gray-900"}>Experience</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2 hidden sm:block"></div>
        
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-1/2 top-0 hidden sm:block"></div>
              
              <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 ml-auto' : 'sm:pl-12'}`}>
                <div className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-900/40' : 'bg-white'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.role}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className={`text-lg font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {experience.company}
                        </span>
                        {/* Company logo */}
                        {experience.company === "Dell Technologies"}
                        {experience.company === "Liferay International"}
                      </div>
                    </div>
                    <span className={`text-sm mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {experience.year}
                    </span>
                  </div>
                  
                  <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {experience.description.map((item, idx) => (
                      <p key={idx} className="mb-3 text-sm leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex mt-6 gap-4">
                    {experience.githubLink && (
                      <a 
                        href={experience.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 ${
                          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'
                        } transition-colors`}
                      >
                        <FaGithub className="text-xl" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    
                    {experience.documentLink && (
                      <a
                        href={experience.documentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 ${
                          darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                        } transition-colors`}
                      >
                        <HiDocumentText className="text-xl" />
                        <span className="text-sm font-medium">Docs</span>
                      </a>
                    )}
                    
                    {experience.videoLink && (
                      <a
                        href={experience.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 ${
                          darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'
                        } transition-colors`}
                      >
                        <IoMdVideocam className="text-xl" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
