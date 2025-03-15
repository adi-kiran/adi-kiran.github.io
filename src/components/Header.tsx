import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 w-full bg-black shadow z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <motion.h1
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="/" >Adithya Kiran</a>
          </motion.h1>
          <nav className="hidden md:flex space-x-6 text-yellow-400">
            <a href="/#about" className="hover:text-gray-400">About Me</a>
            <a href="/#journey" className="hover:text-gray-400">My Journey</a>
            <a href="projects" className="hover:text-gray-400">Projects</a>
            <a href="/#skills" className="hover:text-gray-400">Skills</a>
            <a href="/#contact" className="hover:text-gray-400">Contact</a>
            <a
              href="https://github.com/adi-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-blue-600"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/adithya-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-800 px-2 pb-3 text-yellow-400"
          >
            <a href="/#about" className="block px-3 py-2 rounded hover:text-gray-400">About Me</a>
            <a href="/#journey" className="block px-3 py-2 rounded hover:text-gray-400">My Journey</a>
            <a href="projects" className="block px-3 py-2 rounded hover:text-gray-400">Projects</a>
            <a href="/#skills" className="block px-3 py-2 rounded hover:text-gray-400">Skills</a>
            <a href="/#contact" className="block px-3 py-2 rounded hover:text-gray-400">Contact</a>
            <a
              href="https://github.com/adi-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white hover:text-blue-600"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/adithya-kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-blue-400 hover:text-blue-600"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
