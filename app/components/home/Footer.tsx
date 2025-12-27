"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Logo */}
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#0C73CD] to-[#0052b3] text-transparent bg-clip-text">
                Gabriel Arruda
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Software Engineer & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Center - Contact Info */}
          <div className="space-y-2 text-center md:text-left">
            <a 
              href="mailto:arrudagbadev@gmail.com"
              className="block text-gray-300 hover:text-white transition-colors"
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
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0C73CD] hover:border-[#0C73CD] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arrudagba/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0C73CD] hover:border-[#0C73CD] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arrudagbadev@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0C73CD] hover:border-[#0C73CD] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://mastodon.social/@arrudagba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0C73CD] hover:border-[#0C73CD] transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom - Copyright & Settings */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright © 2025 Gabriel Arruda</p>
          
          <button className="hover:text-white transition-colors">
            Cookie Settings
          </button>
        </div>
        </div>
      </div>
    </footer>
  );
}
