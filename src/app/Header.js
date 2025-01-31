"use client"

import { useState } from 'react';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div id="top-menu" className="fixed top-0 left-0 right-0 bg-[#3F3F46] z-50 shadow-sm">
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
            <a className="text-[#A5A5A5] hover:text-white pl-2" href="static/resume.pdf" target="_blank">
              Resume
            </a>
            <a className="text-[#A5A5A5] hover:text-white px-5" href="blog">
              Blog
            </a>
            <div className="flex flex-row pr-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}