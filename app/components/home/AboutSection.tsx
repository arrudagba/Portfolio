"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function AboutSection() {
  const { theme } = useTheme();
  const accent = 'hsl(var(--primary))';
  const bg = 'hsl(var(--background))';
  const surface = 'hsl(var(--surface))';
  const text = 'hsl(var(--text))';
  const textSecondary = 'hsl(var(--text-secondary))';
  return (
    <section id="about" className="py-20 lg:py-32" style={{ backgroundColor: bg }}>
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
                Hi, I'm <span className="font-semibold" style={{ color: text }}>Gabriel Arruda</span>, a <span className="font-semibold" style={{ color: accent }}>Software Engineer</span> and Cybersecurity enthusiast, currently completing my degree in Computer Science. Over the years, I've developed a strong foundation in software development and a deep passion for protecting systems from emerging threats.
              </p>

              <p>
                I have worked on building secure, scalable applications and am particularly excited about the intersection of engineering and security. My focus is on creating solutions that are not only functional but also resilient against modern threats.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="/about"
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
                <Code2 className="w-10 h-10" style={{ color: text }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
