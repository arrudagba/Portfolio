"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "C",
      description:
        "Low-level, procedural language known for its speed and efficiency. It’s widely used in system programming and embedded systems.",
      icon: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109.19 122.88"
          style={{ width: "50px", height: "50px" }}
        >
          <path
            fill="#3949AB"
            d="M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16Z"
          />
        </svg>
      ),
    },
    {
      title: "Python",
      description:
        "High-level, interpreted, and versatile. Known for its simplicity and readability, it’s used in web development, data science, and automation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "50px", height: "50px" }}
        >
          <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6z" />
        </svg>
      ),
    },
    {
      title: "Rust",
      description:
        "Systems programming language focusing on memory safety and concurrency without a garbage collector. It’s fast and used for performance-critical applications.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ width: "50px", height: "50px" }}
        >
          <path d="M508.5 249.8 486.7 236.2c-.2-2-.3-3.9-.6-5.9l18.7-17.5a7.4 7.4 0 0 0 -2.4-12.3l-24-9c-.5-1.9-1.1-3.8-1.7-5.6l15-20.8a7.4 7.4 0 0 0 -4.8-11.5l-25.4-4.2c-.9-1.7-1.8-3.5-2.7-5.2l10.7-23.4a7.4 7.4 0 0 0 -7-10.4l-25.8 .9q-1.8-2.2-3.6-4.4Z" />
        </svg>
      ),
    },
    {
      title: "C#",
      description:
        "High-level, object-oriented language developed by Microsoft. Commonly used for desktop, web, and game development (especially with Unity).",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "50px", height: "50px" }}
        >
          <path d="M224 32c124.4 0 224 99.6 224 224S348.4 480 224 480 0 380.4 0 256 99.6 32 224 32zm0 64C135.6 96 64 167.6 64 256s71.6 160 160 160 160-71.6 160-160S312.4 96 224 96z" />
        </svg>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="big-div">
      <div className="obj-grid2 relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={prevSlide} className="p-2 bg-[#202020] rounded-full text-white">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={nextSlide} className="p-2 bg-[#202020] rounded-full text-white">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`obj2 min-w-full md:min-w-0 transition-transform duration-300 ease-in-out`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="p-8 flex flex-col">
                {item.icon}
                <h2 className="obj-title">{item.title}</h2>
                <p className="obj-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;