"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  Search, Code, FileCode, Server, Atom, Rocket, 
  Palette, Wind, Database, Box, Flame, Shield,
  Zap, Accessibility, Cog, Smile, Users, Eye,
  Sparkles, MessageCircle, Target, CheckCircle,
  Lightbulb, ArrowRight, Sprout, Award, Share2
} from "lucide-react";
import { LucideIcon } from "lucide-react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiZod,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiNpm,
  SiYarn,
  SiEslint,
  SiPrettier,
  SiPostgresql,
  SiAstro,
  SiRust,
  SiPython,
  SiC,
  SiAngular,
  SiKubernetes,
  SiDocker,
  SiGooglecloud,
  SiMysql,
  SiFirebase,
  SiRedis,
  SiHasura,
  SiActix,
  SiGraphql
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { LiaAws } from "react-icons/lia";
import { VscVscode, VscAzure} from "react-icons/vsc";
import { IconType } from "react-icons";


type AnyIcon = LucideIcon | IconType;

interface SkillCategory {
  title: string;
  description: string;
  icon: AnyIcon;
  items: { name: string; icon: AnyIcon }[];
}

interface Skill {
  name: string;
  value: number;
  icon?: AnyIcon;
}


const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and dynamic user interfaces.",
    icon: SiReact,
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Angular", icon: SiAngular },
    ],
  },
  {
    title: "Backend",
    description: "Creating robust APIs and server-side applications.",
    icon: SiNodedotjs,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Zod", icon: SiZod },
      { name: "Actix Web", icon: SiActix },
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: Server },
    ],
  },
  {
    title: "Database",
    description: "Managing and designing efficient data storage solutions.",
    icon: SiPostgresql,
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Hasura", icon: SiHasura },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "DevOps",
    description: "Deployment, CI/CD, and server management.",
    icon: SiGit,
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: LiaAws },
      { name: "Azure", icon: VscAzure },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
  },
  {
    title: "Tools",
    description: "Design, coding, and productivity tools.",
    icon:  VscVscode,
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: VscVscode },
      { name: "NPM", icon: SiNpm },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
    ],
  },
  {
    title: "Programming Languages",
    description: "Core programming languages used for systems, backend, and frontend development.",
    icon: Code,
    items: [
        { name: "Rust", icon: SiRust },
        { name: "Python", icon: SiPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C", icon: SiC },
        { name: "C#", icon: TbBrandCSharp },
    ],
    },
];


const technicalSkills: Skill[] = [
  { name: "JavaScript", value: 95, icon: SiJavascript },
  { name: "TypeScript", value: 90, icon: SiTypescript },
  { name: "Node.js", value: 85, icon: SiNodedotjs },
  { name: "React", value: 95, icon: SiReact },
  { name: "Next.js", value: 90, icon: SiNextdotjs },
  { name: "Astro", value: 75, icon: SiAstro },
  { name: "CSS\n3", value: 90, icon: SiCss3 },
  { name: "Tailwind\nCSS", value: 95, icon: SiTailwindcss },
  { name: "PostgreSQL", value: 80, icon: SiPostgresql },
  { name: "Zod", value: 85, icon: SiZod },
];

const humanSkills: Skill[] = [
  { name: 'Automation', value: 90, icon: Cog },
  { name: 'Positive\nAttitude', value: 95, icon: Smile },
  { name: 'Teamwork', value: 95, icon: Users },
  { name: 'Curiosity', value: 100, icon: Eye },
  { name: 'Creativity', value: 90, icon: Sparkles },
  { name: 'Communication', value: 85, icon: MessageCircle },
  { name: 'Analytical\nThinking', value: 90, icon: Target },
  { name: 'Decision\nMaking', value: 85, icon: CheckCircle },
  { name: 'Problem\nSolving', value: 95, icon: Lightbulb },
  { name: 'Adaptability', value: 90, icon: ArrowRight },
  { name: 'Flexibility', value: 90, icon: Sprout },
  { name: 'Branding', value: 75, icon: Award },
  { name: 'Social Media\n&\nFlyers', value: 70, icon: Share2 },
];

