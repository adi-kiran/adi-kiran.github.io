// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          className="text-blue-400 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 3 }}
          transition={{ duration: 5 }}
        >
          May the Force Be With You!
        </motion.p>
        <div className="mt-2 text-yellow-300 text-xs">
          Built with <span className="text-red-500">awesome skills</span> and{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-red-500 hover:text-blue-500 visited:text-purple-500"
          >
            Next.js
          </a>
          ,{' '}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-red-500 hover:text-blue-500 visited:text-purple-500"
          >
            Tailwind CSS
          </a>
          , and{' '}
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-red-500 hover:text-blue-500 visited:text-purple-500"
          >
            Framer Motion
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
