"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Briefcase } from "lucide-react";
import Scene3D from "../3d/Scene3D";
import { useTheme } from "@/app/context/ThemeContext";
import CountUp from "react-countup";
import Lottie from "lottie-react";
import scrolldownAnimation from "../../../public/scrolldown.json";


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

  const { theme } = useTheme();
  // Color variables
  const titleColor = theme === 'light' ? 'hsl(var(--title))' : 'hsl(var(--text))';
  const specialColor = 'hsl(var(--primary))';
  const buttonBg = theme === 'light' ? '#83C5D8' : '#47D7FF';
  const buttonText = theme === 'light' ? '#000' : 'hsl(var(--background))';
  const linkColor = theme === 'light' ? '#83C5D8' : '#47D7FF';
  const textColor = 'hsl(var(--text))';
  const textSecondary = 'hsl(var(--text-secondary))';
  const surface = 'hsl(var(--surface))';
  const bg = 'hsl(var(--background))';

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--background))', color: textColor }}>
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
                  <span style={{ color: textColor }}>Hello, I'm </span>
                  <span
                    className="bg-gradient-to-r text-transparent bg-clip-text"
                    style={{
                      backgroundImage: theme === 'light'
                        ? 'linear-gradient(90deg, #83C5D8, #83C5D8)'
                        : 'linear-gradient(90deg, #47D7FF, #20B8E8, #0EA5D0)'
                    }}
                  >
                    Gabriel Arruda
                  </span>
                </h1>

                <p className="max-w-xl leading-relaxed" style={{ color: textSecondary }}>
                  I'm a Software Engineer and Cybersecurity enthusiast, currently
                  completing a degree in Computer Science. I'm based in Brazil and
                  specialize in <span className="font-semibold" style={{ color: specialColor }}>Full-stack Development</span> and <span className="font-semibold" style={{ color: specialColor }}>Application Security</span>.
                </p>

                {/* CTA + SOCIAL */}
                <div className="flex items-center gap-6 pt-4">

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
                  style={{ backgroundColor: buttonBg, color: bg }}
                >
                  <Briefcase className="w-4 h-4" />
                  Timeline
                </motion.a>


                <div className="flex gap-3">
                  <a
                    href="https://github.com/arrudagba"
                    target="_blank"
                    className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: surface, borderColor: textSecondary }}
                  >
                    <Github className="w-5 h-5" style={{ color: specialColor }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arrudagba/"
                    target="_blank"
                    className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: surface, borderColor: textSecondary }}
                  >
                    <Linkedin className="w-5 h-5" style={{ color: specialColor }} />
                  </a>
                  <a
                    href="mailto:arrudagbadev@gmail.com"
                    className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: surface, borderColor: textSecondary }}
                  >
                    <Mail className="w-5 h-5" style={{ color: specialColor }} />
                  </a>
                  <a
                    href="https://mastodon.social/@arrudagba"
                    target="_blank"
                    className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: surface, borderColor: textSecondary }}
                  >
                    <Send className="w-5 h-5" style={{ color: specialColor }} />
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
                <div className="relative md:h-[350px] md:w-[350px] w-[300px] h-[300px] flex items-center justify-center">
                  {/* SVG Animation Circle - positioned around the 3D */}
                  <svg 
                    className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none" 
                    fill="transparent" 
                    viewBox="0 0 506 506" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        {theme === 'light' ? (
                          <>
                            <stop offset="0%" stopColor="#83C5D8"></stop>
                            <stop offset="100%" stopColor="#83C5D8"></stop>
                          </>
                        ) : (
                          <>
                            <stop offset="0%" stopColor="#47D7FF"></stop>
                            <stop offset="100%" stopColor="#20B8E8"></stop>
                          </>
                        )}
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
                <div className="flex flex-col items-center gap-0 mt-8">
                  <span
                    className="text-sm font-medium -mt-2 pb-1"
                    style={{
                      color: theme === 'light' ? linkColor : specialColor
                    }}
                  >
                    Scroll Down
                  </span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-5 h-5"
                  >
                    <Lottie animationData={scrolldownAnimation} loop={true} />
                  </motion.div>
                </div>
            </motion.div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-[50px]">
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
