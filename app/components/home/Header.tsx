"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/context/ThemeContext";

const navItems = [
  { href: "/", label: "Home", hash: "/" },
  { href: "#about", label: "About Me", hash: "#about" },
  { href: "#skills", label: "Skills", hash: "#skills" },
  { href: "#projects", label: "Projects", hash: "#projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('/');
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isClickAnimation, setIsClickAnimation] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Limpar timeout anterior se existir
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Ativar animação rápida de clique
        setIsClickAnimation(true);
        setTimeout(() => setIsClickAnimation(false), 400);

        // Desabilitar scroll spy e definir seção imediatamente
        setIsManualNavigation(true);
        setActiveSection(href);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setMobileMenuOpen(false);
      }
    } else if (href === '/') {
      e.preventDefault();
      
      // Limpar timeout anterior se existir
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Ativar animação rápida de clique
      setIsClickAnimation(true);
      setTimeout(() => setIsClickAnimation(false), 400);
      
      setIsManualNavigation(true);
      setActiveSection('/');
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
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
    let lastScrollTime = Date.now();
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Atualizar o tempo do último scroll
      lastScrollTime = Date.now();
      
      // Não executar scroll spy durante navegação manual
      if (isManualNavigation) {
        // Limpar timeout anterior
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        // Detectar quando o scroll parou completamente
        const timeout = setTimeout(() => {
          const timeSinceLastScroll = Date.now() - lastScrollTime;
          // Se passou 50ms sem novo scroll, considerar que parou
          if (timeSinceLastScroll >= 50) {
            setIsManualNavigation(false);
          }
        }, 50);
        
        setScrollTimeout(timeout);
        return;
      }
      
      // Scroll spy - detectar seção ativa
      const sections = ['about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 150;
      
      // Se estiver no topo, marcar Home como ativo
      if (window.scrollY < 200) {
        setActiveSection('/');
        return;
      }
      
      // Verificar qual seção está visível
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isManualNavigation, scrollTimeout]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
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

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.hash}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`relative transition-colors font-medium pb-1 ${
                        activeSection === item.hash 
                          ? 'text-transparent bg-clip-text' 
                          : 'hover:text-[hsl(var(--primary))]'
                      }`}
                      style={{
                        color: activeSection === item.hash ? undefined : 'hsl(var(--text-secondary))',
                        backgroundImage: activeSection === item.hash ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))' : undefined
                      }}
                    >
                      {item.label}
                      {activeSection === item.hash && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5"
                          style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))' }}
                          transition={
                            isClickAnimation
                              ? { type: "tween", duration: 0.2, ease: "easeOut" }
                              : { type: "tween", duration: 0.3, ease: "easeInOut" }
                          }
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Right Side */}
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

                  {/* Resume Button - Desktop */}
                  <motion.a
                    href="/resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:inline-flex px-6 py-2 rounded-full font-medium transition-colors"
                    style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))', color: 'hsl(var(--background))' }}
                  >
                    Resume
                  </motion.a>

                  {/* Blog Button - Desktop */}
                  <motion.a
                    href="/blog"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent hidden md:inline-flex px-6 py-2 rounded-full font-medium transition-colors border-2"
                    style={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--text))' }}
                  >
                    Blog
                  </motion.a>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                    style={{ 
                      backgroundColor: 'hsl(var(--surface))', 
                      borderColor: 'hsl(var(--text-secondary) / 0.2)',
                    }}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5" style={{ color: 'hsl(var(--text))' }} />
                    ) : (
                      <Menu className="w-5 h-5" style={{ color: 'hsl(var(--text))' }} />
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'hsl(var(--background))' }}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.hash}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-3xl font-semibold transition-colors ${
                        activeSection === item.hash 
                          ? 'text-transparent bg-clip-text' 
                          : ''
                      }`}
                      style={{
                        color: activeSection === item.hash ? undefined : 'hsl(var(--text))',
                        backgroundImage: activeSection === item.hash ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))' : undefined
                      }}
                    >
                      {item.label}
                      {activeSection === item.hash && (
                        <motion.span
                          layoutId="mobileActiveUnderline"
                          className="block h-1 mt-2 w-16 rounded-full"
                          style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Buttons */}
              <div className="mt-auto pb-12 flex flex-col gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="/resume.pdf"
                  className="w-full py-4 rounded-full font-medium text-center text-lg"
                  style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-dark)))', color: 'hsl(var(--background))' }}
                >
                  Resume
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  href="/blog"
                  className="w-full py-4 rounded-full font-medium text-center text-lg border-2"
                  style={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--text))' }}
                >
                  Blog
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}