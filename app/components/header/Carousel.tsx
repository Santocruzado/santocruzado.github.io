"use client";
import { useState, useEffect } from "react";
interface Slide {
  imageUrl: string;
  caption: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "block" : "hidden"}
        >
          <img
            src={slide.imageUrl}
            alt={slide.caption}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 text-cyan-100 z-10 bg-slate-400 hover:bg-slate-600 rounded-sm"
        onClick={prevSlide}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 text-cyan-100 z-10 bg-slate-400 hover:bg-slate-600 rounded-sm"
        onClick={nextSlide}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 5 7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
