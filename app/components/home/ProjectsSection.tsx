"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  type: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "HappyCraft Event LLP – Premium Event Management Website",
    type: "Website",
    href: "/projects/happycraft-event-llp",
  },
  {
    title: "KET Design & Interior — Luxury Interior & Architectural Website",
    type: "Website",
    href: "/projects/ket-design-interior",
  },
  {
    title: "StaffWorks Employee Management Portal",
    type: "Web Application",
    href: "/projects/staffworks-employee-management-portal",
  },
  {
    title: "Mudd Vision — Dealer & Sales Management Platform",
    type: "Software Application",
    href: "/projects/mudd-vision-sales-platform",
  },
];

export default function ProjectsSection() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden" 
      id="projects" 
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
              style={{ color: "hsl(var(--text))" }}
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-dark))] to-[hsl(var(--accent))]">Projects</span>
            </h3>
            <p
              className="max-w-2xl mx-auto text-base sm:text-lg"
              style={{ color: "hsl(var(--text-secondary))" }}
            >
              Here's a curated selection showcasing my expertise and the achieved results
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary-dark) / 0.18), hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.18))",
                  }}
                />

                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden" style={{ backgroundColor: 'hsl(var(--background-secondary) / 0.5)' }}>
                  <svg
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    viewBox="0 0 400 225"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="400" height="225" fill="hsl(var(--primary) / 0.1)" />
                    <circle cx="200" cy="112.5" r="40" fill="hsl(var(--primary) / 0.3)" />
                    <rect x="140" y="140" width="120" height="8" rx="4" fill="hsl(var(--primary) / 0.2)" />
                    <rect x="160" y="160" width="80" height="6" rx="3" fill="hsl(var(--primary) / 0.15)" />
                  </svg>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4
                      className="text-base sm:text-lg font-semibold line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300"
                      style={{ color: "hsl(var(--text))" }}
                    >
                      {project.title}
                    </h4>
                    
                    <ExternalLink 
                      className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ color: "hsl(var(--primary))" }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs sm:text-sm px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: "hsl(var(--background) / 0.6)",
                        color: "hsl(var(--text-secondary))",
                        borderColor: "hsl(var(--primary) / 0.3)",
                      }}
                    >
                      {project.type}
                    </span>
                    
                    <ArrowRight 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                      style={{ color: "hsl(var(--primary))" }}
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}