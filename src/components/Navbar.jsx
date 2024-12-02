// src/components/Navbar.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi"; // Import download icon from react-icons
import resume from "../assets/Resume_2024_11.pdf"; 

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Optional logo or other elements */}
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-3xl">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/varun-anand-082b72257/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-blue-500 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/varunanand07" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-purple-900 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* Resume Button */}
        <a
          href={resume}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-200 text-black rounded-full  transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Download Resume"
        >
          <FiDownload className="mr-2" />
          <span className="text-lg font-medium">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
