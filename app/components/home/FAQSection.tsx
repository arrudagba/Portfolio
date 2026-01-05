"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in full-stack development with React, Next.js, and TypeScript on the frontend, and Node.js with Express or Rust with Actix Web on the backend. I also work extensively with PostgreSQL, Docker, and cloud platforms like AWS and Vercel. My focus is building secure, scalable applications with clean architecture."
  },
  {
    question: "What is your approach to security?",
    answer: "Security is at the core of everything I build. With experience in pentesting and Red Team operations, I apply defensive programming practices, implement proper authentication/authorization, validate inputs rigorously, and design systems that are resilient against common vulnerabilities. I believe in security by design, not as an afterthought."
  },
  {
    question: "What's your experience with UI/UX design?",
    answer: "I have 2+ years of experience designing user interfaces with a focus on usability and accessibility. I use tools like Figma for prototyping and design systems, and I implement responsive, modern interfaces using Tailwind CSS and Framer Motion. I believe good design is invisible—it just works."
  },
  {
    question: "Are you available for collaboration?",
    answer: "Yes! I'm open to collaborating on full-stack projects, security audits, or open-source initiatives. Whether it's building a new product from scratch, hardening existing systems, or contributing to meaningful FOSS projects, I'm always interested in working on challenging problems with passionate people."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'hsl(var(--primary))' }}>
            FAQS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: 'hsl(var(--text))' }}>
            Have Questions?
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden border" style={{ backgroundColor: 'hsl(var(--surface))', borderColor: 'hsl(var(--surface))' }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors" style={{ backgroundColor: openIndex === index ? 'hsl(var(--surface))' : undefined }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg" style={{ color: 'hsl(var(--primary))' }}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-semibold text-lg" style={{ color: 'hsl(var(--text))' }}>
                    {faq.question}
                  </span>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                  ) : (
                    <Plus className="w-5 h-5" style={{ color: 'hsl(var(--text-secondary))' }} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pl-[4.5rem]">
                  <p className="leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
