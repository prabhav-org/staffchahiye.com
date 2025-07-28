

import { useEffect, useState } from "react";

const images = [
  "waiter.gif",
  "waiter-1.gif",
  "waiter-2.gif",
  "waiter-3.gif"
];

export default function VerticalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    if (index === currentIndex) {
      return "z-30 scale-100 translate-x-0";
    } else if (index === (currentIndex - 1 + images.length) % images.length) {
      return "z-20 -translate-x-16 scale-90 rotate-[-6deg]";
    } else if (index === (currentIndex + 1) % images.length) {
      return "z-20 translate-x-16 scale-90 rotate-[6deg]";
    } else {
      return "opacity-0 scale-75 pointer-events-none";
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full bg-gray-50 py-12 overflow-hidden">
      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-8 z-40 bg-white shadow-md rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-700 hover:scale-110 transition"
      >
        &#8592;
      </button>

      {/* Slides container with taller cards */}
      <div className="relative w-[65vw] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[100vw] sm:h-[420px] md:h-[500px]">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl md:rounded-2xl shadow-xl transition-all duration-500 ease-in-out ${getSlideStyle(
              i
            )}`}
          />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-8 z-40 bg-white shadow-md rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-700 hover:scale-110 transition"
      >
        &#8594;
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition duration-300 ${
              i === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
