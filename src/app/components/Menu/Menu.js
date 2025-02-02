"use client"

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoDark from '../../../assets/images/logo-dark.svg';
import logoBright from '../../../assets/images/logo-bright.svg';

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

  const { isDarkMode } = useTheme();

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
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#18181b] z-50 selection:text-black selection:bg-[#EEEEEE] flex flex-col"
          >
            <div className="flex flex-col items-center pt-6">
            {isDarkMode ? (
                <Image src={logoDark} alt="Logo" width={65} height={65} />
                ) : (
                <Image src={logoBright} alt="Logo" width={65} height={65} />
            )}
            <div className="w-2/3 h-px bg-black dark:bg-white my-4"></div>
            </div>

            <ul className="flex flex-col p-4">
              {['ABOUT', 'PROGRAMMING LANGUAGES', 'KEY SKILLS', 'CORE VALUES', 'CONTACT'].map(
                (item, index) => (
                  <li
                    key={index}
                    className="p-2 text-black dark:text-white hover:bg-gray-700 hover:text-white cursor-pointer"
                    onClick={() => handleMenuItemClick(item.toLowerCase().replace(/\s+/g, '-'))}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="flex-grow"></div>

            <div className="flex justify-center gap-7 text-1xlg p-4 border-t border-gray-600 text-black dark:text-[#A5A5A5]">
              <a href="https://github.com/arrudagba">
                <FontAwesomeIcon icon={['fab', 'github']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/arrudagba/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="https://mastodon.social/@arrudagba">
                <FontAwesomeIcon icon={['fab', 'mastodon']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="mailto:gabrielarrudahash@gmail.com">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
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