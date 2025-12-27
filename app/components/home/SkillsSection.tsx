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

interface Skill {
  name: string;
  value: number;
  icon?: LucideIcon;
}

const technicalSkills: Skill[] = [
  { name: 'SEO\n&\nAEO', value: 85, icon: Search },
  { name: 'JavaScript', value: 95, icon: Code },
  { name: 'TypeScript', value: 90, icon: FileCode },
  { name: 'Node.js', value: 85, icon: Server },
  { name: 'React', value: 95, icon: Atom },
  { name: 'Astro', value: 75, icon: Rocket },
  { name: 'CSS\n3', value: 90, icon: Palette },
  { name: 'Tailwind\nCSS', value: 95, icon: Wind },
  { name: 'PostgreSQL', value: 80, icon: Database },
  { name: 'Drizzle\nORM', value: 75, icon: Box },
  { name: 'Hono', value: 70, icon: Flame },
  { name: 'Zod', value: 85, icon: Shield },
  { name: 'Web\nPerformance', value: 85, icon: Zap },
  { name: 'Web\nAccessibility', value: 80, icon: Accessibility },
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
    ctx.strokeStyle = 'rgba(12, 115, 205, 0.3)';
    ctx.lineWidth = 1;

    for (let i = 1; i <= levels; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / levels) * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axis lines from center
    ctx.strokeStyle = 'rgba(12, 115, 205, 0.3)';
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
    ctx.strokeStyle = '#0C73CD';
    ctx.fillStyle = 'rgba(12, 115, 205, 0.4)';
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
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center px-2">
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
                <div className={`
                  ${isMobile ? 'w-6 h-6' : isTablet ? 'w-7 h-7' : 'w-8 h-8'}
                  rounded-full bg-[#0C73CD]/20 border border-[#0C73CD]/40 
                  flex items-center justify-center mb-0.5 sm:mb-1
                `}>
                  <Icon className={`${isMobile ? 'w-3 h-3' : isTablet ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-[#0C73CD]`} />
                </div>
              )}
              <span className={`
                ${isMobile ? 'text-[8px] max-w-[45px]' : isTablet ? 'text-[9px] max-w-[50px]' : 'text-[10px] max-w-[60px]'}
                text-gray-400 text-center leading-tight
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
    <section className="relative bg-[#1C1C22] py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden" id="skills">
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
            My <span className="bg-gradient-to-r from-[#0C73CD] via-[#0052b3] to-[#0012b3] text-transparent bg-clip-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive overview of my technical expertise and interpersonal abilities
          </p>
        </motion.div>

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
            <div className="absolute inset-0 bg-gradient-to-br from-[#0012b3]/20 via-[#0052b3]/10 to-[#0C73CD]/20" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#0012b3]/20 via-[#0052b3]/10 to-[#0C73CD]/20" />
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
