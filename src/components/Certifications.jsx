import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const Certifications = ({ darkMode }) => {
  return (
    <div id="certifications" className={`py-16 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-4xl font-bold"
      >
        <span className={darkMode ? "text-white" : "text-gray-900"}>Certifications</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.h2>
      
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900/50 hover:bg-gray-800/70' : 'bg-white hover:bg-gray-50'} transition-all duration-300 mb-8 w-full max-w-2xl`}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                {cert.image && (
                  <div className="shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {cert.title}
                  </h3>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {cert.issuer}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {cert.date}
                  </p>
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center mt-3 text-sm ${
                        darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'
                      } transition-colors`}
                    >
                      View Certificate <HiExternalLink className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;