"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Logo */}
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' }}>
                Gabriel Arruda
              </span>
            </div>
            <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
              Software Engineer & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Center - Contact Info */}
          <div className="space-y-2 text-center md:text-left">
            <a 
              href="mailto:arrudagbadev@gmail.com"
              className="block transition-colors" style={{ color: 'hsl(var(--text-secondary))' }}
            >
              arrudagbadev@gmail.com
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="https://github.com/arrudagba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arrudagba/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--surface))', color: 'hsl(var(--text))' }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arrudagbadev@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://mastodon.social/@arrudagba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors hover:bg-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]"
              style={{ color: 'hsl(var(--text))' }}
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom - Copyright & Settings */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
          <p>Copyright © 2025 Gabriel Arruda</p>
          
          <button className="transition-colors" style={{ color: 'hsl(var(--text-secondary))' }}>
            Cookie Settings
          </button>
        </div>
        </div>
      </div>
    </footer>
  );
}
