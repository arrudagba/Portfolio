"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    // Detecta a seção ativa baseado no hash da URL
    const handleHashChange = () => {
      const hash = window.location.hash || '/';
      setActiveSection(hash === '' ? '/' : hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (pathname) {
      setActiveSection(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Aqui você pode adicionar lógica para alterar o tema globalmente
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-6 lg:px-12">
        {/* Substituí as sombras coloridas por sombras pretas sutis */}
        <nav className={`max-w-7xl mx-auto transition-all duration-300 rounded-t-none rounded-b-2xl ${
          scrolled 
            ? 'bg-[#1C1C22]/90 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.3)]' 
            : 'bg-[#1C1C22] shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
        }`}>
          
          <div className="px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#0C73CD] to-[#0052b3] text-transparent bg-clip-text">
              GA
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative transition-colors font-medium pb-1 ${
                activeSection === '/' 
                  ? 'bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0C73CD] after:via-[#0052b3] after:to-[#0012b3]' 
                  : 'text-gray-300 hover:text-[#0C73CD]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#about' 
                  ? 'bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0C73CD] after:via-[#0052b3] after:to-[#0012b3]' 
                  : 'text-gray-300 hover:text-[#0C73CD]'
              }`}
            >
              About Me
            </Link>
            <Link 
              href="#projects" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#projects' 
                  ? 'bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0C73CD] after:via-[#0052b3] after:to-[#0012b3]' 
                  : 'text-gray-300 hover:text-[#0C73CD]'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className={`relative transition-colors pb-1 ${
                pathname === '/blog' 
                  ? 'bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0C73CD] after:via-[#0052b3] after:to-[#0012b3]' 
                  : 'text-gray-300 hover:text-[#0C73CD]'
              }`}
            >
              Posts
            </Link>
            <Link 
              href="#contact" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#contact' 
                  ? 'bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#0C73CD] after:via-[#0052b3] after:to-[#0012b3]' 
                  : 'text-gray-300 hover:text-[#0C73CD]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Theme Toggle & Hire Me Button */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300" />
              )}
            </button>

            {/* Hire Me Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex bg-[#0C73CD] hover:bg-[#0052b3] text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Hire Me
            </motion.a>
          </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}