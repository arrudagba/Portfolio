"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  logo: string;
  link: string;
  bullets?: string[];
  projects?: { name: string; url: string }[];
};

const workData: TimelineItem[] = [
  {
    company: "Vizo.dev",
    role: "Junior Full-stack Developer",
    period: "Sep 2025 - Present",
    logo: "/assets/work/vizo_logo.png",
    link: "https://www.vizo.dev",
    bullets: [
      "Developed",
    ],
  },
  {
    company: "Freelance Path",
    role: "Freelance Software Developer",
    period: "Nov 2023 - Present",
    logo: "/assets/work/my_logo.png",
    link: "",
    projects: [{ name: "CASCO Website", url: "https://casco.inf.puc-rio.br" }],
  },
];

const educationData: TimelineItem[] = [
  {
    company: "Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)",
    role: "BSc in Computer Science",
    period: "Mar 2023 - Present",
    logo: "/assets/education/puc_logo.png",
    link: "https://www.puc-rio.br/",
    bullets: [
      "Founded CASCO, the university's first cybersecurity club",
      "Participated in various CTF competitions, including Hack The Box University CTF 2024",
    ],
  },
];

export default function CareerTimeline() {
  const [tab, setTab] = useState<"work" | "education">("work");

  const data = tab === "work" ? workData : educationData;

  return (
    <div className="w-full">
      {/* Switcher */}
      <div
        className="grid grid-cols-2 rounded-lg p-1 mb-6"
        style={{
          background: "hsl(var(--surface))",
        }}
      >
        {(["work", "education"] as const).map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="py-2 rounded-md text-sm font-medium transition-all"
              style={{
                background: active ? "hsl(var(--background))" : "transparent",
                color: active
                  ? "hsl(var(--text))"
                  : "hsl(var(--text-secondary))",
              }}
            >
              {t === "work" ? "Work" : "Education"}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div
        className="rounded-2xl border shadow-sm"
        style={{
          background: "hsl(var(--surface))",
          borderColor: "hsl(var(--border))",
        }}
      >
        <ul
          className="relative ml-6 border-l py-6"
          style={{ borderColor: "hsl(var(--text))" }}
        >
          {data.map((item, i) => (
            <li key={i} className="relative ml-8 py-6">
              {/* Logo */}
              <a
                href={item.link}
                target="_blank"
                className="absolute -left-14 top-6 w-12 h-12 rounded-full flex items-center justify-center border"
                style={{
                  background: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </a>

              {/* Content */}
              <div className="space-y-2">
                <time
                  className="text-xs"
                  style={{ color: "hsl(var(--text-secondary))" }}
                >
                  {item.period}
                </time>

                <h3
                  className="font-semibold text-lg"
                  style={{ color: "hsl(var(--text))" }}
                >
                  {item.company}
                </h3>

                <p
                  className="text-sm"
                  style={{ color: "hsl(var(--text-secondary))" }}
                >
                  {item.role}
                </p>

                {item.bullets && (
                  <ul className="ml-5 list-disc space-y-1">
                    {item.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed"
                        style={{ color: "hsl(var(--text-secondary))" }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {item.projects && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.projects.map((p, j) => (
                      <a
                        key={j}
                        href={p.url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium transition-colors"
                        style={{
                          background: "hsl(var(--primary))",
                          color: "hsl(var(--background))",
                        }}
                      >
                        <Globe className="w-3 h-3" />
                        {p.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
