"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';

const ResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, icon: 'c-', text1: 'C', text2: 'Low-level, procedural language known for its speed and efficiency. It’s widely used in system programming and embedded systems.' },
    { id: 2, icon: 'python-', text1: 'Python', text2: 'High-level, interpreted, and versatile. Known for its simplicity and readability, it’s used in web development, data science, and automation.' },
    { id: 3, icon: 'rust-', text1: 'Rust', text2: 'Systems programming language focusing on memory safety and concurrency without a garbage collector. It’s fast and used for performance-critical applications.' },
    { id: 4, icon: 'csharp-', text1: 'C#', text2: 'High-level, object-oriented language developed by Microsoft. Commonly used for desktop, web, and game development (especially with Unity).' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleResize = () => {
      // Reset index on resize to ensure the first item is shown
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { isDarkMode } = useTheme();

  return (
<div className="relative bg-[#a2a2a2] dark:bg-[#191818] w-full md:max-w-screen-2xl md:w-auto md:mx-8 px-6 rounded-3xl py-7 my-5">
  {/* Grid layout for desktop */}
  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item) => (
      <div key={item.id} className="flex flex-col items-center p-4 bg-[#E4E4E7] dark:bg-[#202020] rounded-lg">
        {isDarkMode ? (
          <img src={`/${item.icon}dark.svg`} alt="Logo" className="icon-slider" />
        ) : (
          <img src={`/${item.icon}bright.svg`} alt="Logo" className="icon-slider" />
        )}
        <div className="text-left w-full">
          <h2 className="obj-title-bright dark:obj-title">{item.text1}</h2>
          <p className="obj-description-bright dark:obj-description">{item.text2}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Slider layout for mobile */}
  <div className="md:hidden relative overflow-hidden w-full">
    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {items.map((item) => (
        <div key={item.id} className="w-full flex-shrink-0 flex flex-col bg-[#E4E4E7] dark:bg-[#202020] items-center p-4">
          {isDarkMode ? (
            <img src={`/${item.icon}dark.svg`} alt="Logo" className="icon-slider" />
          ) : (
            <img src={`/${item.icon}bright.svg`} alt="Logo" className="icon-slider" />
          )}
          <div className="text-left w-full">
            <h2 className="obj-title-bright dark:obj-title">{item.text1}</h2>
            <p className="obj-description-bright dark:obj-description">{item.text2}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black bg-[#a2a2a2] dark:text-white dark:bg-[#191818] p-2 rounded-full shadow opacity-50">
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black bg-[#a2a2a2] dark:text-white dark:bg-[#191818] p-2 rounded-full shadow opacity-50">
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
</div>
  );
};

export default ResponsiveSlider;