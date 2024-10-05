import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { IoMdVideocam } from "react-icons/io"; // Video icon

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                width={150} 
                height={150} 
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <div className='mb-4 text-neutral-400'>
                {project.description.map((item, idx) => (
                  <p key={idx} className="mb-4">{item}</p> // Add margin-bottom for spacing
                ))}
              </div>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                  {tech}
                </span>
              ))}
            </div>
            <div className="rounded-2xl p-4 flex flex-col items-center justify-center" style={{ width: '100px', height: '100%' }}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-7xl text-purple-800 mb-2" />
              </a>
              {project.documentLink && (
                <a href={project.documentLink} target="_blank" rel="noopener noreferrer">
                  <HiDocumentText className="text-5xl text-white-300 mt-6" />
                </a>
              )}
              {project.videoLink && (
                <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="mt-2">
                  <IoMdVideocam className="text-5xl text-blue-600 mt-6" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