function SkillsOverview() {
  return (
    <div className="mb-16 sm:mb-20 lg:mb-28">
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
          Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary-dark))] to-[hsl(var(--accent))]">Overview</span>
        </h3>
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg"
          style={{ color: "hsl(var(--text-secondary))" }}
        >
          Technologies, tools, and foundations I work with on a daily basis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary-dark) / 0.18), hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.18))",
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                      border: "1px solid hsl(var(--primary) / 0.4)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                  </div>

                  <div>
                    <h4
                      className="text-lg sm:text-xl font-semibold"
                      style={{ color: "hsl(var(--text))" }}
                    >
                      {category.title}{" "}
                    </h4>
                    <p
                      className="text-sm sm:text-base mt-1"
                      style={{ color: "hsl(var(--text-secondary))" }}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {category.items.map(({ name, icon: ItemIcon }) => (
                        <span
                        key={name}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm border"
                        style={{
                            backgroundColor: "hsl(var(--background) / 0.6)",
                            color: "hsl(var(--text-secondary))",
                            borderColor: "hsl(var(--primary) / 0.3)",
                        }}
                        >
                        <ItemIcon className="w-3.5 h-3.5" />
                        {name}
                        </span>
                    ))}
                </div>
                </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function RadarChart({ skills, title }: { skills: Skill[]; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || containerSize.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use CSS variables for colors so the radar chart matches the theme
    const primaryVar = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.55;
    const numSkills = skills.length;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);


    // Draw concentric circles (grid)
    const levels = 5;
    ctx.strokeStyle = 'hsl(' + primaryVar + ' / 0.3)';
    ctx.lineWidth = 1;

    for (let i = 1; i <= levels; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / levels) * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axis lines from center
    ctx.strokeStyle = 'hsl(' + primaryVar + ' / 0.3)';
    ctx.lineWidth = 1;

    for (let i = 0; i < numSkills; i++) {
      const angle = (Math.PI * 2 * i) / numSkills - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw skill polygon
    ctx.beginPath();
    ctx.strokeStyle = 'hsl(' + primaryVar + ' )';
    ctx.fillStyle = 'hsl(' + primaryVar + ' / 0.4)';
    ctx.lineWidth = 2;

    skills.forEach((skill, i) => {
      const angle = (Math.PI * 2 * i) / numSkills - Math.PI / 2;
      const value = skill.value / 100;
      const x = centerX + Math.cos(angle) * radius * value;
      const y = centerY + Math.sin(angle) * radius * value;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

  }, [skills, containerSize]);

  const getIconPosition = (index: number, total: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const radius = Math.min(centerX, centerY) * 0.55;
    
    // Responsive label offset based on screen size
    const isMobile = containerSize.width < 350;
    const labelOffset = isMobile ? 35 : 45;
    const labelRadius = radius + labelOffset;
    
    // Round to 2 decimal places to ensure consistent server/client rendering
    const left = Math.round((centerX + Math.cos(angle) * labelRadius) * 100) / 100;
    const top = Math.round((centerY + Math.sin(angle) * labelRadius) * 100) / 100;
    
    return {
      left: `${left}px`,
      top: `${top}px`,
    };
  };

  // Determine if screen is mobile for responsive styling
  const isMobile = containerSize.width < 350;
  const isTablet = containerSize.width >= 350 && containerSize.width < 640;

  return (
    <div className="relative w-full">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-center px-2" style={{ color: 'hsl(var(--text))' }}>
        {title}
      </h3>
      <div 
        ref={containerRef} 
        className="relative w-full aspect-square max-w-[450px] mx-auto"
        style={{ maxHeight: '450px' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full absolute inset-0"
        />
        {containerSize.width > 0 && skills.map((skill, index) => {
          const Icon = skill.icon;
          const pos = getIconPosition(index, skills.length);
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 sm:gap-1"
              style={{ left: pos.left, top: pos.top }}
            >
              {Icon && (
                <div
                  className={`${isMobile ? 'w-6 h-6' : isTablet ? 'w-7 h-7' : 'w-8 h-8'} rounded-full flex items-center justify-center mb-0.5 sm:mb-1`}
                  style={{ backgroundColor: `hsl(var(--primary) / 0.2)`, border: `1px solid hsl(var(--primary) / 0.4)` }}
                >
                  <Icon className={`${isMobile ? 'w-3 h-3' : isTablet ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} style={{ color: 'hsl(var(--primary))' }} />
                </div>
              )}
              <span className={`
                ${isMobile ? 'text-[8px] max-w-[45px]' : isTablet ? 'text-[9px] max-w-[50px]' : 'text-[10px] max-w-[60px]'}
                text-center leading-tight"
                style={{ color: 'hsl(var(--text-secondary))' }}
              `}>
                {skill.name.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden" id="skills" style={{ backgroundColor: 'hsl(var(--background))' }}>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

        {/* Skills Overview */}
        <SkillsOverview />

        {/* Skills Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          
          {/* Technical & Dev Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(var(--primary-dark) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.2))' }} />
            <div className="relative z-10">
              <RadarChart skills={technicalSkills} title="Technical & Dev Skills" />
            </div>
          </motion.div>

          {/* Human & Creative Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(var(--primary-dark) / 0.2), hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.2))' }} />
            <div className="relative z-10">
              <RadarChart skills={humanSkills} title="Human & Creative Skills" />
            </div>
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  );
}
