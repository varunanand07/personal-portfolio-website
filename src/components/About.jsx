import React, { useRef } from "react";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiKubernetes } from "react-icons/si";
import { FaNodeJs, FaAws, FaPython, FaDocker, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

const About = ({ darkMode }) => {
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
    <div id="about" className={`py-16 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold"
      >
        <span className={darkMode ? "text-white" : "text-gray-900"}>About</span>{" "}
        <span className="text-purple-500">Me</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.h2>
      
      <div className="max-w-5xl mx-auto">
        {/* Animated card with intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'} shadow-xl`}
        >
          <div className="absolute -mt-12 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl shadow-lg">
            <HiOutlineSparkles className="text-2xl text-white" />
          </div>
          
          <h3 className={`text-2xl font-bold mb-4 mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Hello, I'm Varun!
          </h3>
          
          <div className="space-y-4">
            {ABOUT_TEXT.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;