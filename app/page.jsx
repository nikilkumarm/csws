"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity, useAnimationFrame, useInView } from "framer-motion";
import { wrap } from "@motionone/utils";
import { ArrowRight, ArrowUpRight, Play, Star, Sparkles } from "lucide-react";
import Hero from "./components/Hero";
import PremiumServices from "./components/PremiumServices";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import FounderNote from "./components/FounderNote";
import { CinematicGrain, SubtleGrid, DotGrid } from "./components/Patterns";

// --- VELOCITY SCROLL COMPONENT ---
function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "20%" }); // Optimized

  useAnimationFrame((t, delta) => {
    if (!isInView) return; // PAUSE ANIMATION IF OFF SCREEN

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap text-6xl md:text-9xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold/20 to-cinelineGold/40 stroked-text-gold" style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="block mr-12 md:mr-24">{children} </span>
        ))}
      </motion.div>
    </div>
  );
}

// --- CUSTOM COMPONENTS ---

const SectionHeader = ({ subtitle, title, dark = false }) => (
  <div className={`mb-16 md:mb-24 ${dark ? "text-white" : "text-cinelineDark"}`}>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-4"
    >
      <span className={`w-12 h-[2px] ${dark ? "bg-cinelineGold" : "bg-cinelineDark"}`}></span>
      <span className="uppercase tracking-[0.3em] text-xs font-bold text-cinelineGold">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter"
    >
      {title}
    </motion.h2>
  </div>
);

// --- MAGNET BUTTON ---
function MagneticButton({ children, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ProjectCard = ({ title, category, img, year = "2024", colSpan = 1 }) => {
  const spanClass = colSpan === 2 ? "md:col-span-2" : "md:col-span-1";
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <div className={`relative ${spanClass} h-[600px] md:h-[800px] w-full z-10`}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.2, 1] }}
        className="group relative h-full w-full overflow-hidden bg-gray-900 cursor-none shadow-2xl"
        onMouseMove={handleMouse}
      >
        {/* Dynamic Background Image with Parallax */}
        <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{ y }}>
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Noise Texture for Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20 pointer-events-none">
          {/* Header (Year + Arrow) */}
          <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <span className="text-white/60 font-mono text-sm tracking-widest border border-white/20 px-2 py-1 rounded-full">{year}</span>
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <ArrowUpRight className="text-white w-5 h-5" />
            </div>
          </div>

          {/* Footer (Title + Category) */}
          <div>
            <div className="overflow-hidden mb-2">
              <span className="inline-block text-cinelineGold font-bold uppercase tracking-[0.2em] text-xs transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {category}
              </span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter mix-blend-difference group-hover:translate-x-2 transition-transform duration-500">
              {title}
            </h3>
          </div>
        </div>

        {/* Custom Follower Cursor */}
        <motion.div
          className="absolute z-30 w-32 h-32 bg-cinelineGold/20 rounded-full flex items-center justify-center pointer-events-none blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ left: mouseX, top: mouseY, x: "-50%", y: "-50%" }}
        />
      </motion.div>
    </div>
  );
};

