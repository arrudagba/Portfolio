"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#1C1C22] py-20 lg:py-32">
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
              className="text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              About Me
            </motion.h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="font-semibold text-white">Gabriel Arruda</span>, a <span className="font-semibold text-[#0C73CD]">Software Engineer</span> and Cybersecurity enthusiast, currently completing my degree in Computer Science. Over the years, I've developed a strong foundation in software development and a deep passion for protecting systems from emerging threats.
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
                className="bg-[#0C73CD] hover:bg-[#0052b3] text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                Discover More
                <span className="text-xl">→</span>
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-[#0C73CD] text-white px-8 py-3 rounded-full font-medium border-2 border-[#0C73CD] transition-colors"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C73CD]/10 to-[#0012b3]/10 rounded-3xl transform rotate-6"></div>
              
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
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] flex items-center justify-center shadow-xl"
              >
                <Code2 className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
