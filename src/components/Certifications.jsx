// src/components/Certifications.jsx
import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <div id="certifications" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div className="space-y-8">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center items-center"
            >
              {/* AWS Logo Image */}
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="mb-6 w-32 h-32 object-contain"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-xl">{cert.title}</h6>
              <p className="mb-1 text-neutral-400 italic">{cert.issuer}</p>
              <p className="mb-4 text-neutral-400">{cert.date}</p>
              <div className="mb-4">
                {cert.description.map((item, idx) => (
                  <p key={idx} className="mb-2">
                    {item}
                  </p>
                ))}
              </div>
              {cert.credentialLink && (
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  View Credential
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
