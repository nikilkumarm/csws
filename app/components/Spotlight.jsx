"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const divRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (!divRef.current) return;
      
      // OPTIMIZATION: Update DOM directly without triggering React State re-render
      const x = e.clientX;
      const y = e.clientY;
      
      divRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-[50] transition-opacity duration-300"
      // Set initial state to avoid flash
      style={{
        background: `radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.06), transparent 40%)`,
      }}
    />
  );
}