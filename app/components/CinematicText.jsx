"use client";
import { useEffect, useRef, useState } from "react";

export default function CinematicText({ text, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Triggers when 10% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Split text into words for staggered effect
  const words = text.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {words.map((word, i) => (
          <span className="overflow-hidden block" key={i}>
            <span
              className={`block transition-transform duration-[1000ms] ease-[cubic-bezier(0.2,0.65,0.3,0.9)]`}
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(110%)", // Start pushed down
                transitionDelay: `${i * 30}ms`, // Stagger delay per word
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}