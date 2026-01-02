"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Tag, Pencil, Sun, Moon, Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import { FaMastodon } from 'react-icons/fa';
import React from "react";
import { useTheme } from '../context/ThemeContext';

interface Post {
  slug: string;
  title: string;
  date: string;
  time: string;
  tag: string[];
  description: string;
}

const fadeTopDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeTopDown}
      className="flex flex-col items-center justify-center pt-16 min-h-[calc(100vh-3rem)]"
      style={{ backgroundColor: theme === 'dark' ? '#141313' : '#ffffff' }}
    >
      <div className="absolute top-0 left-0 p-4 flex items-center gap-4 z-50">
        <div>
          <Link href="/" aria-label="Voltar para home" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-6 h-6" style={{ color: theme === 'dark' ? '#fff' : '#000' }} />
          </Link>
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
                  transform: `translateY(-50%) ${theme === 'dark' ? 'translateX(30px)' : 'translateX(4px)'}`
                }}
              ></div>
            </div>
          </label>
        </div>
      </div>

      <div className="py-4 w-60 flex flex-col justify-center items-center relative md:order-none order-first md:row-auto row-start-1 md:justify-self-end justify-self-center">
        <div className="object-contain mx-auto md:mx-0 mb-4">
          <Image 
            src={theme === 'dark' ? "/blog-dark.png" : "/blog-bright.png"} 
            alt="Blog illustration" 
            width={325} 
            height={325}
            priority
          />
        </div>
        <p className="font-mono text-xl" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
          Gabriel Arruda
        </p>
        <p style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280', fontSize: '14px' }}>
          @arrudagba
        </p>
        <div className="flex justify-center items-center gap-5 mt-4 p-2 w-full">
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
        </div>
      </div>

      <h1 
        className="text-lg md:text-2xl justify-center pt-4 font-bold"
        style={{ color: theme === 'dark' ? '#fff' : '#000' }}
      >
        Welcome to my blog!
      </h1>

      <div 
        className="max-w-full md:max-w-4xl p-4 md:p-6 rounded-2xl mt-6"
        style={{
          backgroundColor: theme === 'dark' ? '#202020' : '#E4E4E7',
          border: `1px solid ${theme === 'dark' ? '#3f3f3f' : '#d4d4d8'}`
        }}
      >
        <div className="overflow-y-scroll h-[60vh] px-2 md:px-4">
          <ul className="space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <React.Fragment key={post.slug}>
                  <li 
                    className="p-4 rounded-xl shadow-md max-w-full"
                    style={{ backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f4f4f5' }}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:max-w-[36%]">
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="text-lg font-semibold hover:underline"
                          style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                        >
                          {post.title}
                        </Link>
                        <div 
                          className="w-full h-px my-4"
                          style={{ backgroundColor: theme === 'dark' ? '#fff' : '#000' }}
                        ></div>
                        <div className="flex justify-start items-center gap-2 flex-wrap">
                          <Pencil className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
                          <p style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280', fontSize: '14px' }}>{post.date}</p>
                          <Clock className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
                          <p style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280', fontSize: '14px' }}>{post.time}</p>
                          <Tag className="w-4 h-4" style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280' }} />
                          <p style={{ color: theme === 'dark' ? '#A5A5A5' : '#6B7280', fontSize: '14px' }}>{post.tag.join(", ")}</p>
                        </div>
                      </div>
                      <div className="w-full md:max-w-lg line-clamp-6">
                        <p 
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: theme === 'dark' ? '#d4d4d4' : '#3f3f46' }}
                        >
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </li>
                  <div 
                    className="max-w-full h-px my-4"
                    style={{ backgroundColor: theme === 'dark' ? '#3f3f3f' : '#d4d4d8' }}
                  ></div>
                </React.Fragment>
              ))
            ) : (
              <p 
                className="text-center"
                style={{ color: theme === 'dark' ? '#9ca3af' : '#374151' }}
              >
                No posts found.
              </p>
            )}
          </ul>
        </div>
      </div>

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
  );
}
