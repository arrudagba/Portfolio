"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "HappyCraft Event LLP",
    subtitle: "Premium Event Management Website",
    category: "Website",
    image: "/assets/projects/happycraft.svg",
    link: "/projects/happycraft-event-llp"
  },
  {
    title: "KET Design & Interior",
    subtitle: "Luxury Interior & Architectural Website",
    category: "Website",
    image: "/assets/projects/ket-design.svg",
    link: "/projects/ket-design-interior"
  },
  {
    title: "StaffWorks Employee Management Portal",
    subtitle: "StaffWorks Employee Management Portal",
    category: "Web Application",
    image: "/assets/projects/staffworks.svg",
    link: "/projects/staffworks-employee-management-portal"
  },
  {
    title: "Mudd Vision",
    subtitle: "Dealer & Sales Management Platform",
    category: "Software Application",
    image: "/assets/projects/mudd-vision.svg",
    link: "/projects/mudd-vision-sales-platform"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#47D7FF] font-semibold text-sm uppercase tracking-wider mb-4">
            MY WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Selected Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here's a curated selection showcasing my expertise and the achieved results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Project Link */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-gray-900 rounded-full p-3">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#47D7FF] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#47D7FF] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {project.subtitle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#47D7FF] hover:bg-[#20B8E8] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
