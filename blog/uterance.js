"use client";

import { useEffect, useRef } from "react";

export default function UtterancesComments({ isDarkMode }) {
  const ref = useRef(null);
  const scriptAppended = useRef(false); 

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
    script.setAttribute("theme", isDarkMode ? "github-dark" : "github-light");

    const timeoutId = setTimeout(() => {
      ref.current.appendChild(script);
      scriptAppended.current = true; 
    }, 100);

    return () => {
      clearTimeout(timeoutId); 
      if (ref.current) {
        ref.current.innerHTML = ""; 
      }
      scriptAppended.current = false; 
    };
  }, [isDarkMode]);

  return <div ref={ref} id="utterances-container" className="w-full md:w-[80%] mx-auto p-8" />;
}