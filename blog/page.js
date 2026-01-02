"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import '../../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTag, faPencil} from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { useTheme } from '../context/ThemeContext';
import logoDark from '../../assets/images/logo-dark.svg';
import logoBright from '../../assets/images/logo-bright.svg';
import BlogDark from '../../assets/images/blog-dark.png';
import BlogBright from '../../assets/images/blog-bright.png';

const fadeTopDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();

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
      className="flex flex-col items-center justify-center pt-16 min-h-[calc(100vh-3rem)] bg-[#ffffff] dark:bg-[#141313]"
    >
      <div className="absolute top-0 left-0 p-4 flex items-center gap-4 z-50">
        <div>
          <a href="/" aria-label="Logo">
            {isDarkMode ? (
              <Image src={logoDark} alt="Logo" width={65} height={65} />
            ) : (
              <Image src={logoBright} alt="Logo" width={65} height={65} />
            )}
          </a>
        </div>
        <div className="flex flex-row pr-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <div
              className={`w-14 h-7 bg-gray-900 rounded-full peer peer-checked:bg-[#039dfc] border border-[#A5A5A5] relative transition-colors duration-300`}
            >
              <div className="absolute left-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <FontAwesomeIcon icon={faSun} className="text-[#ecf00c]" />
              </div>
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                <FontAwesomeIcon icon={faMoon} className="text-[#A5A5A5]" />
              </div>
              <div
                className={`absolute w-[20px] h-[20px] bg-white rounded-full transition-transform duration-500 ${
                  isDarkMode ? "translate-x-[30px]" : "translate-x-1"
                } top-1/2 transform -translate-y-1/2`}
              ></div>
            </div>
          </label>
        </div>
      </div>

      <div className="py-4 w-60 flex flex-col justify-center items-center relative md:order-none order-first md:row-auto row-start-1 md:justify-self-end justify-self-center">
        <div className="object-contain mx-auto md:mx-0 mb-4">
          {isDarkMode ? (
            <Image src={BlogDark} alt="Logo" width={325} height={325} />
          ) : (
            <Image src={BlogBright} alt="Logo" width={325} height={325} />
          )}
        </div>
        <p className="text-black dark:text-white font-mono text-xl">Gabriel Arruda</p>
        <p className="obj-description-bright dark:obj-description">@arrudagba</p>
        <div className="flex justify-center items-center gap-5 mt-4 p-2 w-full">

          <a href="https://github.com/arrudagba">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/arrudagba/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://mastodon.social/@arrudagba">
            <FontAwesomeIcon icon={['fab', 'mastodon']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="mailto:arrudagbadev@gmail.com">
            <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
        </div>
      </div>

      <h1 className="blog-title-bright dark:blog-title text-lg md:text-2xl justify-center pt-4">Welcome to my blog!</h1>

      <div className="post-div-bright dark:post-div max-w-full md:max-w-4xl p-4 md:p-6">
        <div className="overflow-y-scroll h-[60vh] px-2 md:px-4">
          <ul className="space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <React.Fragment key={post.slug}>
                  <li className="bg-[#E4E4E7] dark:bg-[#202020] p-4 rounded-xl shadow-md max-w-full">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:max-w-[36%]">
                        <Link href={`/blog/${post.slug}`} className="text-lg font-semibold text-black dark:text-white">
                          {post.title}
                        </Link>
                        <div className="w-full h-px bg-black dark:bg-white my-4"></div>
                        <div className="flex justify-start items-center gap-2">
                          <FontAwesomeIcon className="post-info-bright dark:post-info" icon={faPencil} />
                          <p className="post-info-bright dark:post-info">{post.date}</p>
                          <FontAwesomeIcon className="post-info-bright dark:post-info" icon={faClock} />
                          <p className="post-info-bright dark:post-info">{post.time}</p>
                          <FontAwesomeIcon className="post-info-bright dark:post-info" icon={faTag} />
                          <p className="post-info-bright dark:post-info">{post.tag.join(", ")}</p>
                        </div>
                      </div>
                      <div className="w-full md:max-w-lg line-clamp-6">
                        <p className="post-resume-bright dark:post-resume text-sm md:text-base leading-relaxed">{post.description}</p>
                      </div>
                    </div>
                  </li>
                  <div className="max-w-full h-px bg-[#E4E4E7] dark:bg-white my-4"></div>
                </React.Fragment>
              ))
            ) : (
              <p className="text-center text-gray-700 dark:text-gray-300">No posts found.</p>
            )}
          </ul>
        </div>
      </div>

      <footer className="flex items-center gap-7 text-1xlg font-normal justify-center itens-center py-3 bg-[#E4E4E7] dark:bg-[#191818] w-full mt-3">
          <a href="https://github.com/arrudagba">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/arrudagba/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://mastodon.social/@arrudagba">
            <FontAwesomeIcon icon={['fab', 'mastodon']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="mailto:arrudagbadev@gmail.com">
            <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
      </footer>
    </motion.main>
  );
}