import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <div id="contact" className={`py-16 ${darkMode ? 'border-b border-neutral-800' : 'border-b border-gray-200'}`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-4xl font-bold"
      >
        <span className={darkMode ? "text-white" : "text-gray-900"}>Get in Touch</span>
        <div className="mt-2 mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className={`mt-1 mr-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {CONTACT.address}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <FaPhone className={`mr-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {CONTACT.phoneNo}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <FaEnvelope className={`mr-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <a 
                    href={`mailto:${CONTACT.email}`} 
                    className={`border-b border-transparent hover:border-current ${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'}`}
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/varun-anand-082b72257/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'} transition-colors`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://github.com/varunanand07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 text-purple-400 hover:bg-gray-700' : 'bg-gray-100 text-purple-600 hover:bg-gray-200'} transition-colors`}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send a Message
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'
                    } border focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'
                    } border focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-purple-500'
                    } border focus:outline-none focus:ring-1 focus:ring-purple-500`}
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;