"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// The source photos
const pilePhotos = [
  "/images/pile/p1.JPG",
  "/images/pile/p2.jpg",
  "/images/pile/p3.jpg",
  "/images/pile/p4.JPG",
  "/images/pile/p5.JPG",
  "/images/pile/p6.JPG",
  "/images/pile/p7.jpg",
  "/images/pile/p8.JPG",
  "/images/pile/p9.JPG",
  "/images/pile/p10.JPG",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState([]);
  const [displayPhotos, setDisplayPhotos] = useState([]); // Shuffled photos
  const [loadingSizes, setLoadingSizes] = useState([]);
  const [floatDelays, setFloatDelays] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // REFS FOR PERFORMANCE
  const ticking = useRef(false);

  useEffect(() => {
    // 1. Shuffle Photos (Fisher-Yates)
    const shuffled = [...pilePhotos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDisplayPhotos(shuffled);

    // 2. Define Base Layout (The "Architecture" of the pile) with explicit Z-index hierarchy
    const isMobile = window.innerWidth < 768;
    const spreadFactor = isMobile ? 0.22 : 0.55;

    // THE "WHITE GALLERY" ARCHITECTURE - PERFECT SYMMETRICAL GRID
    const basePositions = [
      // Column 1 (Portrait Top, Landscape Bottom)
      { id: 'c1-1', x: -330 * spreadFactor, y: -160 * spreadFactor, rot: 0, z: 20, zIndex: 10, w: isMobile ? 80 : 160, h: isMobile ? 110 : 220 },
      { id: 'c1-2', x: -330 * spreadFactor, y: 160 * spreadFactor, rot: 0, z: 0, zIndex: 5, w: isMobile ? 85 : 170, h: isMobile ? 65 : 130 },

      // Column 2 (Landscape Top, Portrait Bottom)
      { id: 'c2-1', x: -110 * spreadFactor, y: -160 * spreadFactor, rot: 0, z: 50, zIndex: 30, w: isMobile ? 85 : 170, h: isMobile ? 65 : 130 },
      { id: 'c2-2', x: -110 * spreadFactor, y: 160 * spreadFactor, rot: 0, z: 10, zIndex: 15, w: isMobile ? 80 : 160, h: isMobile ? 110 : 220 },

      // Column 3 (Portrait Top, Landscape Bottom)
      { id: 'c3-1', x: 110 * spreadFactor, y: -160 * spreadFactor, rot: 0, z: 70, zIndex: 40, w: isMobile ? 80 : 160, h: isMobile ? 110 : 220 },
      { id: 'c3-2', x: 110 * spreadFactor, y: 160 * spreadFactor, rot: 0, z: 20, zIndex: 10, w: isMobile ? 85 : 170, h: isMobile ? 65 : 130 },

      // Column 4 (Landscape Top, Portrait Bottom)
      { id: 'c4-1', x: 330 * spreadFactor, y: -160 * spreadFactor, rot: 0, z: 5, zIndex: 2, w: isMobile ? 85 : 170, h: isMobile ? 65 : 130 },
      { id: 'c4-2', x: 330 * spreadFactor, y: 160 * spreadFactor, rot: 0, z: 90, zIndex: 90, w: isMobile ? 80 : 160, h: isMobile ? 110 : 220 },

      // Depth Layers (Subtle background floaters to maintain 'pile' count)
      { id: 'fl1', x: -40 * spreadFactor, y: 0 * spreadFactor, rot: 0, z: -100, zIndex: 1, w: isMobile ? 70 : 140, h: isMobile ? 50 : 100 },
      { id: 'fl2', x: 240 * spreadFactor, y: 0 * spreadFactor, rot: 0, z: -150, zIndex: 0, w: isMobile ? 70 : 140, h: isMobile ? 50 : 100 },
    ];

    // 3. Generate Settled Positions with absolute minimal jitter for a straight, clean look
    const newPositions = basePositions.map((p) => ({
      x: p.x + (Math.random() * 2 - 1),
      y: p.y + (Math.random() * 2 - 1),
      rot: p.rot, // Lock rotation to 0 for the straight gallery look
      z: p.z,
      zIndex: p.zIndex
    }));

    setPositions(newPositions);

    // 4. Curated Sizes
    const sizes = basePositions.map((p) => ({
      w: p.w,
      h: p.h
    }));
    setLoadingSizes(sizes);

    // DYNAMIC SPRING TRANSITION (Simulated by transition prop in return)
    const delays = basePositions.map(() => Math.random() * -12);
    setFloatDelays(delays);

    // Trigger Entrance
    setTimeout(() => setMounted(true), 100);

  }, []);

  // OPTIMIZED SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // OPTIMIZED MOUSE (Throttled)
  useEffect(() => {
    let mouseFrame;
    const handleMouse = (e) => {
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
      mouseFrame = requestAnimationFrame(() => {
        // Smooth dampening
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(mouseFrame);
    };
  }, []);

  return (
    <section className="relative w-full pt-12 pb-12 md:pt-32 md:pb-32 bg-[var(--bg)] overflow-hidden select-none min-h-[100dvh] md:min-h-screen flex items-center">

      {/* ATMOSPHERE LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209, 200, 186, 0.25),transparent_70%)] blur-3xl will-change-transform" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#cbb99e 1px, transparent 1px), linear-gradient(90deg, #bcab92ff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        {/* Geometric Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] border border-cinelineGold/30 rounded-full opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vh] h-[70vh] border border-white/20 rounded-full opacity-30" />

        {/* Animated Dashed Ring */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] opacity-20 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="49" stroke="white" strokeWidth="0.3" fill="none" strokeDasharray="4 4" />
        </svg>

        {/* Crosshairs */}
        <div className="hidden md:block absolute top-8 right-8 text-cinelineGold/40">+</div>
        <div className="hidden md:block absolute bottom-8 left-8 text-cinelineGold/40">+</div>
      </div>
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-soft-light grain" />

      {/* GOD RAY / PROJECTOR LIGHT EFFECT BEHIND IMAGES */}
      <div className="absolute right-0 top-1/4 w-1/2 h-[500px] bg-gradient-to-l from-cinelineGold/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* LEFT SIDE: CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 will-change-transform order-last md:order-first">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[2px] w-12 bg-cinelineGold"></div>
            <span className="text-cinelineGold font-medium tracking-widest uppercase text-sm">
              Cineline Studios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-cinelineDark"
          >
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold to-yellow-700">
              Timeless
            </span> <br />
            Stories.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md font-light mb-10"
          >
            We blend artistic vision with technical precision to create
            cinematic photography & films that resonate for a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8"
          >
            <Link
              href="/portfolio"
              className="group relative px-7 py-3 bg-cinelineDark text-white rounded-full overflow-hidden transition-all duration-300 min-w-[140px] text-center hover:shadow-2xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3 text-sm font-semibold tracking-widest uppercase">
                <span>Work</span>
                <span className="w-1 h-1 rounded-full bg-cinelineGold group-hover:bg-white transition-colors" />
                <ArrowRight size={14} className="-ml-1 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 bg-cinelineGold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/booking"
              className="group px-7 py-3 rounded-full border border-gray-200 bg-white text-cinelineDark text-sm font-semibold tracking-widest uppercase hover:border-cinelineDark hover:bg-cinelineDark hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl min-w-[140px] text-center"
            >
              <span>Book</span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE: PREMIUM CONNECTED GALLERY (Curated 3D Cluster) */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center perspective-[2000px] cursor-grab active:cursor-grabbing">
          <div
            className="relative w-full h-full preserve-3d will-change-transform"
            style={{
              transform: `rotateX(${mouse.y * 5 - scrollY * 0.015}deg) rotateY(${mouse.x * 5}deg)`,
              transition: "transform 0.4s cubic-bezier(0.1, 0.4, 0.2, 1)",
            }}
          >
            {/* Show only when positions are ready to avoid layout shift */}
            {positions.length > 0 && displayPhotos.slice(0, positions.length).map((src, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 transition-all duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) will-change-transform"
                style={{
                  width: loadingSizes[i]?.w || 200,
                  height: loadingSizes[i]?.h || 260,
                  marginLeft: -(loadingSizes[i]?.w || 200) / 2,
                  marginTop: -(loadingSizes[i]?.h || 260) / 2,
                  transform: mounted
                    ? `translate3d(${positions[i]?.x || 0}px, ${positions[i]?.y || 0}px, ${positions[i]?.z || 0}px) rotateZ(${positions[i]?.rot || 0}deg)`
                    : `translate3d(0px, 0px, -200px) rotateZ(0deg) scale(0.5)`,
                  zIndex: positions[i]?.zIndex || 1,
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* The Boutique Frame Style (The White Gallery Look) */}
                <div
                  className="w-full h-full p-[2px] md:p-[4px] bg-white rounded-[2px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3),0_15px_30px_-10px_rgba(0,0,0,0.2)] premium-float group relative border border-gray-100"
                  style={{ animationDelay: `${floatDelays[i]}s` }}
                >
                  {/* The Inner Matte Area */}
                  <div className="w-full h-full relative overflow-hidden bg-[#f8f8f8] flex items-center justify-center p-[2%]">
                    {/* The Image Itself */}
                    <div className="relative w-full h-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
                      <Image
                        src={src}
                        alt="Cineline Moment"
                        fill
                        className="object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.03]"
                        sizes="400px"
                        priority={i < 4}
                      />
                    </div>
                    {/* Perspective Light Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-40 mix-blend-overlay pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d { transform-style: preserve-3d; perspective: 1200px; }
        .grain { background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png"); }
        @keyframes premiumFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); } 
        }
        .premium-float {
          animation: premiumFloat 8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}