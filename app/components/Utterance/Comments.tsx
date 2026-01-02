'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function UtterancesComments() {
  const ref = useRef<HTMLDivElement>(null);
  const scriptAppended = useRef(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current || scriptAppended.current) return;

    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "arrudagba/Portfolio");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comments");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
    script.setAttribute("theme", theme === 'dark' ? "github-dark" : "github-light");

    const timeoutId = setTimeout(() => {
      if (ref.current) {
        ref.current.appendChild(script);
        scriptAppended.current = true;
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ref.current) {
        ref.current.innerHTML = "";
      }
      scriptAppended.current = false;
    };
  }, [theme]);

  return <div ref={ref} id="utterances-container" className="w-full md:w-[80%] mx-auto p-8" />;
}
