"use client";

import { use, useEffect, useState } from "react"; 
import { useTheme } from '../../context/ThemeContext';
import { Clock, Tag, ChevronLeft, Pencil, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
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
        className="flex flex-col items-center justify-center pt-16 min-h-[calc(100vh-3rem)] bg-[#ffffff] dark:bg-[#141313]"
      >
        <div className="absolute top-0 left-0 p-4 flex items-center gap-4 z-50">
          <div className="text-black dark:text-white text-2xl">
            <a href="/blog" aria-label="Logo">
              <ChevronLeft className="w-6 h-6" />
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
                className={`w-14 h-7 bg-gray-900 rounded-full peer peer-checked:bg-[#039dfc] border border-[#A5A5A5] relative transition-colors duration-300`}
              >
                <div className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <Sun className="text-[#ecf00c] w-4 h-4" />
                </div>
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <Moon className="text-[#A5A5A5] w-4 h-4" />
                </div>
                <div
                  className={`absolute w-[20px] h-[20px] bg-white rounded-full transition-transform duration-500 ${
                    theme === 'dark' ? "translate-x-[30px]" : "translate-x-1"
                  } top-1/2 transform -translate-y-1/2`}
                ></div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 py-5">
          <div className="w-full md:max-w-[480px]">
            <h1 className="dark:text-white text-black font-sans font-bold text-xl md:text-2xl">
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Pencil className="post-info-bright dark:post-info w-4 h-4" />
            <h2 className="post-info-bright dark:post-info text-sm md:text-base">{post.date}</h2>
            <Clock className="post-info-bright dark:post-info w-4 h-4" />
            <h2 className="post-info-bright dark:post-info text-sm md:text-base">{post.time}</h2>
            <Tag className="post-info-bright dark:post-info w-4 h-4" />
            <h2 className="post-info-bright dark:post-info text-sm md:text-base">{post.tag.join(", ")}</h2>
          </div>
        </div>

        <div className="post-div-bright dark:post-div w-full md:w-[80%] mx-auto p-8 text-black dark:text-[#A5A5A5]">
          <div className="overflow-y-scroll max-h-[100vh] px-4 flex justify-center">
            <div className="prose dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </div>

        <UtterancesComments />

        <footer className="flex items-center gap-7 text-1xlg font-normal justify-center itens-center py-3 bg-[#E4E4E7] dark:bg-[#191818] w-full mt-3">
          <a href="https://github.com/arrudagba">
            <Github className="text-black dark:text-[#A5A5A5] w-5 h-5 hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/arrudagba/">
            <Linkedin className="text-black dark:text-[#A5A5A5] w-5 h-5 hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://mastodon.social/@arrudagba">
            <Mail className="text-black dark:text-[#A5A5A5] w-5 h-5 hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="mailto:gabriel@arrudagba.dev">
            <Mail className="text-black dark:text-[#A5A5A5] w-5 h-5 hover:text-blue-700 dark:hover:text-white" />
          </a>
        </footer>
      </motion.main>
    </>
  );
}
