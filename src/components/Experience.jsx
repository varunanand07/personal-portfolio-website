import React from 'react';
import { EXPERIENCES } from '../constants';
import { FaGithub } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className='mb-2 font-semibold'>
                {experience.role} - {" "}
                <span className='text-sm text-purple-200'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
              ))}
            </div>
            <div className="rounded-2xl p-4 flex items-center justify-center" style={{ width: '100px', height: '100%' }}>
              {experience.showGithub && (
                <a href={experience.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-7xl text-purple-800" />
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
