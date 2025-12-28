"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import error404Animation from "../public/404 error.json";

export default function NotFound() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#47D7FF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#20B8E8] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#0EA5D0] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto mb-8"
          >
            <Lottie animationData={error404Animation} loop={true} />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 
              className="text-4xl lg:text-6xl font-bold mb-4"
              style={{ color: 'hsl(var(--text))' }}
            >
              Page Not Found
            </h1>
            <p 
              className="text-lg lg:text-xl mb-8 max-w-xl mx-auto"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#47D7FF] hover:bg-[#20B8E8] px-8 py-3 rounded-full font-medium transition-colors"
                  style={{ color: 'hsl(var(--background))' }}
                >
                  Back to Home
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border-2 border-[#47D7FF] hover:bg-[#47D7FF]/10 px-8 py-3 rounded-full font-medium transition-colors"
                  style={{ color: 'hsl(var(--text))' }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <p 
              className="text-sm mb-4"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Quick Links:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/#about" 
                className="hover:text-[#47D7FF] transition-colors"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                About
              </Link>
              <Link 
                href="/#projects" 
                className="hover:text-[#47D7FF] transition-colors"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="hover:text-[#47D7FF] transition-colors"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                Blog
              </Link>
              <Link 
                href="/#contact" 
                className="hover:text-[#47D7FF] transition-colors"
                style={{ color: 'hsl(var(--text-secondary))' }}
              >
                Contact
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
