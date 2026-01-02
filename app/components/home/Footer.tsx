"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { FaMastodon } from "react-icons/fa";
import { useTheme } from "@/app/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="py-12" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--text))' }}>
      <div className="px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left - Logo & Name */}
          <div className="flex items-center gap-3">
            <img 
              src={theme === 'dark' ? '/logo-bright.svg' : '/logo-dark.svg'} 
              alt="GA Logo" 
              className="h-8 w-auto"
            />
            <div>
              <div className="text-2xl font-bold mb-1">
                <span className="bg-gradient-to-r text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' }}>
                  Gabriel Arruda
                </span>
              </div>
              <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
                Full-stack Developer
              </p>
            </div>
          </div>


          {/* Right - Social Links */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="https://github.com/arrudagba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gabriel Arruda's GitHub profile"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arrudagba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gabriel Arruda's LinkedIn profile"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arrudagbadev@gmail.com"
              aria-label="Send email to Gabriel Arruda"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://mastodon.social/@arrudagba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Gabriel Arruda on Mastodon"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <FaMastodon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom - Copyright & Settings */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
          <p>Copyright © 2025 Gabriel Arruda</p>
        </div>
      </div>
    </footer>
  );
}
