"use client"

import { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../lib/fontawesome';
import { useTheme } from './ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div id="top-menu" className="fixed top-0 left-0 right-0 bg-[#3F3F46] z-50 shadow-lg shadlow-black/50 selection:text-black selection:bg-[#EEEEEE]">
        <div className="px-4 py-2 h-12 flex flex-row justify-between">
          <div id="icon-menu" className="hover:cursor-pointer text-2xl self-center material-symbols-outlined text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="justify-center flex flex-row items-center">
            <a href="/" aria-label="Logo">
              <img src="/logo-branco.svg" alt="Logo" className="h-[35px] w-[35px]" />
            </a>
          </div>
          <div className="flex flex-row self-center items-center">
            <a className="text-white hover:text-[#A5A5A5] pl-2" href="static/resume.pdf" target="_blank">
              Resume
            </a>
            <a className="text-white hover:text-[#A5A5A5] px-5" href="blog">
              Blog
            </a>
            <div className="flex flex-row pr-2">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    />
                    <div
                    className={`w-14 h-7 bg-[#039dfc] rounded-full peer peer-checked:bg-gray-900 border border-[#A5A5A5] relative transition-colors duration-300`}
                    >
                    <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                        <FontAwesomeIcon icon={faSun} className="text-[#ecf00c]" />
                    </div>
                    <div className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMoon} className="text-[#A5A5A5]" />
                    </div>
                    <div
                        className={`absolute w-[20px] h-[20px] bg-white rounded-full transition-transform duration-500 ${
                        isDarkMode ? 'translate-x-[30px]' : 'translate-x-1'
                        } top-1/2 transform -translate-y-1/2`}
                    ></div>
                    </div>
                </label>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}