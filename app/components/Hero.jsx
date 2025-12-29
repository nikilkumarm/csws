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
    const spreadFactor = isMobile ? 0.6 : 1; // Compact spread for mobile

    const basePositions = [
      { id: 'center', x: 0 * spreadFactor, y: 0 * spreadFactor, rot: -2, z: 100, zIndex: 50, varX: 20, varY: 20, varRot: 5 },
      { id: 'left1', x: -140 * spreadFactor, y: -50 * spreadFactor, rot: 6, z: 20, zIndex: 10, varX: 40, varY: 40, varRot: 10 },
      { id: 'right1', x: 150 * spreadFactor, y: 40 * spreadFactor, rot: -4, z: 30, zIndex: 20, varX: 40, varY: 40, varRot: 10 },
      { id: 'botLeft', x: -100 * spreadFactor, y: 130 * spreadFactor, rot: -8, z: 60, zIndex: 40, varX: 30, varY: 30, varRot: 10 },
      { id: 'topRight', x: 110 * spreadFactor, y: -120 * spreadFactor, rot: 5, z: 10, zIndex: 5, varX: 40, varY: 40, varRot: 10 },
      { id: 'farRight', x: 220 * spreadFactor, y: 110 * spreadFactor, rot: -12, z: 0, zIndex: 2, varX: 50, varY: 50, varRot: 15 },
      { id: 'farLeft', x: -220 * spreadFactor, y: -20 * spreadFactor, rot: 8, z: 5, zIndex: 3, varX: 50, varY: 50, varRot: 15 },
      { id: 'botCenter', x: 40 * spreadFactor, y: 170 * spreadFactor, rot: 2, z: 80, zIndex: 45, varX: 30, varY: 30, varRot: 5 },
    ];

    // 3. Generate Randomized Positions based on Architecture + Jitter
    const newPositions = basePositions.map((p) => ({
      x: p.x + (Math.random() * p.varX * 2 - p.varX),         // e.g. -20 to +20
      y: p.y + (Math.random() * p.varY * 2 - p.varY),
      rot: p.rot + (Math.random() * p.varRot * 2 - p.varRot),
      z: p.z,   // Keep depth hierarchy stable
      zIndex: p.zIndex
    }));

    setPositions(newPositions);

    // 4. Randomized Sizes & Animation Delays
    const sizes = pilePhotos.map(() => ({
      w: 130 + Math.random() * 40, // Varied widths (130-170ish)
      h: 170 + Math.random() * 50  // Varied heights (170-220ish)
    }));
    setLoadingSizes(sizes);

    const delays = pilePhotos.map(() => Math.random() * -8); // Start at different points in the 8s cycle
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
    <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-32 bg-[var(--bg)] overflow-hidden select-none min-h-screen flex items-center">

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
        <div className="absolute top-8 right-8 text-cinelineGold/40">+</div>
        <div className="absolute bottom-8 left-8 text-cinelineGold/40">+</div>
      </div>
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-soft-light grain" />

      {/* GOD RAY / PROJECTOR LIGHT EFFECT BEHIND IMAGES */}
      <div className="absolute right-0 top-1/4 w-1/2 h-[500px] bg-gradient-to-l from-cinelineGold/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center">

        {/* LEFT SIDE: CONTENT */}
        <div className="flex flex-col items-start z-10 will-change-transform">
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-cinelineDark"
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
            className="flex flex-wrap gap-8"
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
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px] cursor-grab active:cursor-grabbing">
          <div
            className="relative w-full h-full preserve-3d will-change-transform"
            style={{
              transform: `rotateX(${mouse.y * 5 - scrollY * 0.015}deg) rotateY(${mouse.x * 5}deg)`,
              transition: "transform 0.4s cubic-bezier(0.1, 0.4, 0.2, 1)",
            }}
          >
            {/* Show only when positions are ready to avoid layout shift, or use initial dummy state */}
            {positions.length > 0 && displayPhotos.map((src, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 transition-all duration-[1500ms] cubic-bezier(0.19, 1, 0.22, 1) will-change-transform"
                style={{
                  width: loadingSizes[i]?.w || 200,
                  height: loadingSizes[i]?.h || 260,
                  marginLeft: -(loadingSizes[i]?.w || 200) / 2,
                  marginTop: -(loadingSizes[i]?.h || 260) / 2,
                  transform: mounted
                    ? `translate3d(${positions[i].x}px, ${positions[i].y}px, ${positions[i].z}px) rotateZ(${positions[i].rot}deg)`
                    : `translate3d(0px, 0px, -200px) rotateZ(0deg) scale(0.5)`,
                  zIndex: positions[i].zIndex,
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Cinema Card Style */}
                <div
                  className="w-full h-full rounded-lg overflow-hidden border-[3px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] premium-float group relative bg-black"
                  style={{ animationDelay: `${floatDelays[i]}s` }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt="Cinematic Moment"
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                      sizes="300px"
                      priority={i < 4}
                    />
                    {/* Luxe Gloss Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); } 
        }
        .premium-float {
          animation: premiumFloat 8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}