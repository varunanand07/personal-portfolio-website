import React, { useRef } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiKubernetes } from "react-icons/si";
import { FaNodeJs, FaAws, FaPython, FaDocker, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

const Technologies = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const techItems = [
    { icon: <IoLogoJavascript className="text-5xl text-yellow-300" />, name: "JavaScript", level: "Advanced" },
    { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, name: "React", level: "Advanced" },
    { icon: <FaNodeJs className="text-5xl text-green-500" />, name: "Node.js", level: "Intermediate" },
    { icon: <BiLogoPostgresql className="text-5xl text-sky-700" />, name: "PostgreSQL", level: "Intermediate" },
    { icon: <FaAws className="text-5xl text-orange-400" />, name: "AWS", level: "Intermediate" },
    { icon: <FaPython className="text-5xl text-blue-500" />, name: "Python", level: "Advanced" },
    { icon: <FaDocker className="text-5xl text-blue-700" />, name: "Docker", level: "Intermediate" },
    { icon: <SiMongodb className="text-5xl text-green-500" />, name: "MongoDB", level: "Intermediate" },
    { icon: <FaJava className="text-5xl text-red-500" />, name: "Java", level: "Intermediate" },
    { icon: <SiKubernetes className="text-5xl text-blue-600" />, name: "Kubernetes", level: "Intermediate" },
  ];

  // Container animation for the grid
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Item animation for each tech card
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div id="skills" className={`py-16 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold"
      >
        <span className={darkMode ? "text-white" : "text-gray-900"}>Tech Stack</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {techItems.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className={`flex flex-col items-center p-6 rounded-xl ${
              darkMode ? 'bg-gray-900/40 hover:bg-gray-800/60' : 'bg-white hover:bg-gray-50'
            } shadow-md transition-colors duration-300`}
          >
            {tech.icon}
            <h3 className={`mt-3 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tech.name}</h3>
            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{tech.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;