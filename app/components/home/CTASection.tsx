"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import LightRays from '../../../components/LightRays';

export default function CTASection({ theme = 'dark' }) {
  const titleColor = theme === 'light' ? 'hsl(var(--title))' : 'hsl(var(--text))';
  const specialColor = 'hsl(var(--primary))';
  const buttonBg = theme === 'light' ? '#83C5D8' : '#47D7FF';
  const buttonText = theme === 'light' ? '#000' : 'hsl(var(--background))';
  const textColor = 'hsl(var(--text))';
  const textSecondary = 'hsl(var(--text-secondary))';
  const surface = 'hsl(var(--surface))';
  const bg = 'hsl(var(--background))';

  return (
    <section className="relative py-12 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto relative">
          <div 
            className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-3xl"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <LightRays
              raysOrigin="top-center"
              raysColor={specialColor}
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>

          <div 
            className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(${textSecondary} 1px, transparent 1px), linear-gradient(90deg, ${textSecondary} 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              opacity: 0.1,
            }}
          />

          <div className="relative z-10 py-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-6 py-2 mb-8" 
                  style={{ backgroundColor: surface, borderColor: surface }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: specialColor }} />
                  <span className="font-medium" style={{ color: textColor }}>Available for work</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" 
                  style={{ color: titleColor }}
                >
                  Let's build something<br />amazing together.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto" 
                  style={{ color: textSecondary }}
                >
                  Ready to create secure, scalable solutions? Let's collaborate and make your vision a reality.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all"
                    style={{ backgroundColor: buttonBg, color: buttonText }}
                  >
                    Contact Me
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ color: textColor }}>100%</div>
                    <div className="text-sm" style={{ color: textSecondary }}>Client Satisfaction</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ color: textColor }}>24/7</div>
                    <div className="text-sm" style={{ color: textSecondary }}>Support Available</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ color: textColor }}>Fast</div>
                    <div className="text-sm" style={{ color: textSecondary }}>Delivery Time</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
