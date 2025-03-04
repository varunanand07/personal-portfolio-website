import { PROJECTS } from "../constants";
import { FaGithub, FaCode, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { IoMdVideocam } from "react-icons/io";

const getProjectIcon = (title) => {
  // Assign appropriate icons based on project title or type
  if (title.toLowerCase().includes('app') || title.toLowerCase().includes('mobile')) {
    return <FaMobileAlt className="text-4xl text-purple-500" />;
  } else if (title.toLowerCase().includes('website') || title.toLowerCase().includes('portfolio')) {
    return <FaLaptopCode className="text-4xl text-blue-500" />;
  } else if (title.toLowerCase().includes('api') || title.toLowerCase().includes('server')) {
    return <FaServer className="text-4xl text-green-500" />;
  }
  return <FaCode className="text-4xl text-purple-500" />;
};

const Projects = ({ darkMode }) => {
  return (
    <div id="projects" className={`pb-16 pt-8 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`}>
      <h2 className="mb-16 text-center text-4xl font-bold">
        <span className={darkMode ? "text-white" : "text-gray-900"}>Projects</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </h2>
      
      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700' 
                : 'bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100'
            }`}
          >
            <div className="p-8">
              <div className="flex items-start">
                <div className="hidden sm:block mr-6">
                  <div className={`p-4 rounded-xl ${
                    darkMode 
                      ? 'bg-gray-800/50' 
                      : 'bg-gray-100'
                  } flex items-center justify-center`}>
                    {getProjectIcon(project.title)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} transition-colors`}
                        >
                          <FaGithub className="text-xl" />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      
                      {project.documentLink && (
                        <a
                          href={project.documentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
                        >
                          <HiDocumentText className="text-xl" />
                          <span className="text-sm font-medium">Docs</span>
                        </a>
                      )}
                      
                      {project.videoLink && (
                        <a
                          href={project.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 ${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'} transition-colors`}
                        >
                          <IoMdVideocam className="text-xl" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className={`absolute left-0 top-0 w-1 h-full rounded-full ${darkMode ? 'bg-purple-500/30' : 'bg-purple-200'}`}></div>
                    <div className={`ml-6 mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description.map((item, idx) => (
                        <p key={idx} className="mb-3 text-sm leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode 
                            ? 'bg-purple-900/50 text-purple-300' 
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
