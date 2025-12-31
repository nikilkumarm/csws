"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const divRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleMove = (e) => {
      if (!divRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        if (divRef.current) {
          const x = e.clientX;
          const y = e.clientY;
          divRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-[50] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.06), transparent 40%)`,
      }}
    />
  );
}