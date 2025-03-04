import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Animation configuration
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ darkMode }) => {
  return (
    <div className="min-h-screen flex items-center pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium mb-2 py-1 px-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20"
          >
            Full-Stack Developer
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Varun <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Anand</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`text-lg max-w-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            {HERO_CONTENT}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg shadow-purple-500/20"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg font-medium border ${
                darkMode 
                  ? 'border-gray-700 text-white hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              } transition-colors`}
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <a 
              href="https://www.linkedin.com/in/varun-anand-082b72257/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
              } transition-colors`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            
            <a 
              href="https://github.com/varunanand07"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 text-purple-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-purple-600 hover:bg-gray-200'
              } transition-colors`}
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>
          <div className="relative p-4">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={profilePic} 
                alt="Varun Anand" 
                className="w-full h-auto rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
