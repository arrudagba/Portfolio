"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Briefcase, ChevronDown } from "lucide-react";
import Scene3D from "../3d/Scene3D";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

const roles = [
  "Software Developer",
  "UX/UI Designer",
  "Full-stack Developer",
  "Pentester",
];

function Stat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="text-5xl font-extrabold"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        <CountUp end={value} duration={4} suffix={suffix} />
      </span>
      <span className="text-sm text-gray-400 text-left leading-tight max-w-[100px]">{label}</span>
    </div>
  );
}


export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen bg-[#1C1C22] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hello, I'm </span>
                <span className="bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text">
                    Gabriel Arruda
                </span>
                </h1>

                <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                I'm a passionate{" "}
                <span className="text-[#47D7FF] font-medium">{displayText}</span>
                <span className="animate-pulse">|</span>
                </h2>

                <p className="text-gray-400 max-w-xl leading-relaxed">
                I am a Software Engineer and Cybersecurity enthusiast, currently
                completing my degree in Computer Science. I've developed a strong
                foundation in software development and a deep passion for protecting
                systems from emerging threats.
                </p>

                {/* CTA + SOCIAL */}
                <div className="flex items-center gap-6 pt-4">
                <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#47D7FF] hover:bg-[#20B8E8] text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                >
                    <Briefcase className="w-4 h-4" />
                    Timeline
                </motion.a>

                <div className="flex gap-3">
                    <a
                    href="https://github.com/arrudagba"
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#47D7FF]/20 hover:border-[#47D7FF] transition-colors"
                    >
                    <Github className="w-5 h-5" />
                    </a>
                    <a
                    href="https://www.linkedin.com/in/arrudagba/"
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#47D7FF]/20 hover:border-[#47D7FF] transition-colors"
                    >
                    <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                    href="mailto:arrudagbadev@gmail.com"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#47D7FF]/20 hover:border-[#47D7FF] transition-colors"
                    >
                    <Mail className="w-5 h-5" />
                    </a>
                    <a
                    href="https://mastodon.social/@arrudagba"
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#47D7FF]/20 hover:border-[#47D7FF] transition-colors"
                    >
                    <Send className="w-5 h-5" />
                    </a>
                </div>
                </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex flex-col items-center justify-center relative"
            >
                <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                  {/* SVG Animation Circle - positioned around the 3D */}
                  <svg 
                    className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" 
                    fill="transparent" 
                    viewBox="0 0 506 506" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#47D7FF"></stop>
                        <stop offset="100%" stopColor="#20B8E8"></stop>
                      </linearGradient>
                    </defs>
                    <circle 
                      cx="253" 
                      cy="253" 
                      r="240" 
                      stroke="url(#circleGradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="animate-dash"
                    />
                  </svg>
                  
                  {/* 3D Model - centered */}
                  <div className="relative z-10">
                    <Scene3D />
                  </div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ 
                    opacity: { delay: 1, duration: 0.5 },
                    y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                  }}
                  className="flex flex-col items-center gap-2 mt-8"
                >
                  <span className="text-sm bg-gradient-to-r from-[#47D7FF] via-[#20B8E8] to-[#0EA5D0] text-transparent bg-clip-text font-medium">Scroll Down</span>
                  <ChevronDown className="w-6 h-6 text-[#47D7FF]" />
                </motion.div>
            </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            <Stat value={2} suffix="+" label="Years of experience" />
            <Stat value={7} label="Completed Projects" />
            <Stat value={20} suffix="+" label="Technical Skills" />
            <Stat value={100} suffix="%" label="Dedication" />
            </div>
        </div>
      </div>
        </section>

  );
}
