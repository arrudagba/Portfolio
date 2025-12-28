"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
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



  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        {/* Substituí as sombras coloridas por sombras pretas sutis */}
        <nav 
          className={`transition-all duration-300 rounded-t-none rounded-b-2xl ${
            scrolled 
              ? 'backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.3)]' 
              : 'shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
          }`}
          style={{ 
            backgroundColor: scrolled 
              ? 'hsl(var(--surface) / 0.9)' 
              : 'hsl(var(--surface))'
          }}
        >
          
          <div className="px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={theme === 'dark' ? '/logo-bright.svg' : '/logo-dark.svg'} 
              alt="GA Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative transition-colors font-medium pb-1 ${
                activeSection === '/' 
                  ? 'bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#47D7FF] after:via-[#20B8E8] after:to-[#0EA5D0]' 
                  : 'hover:text-[#47D7FF]'
              }`}
              style={{ color: activeSection === '/' ? undefined : 'hsl(var(--text-secondary))' }}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#about' 
                  ? 'bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#47D7FF] after:via-[#20B8E8] after:to-[#0EA5D0]' 
                  : 'hover:text-[#47D7FF]'
              }`}
              style={{ color: activeSection === '#about' ? undefined : 'hsl(var(--text-secondary))' }}
            >
              About Me
            </Link>
            <Link 
              href="#projects" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#projects' 
                  ? 'bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#47D7FF] after:via-[#20B8E8] after:to-[#0EA5D0]' 
                  : 'hover:text-[#47D7FF]'
              }`}
              style={{ color: activeSection === '#projects' ? undefined : 'hsl(var(--text-secondary))' }}
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className={`relative transition-colors pb-1 ${
                pathname === '/blog' 
                  ? 'bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#47D7FF] after:via-[#20B8E8] after:to-[#0EA5D0]' 
                  : 'hover:text-[#47D7FF]'
              }`}
              style={{ color: pathname === '/blog' ? undefined : 'hsl(var(--text-secondary))' }}
            >
              Posts
            </Link>
            <Link 
              href="#contact" 
              className={`relative transition-colors pb-1 ${
                activeSection === '#contact' 
                  ? 'bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#47D7FF] after:via-[#20B8E8] after:to-[#0EA5D0]' 
                  : 'hover:text-[#47D7FF]'
              }`}
              style={{ color: activeSection === '#contact' ? undefined : 'hsl(var(--text-secondary))' }}
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Theme Toggle & Hire Me Button */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
              style={{ 
                backgroundColor: 'hsl(var(--surface))', 
                borderColor: 'hsl(var(--text-secondary) / 0.2)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5" style={{ color: 'hsl(var(--text-secondary))' }} />
              )}
            </button>

            {/* Hire Me Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex bg-[#47D7FF] hover:bg-[#20B8E8] px-6 py-2 rounded-full font-medium transition-colors"
              style={{ color: 'hsl(var(--background))' }}
            >
              Hire Me
            </motion.a>
          </div>
          </div>
        </nav>
        </div>
      </div>
    </motion.header>
  );
}