import React from 'react';
import { EXPERIENCES } from '../constants';
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { IoMdVideocam } from "react-icons/io";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-200">
                  {experience.company}
                </span>
              </h6>
              <div className='mb-4 text-neutral-400'>
                {experience.description.map((item, idx) => (
                  <p key={idx} className="mb-4">{item}</p>
                ))}
              </div>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                  {tech}
                </span>
              ))}
            </motion.div>
            <div className="rounded-2xl p-4 flex flex-col items-center justify-center" style={{ width: '100px', height: '100%' }}>
              {experience.showGithub && (
                <a href={experience.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-7xl text-purple-800 mb-2" />
                </a>
              )}
              {experience.documentLink && (
                <a href={experience.documentLink} target="_blank" rel="noopener noreferrer">
                  <HiDocumentText className="text-5xl text-white-300 mt-10" />
                </a>
              )}
              {experience.videoLink && (
                <a href={experience.videoLink} target="_blank" rel="noopener noreferrer" className="mt-2">
                  <IoMdVideocam className="text-5xl text-blue-600 mt-10" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
