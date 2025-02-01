"use client"

import { motion, AnimatePresence } from 'framer-motion';

export default function Menu({ isOpen, onClose }) {
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

   const handleMenuItemClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); 
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
            className="fixed top-0 left-0 h-full w-64 bg-[#18181b] z-50 selection:text-black selection:bg-[#EEEEEE]"
          >
            <div className="flex flex-col items-center pt-6">
              <img src="/logo-branco.svg" alt="Logo" className="h-[65px] w-[65px]" />
              <div className="w-2/3 h-px bg-white my-4"></div>
            </div>

            <ul className="p-4">
              {['ABOUT', 'PROGRAMMING LANGUAGES', 'KEY SKILLS', 'FLOSS PROJECTS', 'CORE VALUES', 'CONTACT'].map(
                (item, index) => (
                  <li
                    key={index}
                    className="p-2 text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleMenuItemClick(item.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="p-4 border-t border-gray-600 text-center text-[#A5A5A5]">
              <a className="underline pr-3" href="/EN">
                EN
              </a>
              |
              <a className="underline pl-3" href="/PT-BR">
                PT
              </a>
            </div>
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