"use client";

import { use, useEffect, useState } from "react"; 
import { useTheme } from '../../context/ThemeContext';
import { Clock, Tag, ChevronLeft, Pencil, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { FaMastodon } from 'react-icons/fa';
import { motion } from "framer-motion";
import { FadeLoader } from 'react-spinners';
import UtterancesComments from '../../components/Utterance/Comments';

interface PostData {
  slug: string;
  title: string;
  date: string;
  time: string;
  tag: string[];
  contentHtml: string;
}

const fadeTopDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch post: ${res.statusText}`);
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (<main className="flex flex-col items-center min-h-[calc(100vh-3rem)] justify-center"><FadeLoader color={"#A5A5A5"} loading={true} /></main>);
  }

  if (error) {
    return (<main className="flex flex-col items-center min-h-[calc(100vh-3rem)] justify-center"><h2 className="dark:text-[#A5A5A5] text-black text-2xl">Error: {error}</h2></main>);
  }

  if (!post) {
    return (<main className="flex flex-col items-center min-h-[calc(100vh-3rem)] justify-center"><h2 className="dark:text-[#A5A5A5] text-black text-2xl">Post not found.</h2></main>);
  }

  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeTopDown}
        className="flex flex-col items-center justify-center pt-16 min-h-[calc(100vh-3rem)]"
        style={{ backgroundColor: theme === 'dark' ? '#141313' : '#ffffff' }}
      >
        <div className="absolute top-0 left-0 p-4 flex items-center gap-4 z-50">
          <div className="text-2xl">
            <a href="/blog" aria-label="Logo">
              <ChevronLeft className="w-6 h-6" style={{ color: theme === 'dark' ? '#fff' : '#000' }} />
            </a>
          </div>

          <div className="flex flex-row pr-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <div
                className={`w-14 h-7 rounded-full border relative transition-colors duration-300`}
                style={{
                  backgroundColor: theme === 'dark' ? '#039dfc' : '#1f2937',
                  borderColor: '#A5A5A5'
                }}
              >
                <div className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <Sun className="w-4 h-4" style={{ color: '#ecf00c' }} />
                </div>
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <Moon className="w-4 h-4" style={{ color: '#A5A5A5' }} />
                </div>
                <div
                  className={`absolute w-[20px] h-[20px] bg-white rounded-full transition-transform duration-500 top-1/2 transform -translate-y-1/2`}
                  style={{
                    transform: `translateY(-50%) ${theme === 'dark' ? 'translateX(30px)' : 'translateX(4px)'}`,
                  }}
                ></div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 py-5">
          <div className="w-full md:max-w-[480px]">
            <h1 className="font-sans font-bold text-xl md:text-2xl" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Pencil className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
            <h2 className="text-sm md:text-base" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }}>{post.date}</h2>
            <Clock className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
            <h2 className="text-sm md:text-base" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }}>{post.time}</h2>
            <Tag className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
            <h2 className="text-sm md:text-base" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }}>{Array.isArray(post.tag) ? post.tag.join(", ") : ""}</h2>
          </div>
        </div>

        <div 
          className="w-full md:w-[80%] mx-auto p-8 rounded-2xl"
          style={{
            backgroundColor: theme === 'dark' ? '#202020' : '#E4E4E7',
            border: `1px solid ${theme === 'dark' ? '#3f3f3f' : '#d4d4d8'}`,
            color: theme === 'dark' ? '#A5A5A5' : '#000'
          }}
        >
          <div className="overflow-y-scroll max-h-[100vh] px-4 flex justify-center">
            <div className="prose dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </div>

        <UtterancesComments />

        <footer 
          className="flex items-center gap-7 text-1xlg font-normal justify-center py-3 w-full mt-3"
          style={{ backgroundColor: theme === 'dark' ? '#191818' : '#E4E4E7' }}
        >
          <a href="https://github.com/arrudagba" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github 
              className="w-5 h-5 transition-colors" 
              style={{ color: theme === 'dark' ? '#A5A5A5' : '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#A5A5A5' : '#000'}
            />
          </a>
          <a href="https://www.linkedin.com/in/arrudagba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin 
              className="w-5 h-5 transition-colors" 
              style={{ color: theme === 'dark' ? '#A5A5A5' : '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#A5A5A5' : '#000'}
            />
          </a>
          <a href="https://mastodon.social/@arrudagba" target="_blank" rel="noopener noreferrer" aria-label="Mastodon">
            <FaMastodon 
              className="w-5 h-5 transition-colors" 
              style={{ color: theme === 'dark' ? '#A5A5A5' : '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#A5A5A5' : '#000'}
            />
          </a>
          <a href="mailto:arrudagbadev@gmail.com" aria-label="Email">
            <Mail 
              className="w-5 h-5 transition-colors" 
              style={{ color: theme === 'dark' ? '#A5A5A5' : '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.color = theme === 'dark' ? '#A5A5A5' : '#000'}
            />
          </a>
        </footer>
      </motion.main>
    </>
  );
}
