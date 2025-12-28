"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 60%, hsl(var(--accent)) 100%)' }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'hsl(var(--surface))' }}
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-2xl" style={{ backgroundColor: 'hsl(var(--surface))' }}
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-6 py-2 mb-8" style={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--surface))' }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
            <span className="font-medium" style={{ color: 'hsl(var(--text))' }}>Available for work</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'hsl(var(--text))' }}
          >
            Let's build something<br />amazing together.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'hsl(var(--text-secondary))' }}
          >
            Ready to create secure, scalable solutions? Let's collaborate and make your vision a reality.
          </motion.p>

          {/* CTA Button */}
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
              style={{ backgroundColor: 'hsl(var(--button))', color: 'hsl(var(--button-text))' }}
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text))' }}>100%</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Client Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text))' }}>24/7</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Support Available</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--text))' }}>Fast</div>
              <div className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>Delivery Time</div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
