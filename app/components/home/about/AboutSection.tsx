"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";
import CareerTimeline from "./timeline/CareerTimeline";

export default function AboutSection() {
  const { theme } = useTheme();
  const accent = 'hsl(var(--primary))';
  const bg = 'hsl(var(--background))';
  const surface = 'hsl(var(--surface))';
  const text = 'hsl(var(--text))';
  const textSecondary = 'hsl(var(--text-secondary))';
  return (
    <section id="about" className="py-12" style={{ backgroundColor: bg }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-8"
              style={{ color: text }}
            >
              About Me
            </motion.h2>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: textSecondary }}>
              <p>
                My name is Gabriel Arruda (aka <a href="https://github.com/arrudagba" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: accent }}>arrudagba</a>), I’m 21 years old, based in <span className="font-semibold" style={{ color: accent }}>Rio de Janeiro, Brazil</span>. I have <span className="font-semibold" style={{ color: accent }}>2+ years</span> of experience as a <span className="font-semibold" style={{ color: accent }}>Full‑stack Developer</span>, <span className="font-semibold" style={{ color: accent }}>UI/UX Designer</span> and <span className="font-semibold" style={{ color: accent }}>Pentester</span>.
              </p>

              <p>
                I’m currently pursuing a degree in <span className="font-semibold">Computer Science</span> in PUC-Rio and focus on building secure, well‑structured applications that balance performance, usability, and security.
              </p>

              <p>
                My main stack includes <span className="font-semibold" style={{ color: accent }}>React, Next.js, Express</span>, and backend tools like <span className="font-semibold">Actix</span> and <span className="font-semibold">FastAPI</span>. I also have hands‑on experience in <span className="font-semibold">cybersecurity</span> and Red Team operations.
              </p>

              <p>
                I work at the intersection of software engineering and security — from designing interfaces and APIs to hardening systems, reviewing code, and exploring vulnerabilities — always aiming for practical, reliable solutions rather than overengineered ones.
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
                style={{ background: `linear-gradient(90deg, ${accent}, hsl(var(--primary-dark)))`, color: bg }}
              >
                Discover More
                <span className="text-xl">→</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent px-8 py-3 rounded-full font-medium border-2 transition-colors"
                style={{ borderColor: accent, color: text }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 rounded-3xl transform rotate-6" style={{ background: theme === 'light' ? 'linear-gradient(135deg, hsl(var(--primary)) / 0.1, hsl(var(--primary)) / 0.03)' : 'linear-gradient(135deg, hsl(var(--primary)) / 0.06, hsl(var(--primary)) / 0.02)' }}></div>
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/assets/profile/me.svg"
                    alt="Dipak Mourya Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
                style={{ background: `linear-gradient(90deg, ${accent}, hsl(var(--primary-dark)))` }}
              >
                <Code2 className="w-10 h-10" style={{ color: bg }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="pt-2 items-start">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-6"
              style={{ color: text, display: 'inline-block', paddingBottom: '0.25rem', borderBottom: `3px solid ${accent}` }}
            >
              My Timeline
            </h2>

            <div className="w-full">
              <CareerTimeline />
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
