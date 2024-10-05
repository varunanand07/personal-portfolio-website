import { FaLinkedin, FaGithub } from "react-icons/fa";
import cv from "../assets/Va (4).png"; // Your CV image
import resume from "../assets/Resume_2024_2.pdf"; // Import your resume PDF

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Optional logo or other elements */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/varun-anand-082b72257/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/varunanand07" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={resume} // Link to the imported resume PDF
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={cv} // Use your CV image as the link
            alt="Curriculum Vitae"
            className="w-20 h-20 object-cover" 
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