export default function Page() {
  const containerRef = useRef(null);

  // Manifesto Parallax
  const { scrollYProgress } = useScroll();
  const manifestoOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const manifestoScale = useTransform(scrollYProgress, [0.05, 0.2], [0.98, 1]);

  return (
    <div ref={containerRef} className="bg-[#fcfbf9] min-h-screen text-[#111] overflow-x-hidden selection:bg-cinelineGold selection:text-white font-sans">
      <main>
        {/* 1. HERO - FULL SCREEN & IMMERSIVE */}
        <Hero />

        {/* 2. VELOCITY SCROLL STRIP - SEAMLESS BLEND */}
        <div className="py-12 bg-black border-y border-white/10 relative z-20 overflow-hidden">
          <CinematicGrain opacity={0.1} />
          <ParallaxText baseVelocity={-2}>Visual Excellence • Cineline Studios •</ParallaxText>
        </div>

        {/* 3. MANIFESTO - DARK MODE PARALLAX */}
        <section className="relative py-40 md:py-60 px-6 bg-[#050505] text-white">
          <SubtleGrid opacity={0.05} />

          {/* Subtle Dynamic Background & GEOMETRIC PATTERNS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-cinelineGold/10 rounded-full blur-[180px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[200px]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

            {/* Rotating Geometric Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-cinelineGold/10 rounded-full opacity-60"
            />

            {/* Floating Plus Signs Grid */}
            <div className="absolute top-20 left-20 grid grid-cols-3 gap-12 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-3 h-3 text-cinelineGold text-xl font-thin">+</div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div
              style={{ opacity: manifestoOpacity, scale: manifestoScale }}
              className="space-y-8 md:space-y-12"
            >
              {/* STAGGERED REVEAL TEXT */}
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-medium leading-[1.1] md:leading-[0.95] tracking-tight">
                <span className="block text-white mb-2 md:mb-0">We frame</span>
                {/* Word-by-word reveal */}
                <div className="overflow-visible md:overflow-hidden block">
                  <motion.span
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="block text-white mb-2 md:mb-0"
                  >
                    the moments
                  </motion.span>
                </div>
                <div className="overflow-visible md:overflow-hidden block">
                  <motion.span
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="block text-cinelineGold italic font-serif"
                  >
                    that matter most.
                  </motion.span>
                </div>
              </h2>

              <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl border-l-2 border-cinelineGold/30 pl-6 md:pl-8">
                Cineline Studios is a collective of visionary artists dedicated to the pursuit of the perfect shot. Light is our language, emotion is our currency.
              </p>

              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl md:text-5xl font-bold text-white">100+</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Projects</span>
                </div>
                <div className="w-[1px] bg-white/10 h-10 md:h-14" />
                <div className="flex flex-col gap-1">
                  <span className="text-3xl md:text-5xl font-bold text-white">100%</span>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Satisfaction</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Showreel Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[400px] md:h-[600px] w-full bg-gray-900 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                alt="Reel"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <span className="block text-cinelineGold uppercase tracking-widest text-xs mb-2">Featured</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white drop-shadow-md tracking-tighter">2025 Collection</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section >

        {/* 4. SELECTED WORKS - EDITORIAL LAYOUT */}
        < section className="py-0 bg-white relative" >
          {/* Section Background Text */}
          <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.06]">
            <h2 className="text-[20vw] leading-[0.8] font-bold text-black whitespace-nowrap">
              SELECTED WORKS
            </h2>
          </div>

          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-0 pt-32 pb-12 flex flex-col md:flex-row justify-between items-end">
              <SectionHeader subtitle="Portfolio" title="Selected Works" dark={false} />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Massive Feature */}
              <ProjectCard
                title="Vogue Editorial"
                category="Fashion"
                year="2024"
                img="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop"
                colSpan={2}
              />

              {/* Vertical Portrait */}
              <ProjectCard
                title="The Royal Union"
                category="Wedding"
                year="2023"
                img="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop"
              />

              <ProjectCard
                title="Urban Kinetics"
                category="Commercial"
                year="2024"
                img="https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=1600&auto=format&fit=crop"
              />

              {/* Massive Feature Bottom */}
              <ProjectCard
                title="Neon Nights"
                category="Event"
                year="2023"
                img="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
                colSpan={2}
              />
            </div>

            <div className="py-32 flex justify-center bg-white relative z-10">
              <Link href="/portfolio" className="group relative px-12 py-6 bg-black text-white overflow-hidden rounded-full">
                <div className="absolute inset-0 w-full h-full bg-cinelineGold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                <div className="relative flex items-center gap-3">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] group-hover:text-black transition-colors">View All Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:text-black transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </section >

        {/* 5. SERVICES - CLEAN & TECHNICAL */}
        <div className="bg-[#f0f0f0] py-32 md:py-40 border-t border-gray-200 relative text-cinelineDark overflow-hidden">
          {/* Technical Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }
            }
          />
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader subtitle="Expertise" title="Our Services" dark={false} />
            <p className="max-w-2xl text-xl text-gray-500 mb-16 font-light">
              We offer a comprehensive suite of visual production services, tailored to elevate brands and capture life's defining moments.
            </p>
          </div>
          <PremiumServices />
        </div>

        {/* 6. FOUNDER NOTE - MINI PROFILE */}
        <FounderNote />

        {/* 7. TESTIMONIALS - IMMERSIVE DARK */}
        <div className="bg-[#050505] py-12 md:py-16 text-white relative overflow-hidden">
          <CinematicGrain opacity={0.05} />
          <DotGrid opacity={0.05} />
          {/* Spotlight Effect & Constellation Pattern */}
          < div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cinelineGold/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Geometric Constellation */}
          < svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg" >
            <defs>
              <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />

            {/* Connected Lines */}
            <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" />
            <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="200" stroke="rgba(255,255,255,0.05)" fill="none" />
          </svg >

          <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-8 backdrop-blur-md border border-white/10">
                <Sparkles className="w-8 h-8 text-cinelineGold drop-shadow-lg" fill="currentColor" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">Client Love</h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto">Don't just take our word for it. Hear from those we've had the privilege to work with.</p>
            </motion.div>
          </div>
          <Testimonials />
        </div >

      </main >

      <WhatsAppButton />
    </div >
  );
}
