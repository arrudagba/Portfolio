'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function UtterancesComments() {
  const { theme } = useTheme();
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'your-username/your-repo'); // Configure isso depois
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', theme === 'dark' ? 'github-dark' : 'github-light');

    commentsRef.current.appendChild(script);

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, [theme]);

  return <div ref={commentsRef} />;
}
