// src/components/ContactMe.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe: React.FC = () => {

  return (
    <section id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">Contact Me</h2>
        <div className="md:flex flex-column items-evenly justify-evenly gap-4 text-xl text-yellow-400">
          <div className="flex items-center pb-4">
            Connect on LinkedIn: &nbsp;
            <a
              href="https://linkedin.com/in/adithya-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="text-white hover:text-blue-600">adithya-kiran</span>
            </a>
          </div>
          <div className="flex items-center pb-4">
            Check out my Github :  &nbsp;
            <a
              href="https://github.com/adi-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-600"
            >
              <FaGithub className="w-6 h-6" />
              <span>adi-kiran</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
