"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRust,
  SiWebassembly
} from "react-icons/si";
import { TbBrandRust } from "react-icons/tb";
import { IconType } from "react-icons";

type Project = {
  title: string;
  technologies: { name: string; icon: IconType }[];
  description: string;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "ConvertKiller - File Conversion & Compression Tool",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "WASM", icon: SiWebassembly },
      { name: "Rust", icon: SiRust },
    ],
    description: "Elegant portfolio website showcasing luxury interior designs and architectural projects.",
    image: "/assets/projects/convertkiller.png",
    demo: "https://convert-killer.vercel.app",
    github: "https://github.com/arrudagba/ConvertKiller",
  },
  {
    title: "Portfolio",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    description: "Complete HR management system with employee tracking, attendance, and payroll features.",
    image: "/assets/projects/portfolio.png",
    github: "https://github.com/arrudagba/Portfolio",
  },
  {
    title: "CASCO's Website",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    description: "Enterprise-grade platform for managing dealership operations, inventory, and sales analytics.",
    image: "/assets/projects/casco.png",
    demo: "https://casco.inf.puc-rio.br",
  },
  {
    title: "URL Shortener - Scalable Link Management Service",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "ActixWeb", icon: TbBrandRust },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    description: "URL Shortener is a scalable and efficient link-shortening service built with Rust (Actix Web) for the backend, Next.js for the frontend, and Supabase (PostgreSQL) as the database.",
    image: "/assets/projects/urlshortener.png",
    demo: "https://url-shortener-steel-ten.vercel.app/",
    github: "https://github.com/arrudagba/URL-Shortener",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="relative py-12 overflow-hidden"
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative backdrop-blur-sm border rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: 'hsl(var(--surface))',
                  borderColor: 'hsl(var(--border) / 0.5)',
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary-dark) / 0.1), hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.1))",
                  }}
                />

                {/* Image Container - Fixed aspect ratio */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    backgroundColor: 'hsl(var(--background) / 0.5)',
                    aspectRatio: '16/9',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    priority={index < 2}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    style={{
                      borderBottom: '1px solid hsl(var(--border) / 0.5)',
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8">
                  {/* Title */}
                  <h4
                    className="text-base sm:text-lg font-semibold mb-4 line-clamp-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300"
                    style={{ color: "hsl(var(--text))" }}
                  >
                    {project.title}
                  </h4>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(({ name, icon: Icon }) => (
                      <span
                        key={name}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm border"
                        style={{
                          backgroundColor: "hsl(var(--background) / 0.6)",
                          color: "hsl(var(--text-secondary))",
                          borderColor: "hsl(var(--primary) / 0.3)",
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {name}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm mb-6 line-clamp-2"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: "hsl(var(--background) / 0.6)",
                          color: "hsl(var(--text))",
                          borderColor: "hsl(var(--primary) / 0.5)",
                        }}
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--background))",
                        }}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}