"use client"

import { motion, AnimatePresence } from 'framer-motion';

export default function Menu({ isOpen, onClose }) {
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 h-full w-64 bg-[#3F3F46] z-50"
          >
            <ul className="p-4">
              {['ABOUT', 'PROGRAMMING LANGUAGES', 'KEY SKILLS', 'FLOSS PROJECTS', 'CORE VALUES', 'CONTACT'].map((item, index) => (
                <li key={index} className="p-2 text-white hover:bg-gray-700 cursor-pointer font-mono" onClick={onClose}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  );
}