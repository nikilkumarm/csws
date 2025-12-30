"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Camera, Award, Heart, ArrowRight } from "lucide-react";
import FounderNote from "../components/FounderNote";

// --- GOD-LEVEL VISUAL COMPONENTS ---

function AtmosphericDust() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Fewer particles, lightweight
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [-20, -100],
            x: Math.random() * 40 - 20
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-cinelineGold mix-blend-screen"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

function GeometricAperture() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {/* 1. The Core Glow */}
      <div className="absolute w-[800px] h-[800px] bg-cinelineGold/5 rounded-full blur-[100px] animate-pulse" />

      {/* 2. Rotating Dashed Rings (The Lens) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-dashed border-cinelineGold/20 rounded-full opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute w-[500px] h-[500px] border border-dotted border-cinelineGold/30 rounded-full opacity-40"
      />

      {/* 3. The Triangle Gate */}
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-cinelineGold/10 opacity-30"
      />
      <motion.div
        animate={{ rotate: -180 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-cinelineGold/10 opacity-30 rotate-45"
      />

      {/* 4. Orbital Particles */}
      <OrbitalRing radius={300} duration={20} />
      <OrbitalRing radius={450} duration={35} reverse />
    </div>
  );
}

function OrbitalRing({ radius, duration, reverse }) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute flex items-center justify-center"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <div className="absolute top-0 w-3 h-3 bg-cinelineGold rounded-full shadow-[0_0_15px_rgba(203,185,158,0.8)]" />
    </motion.div>
  );
}

function PerspectiveGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 transform-gpu perspective-1000">
      <div
        className="absolute inset-0 w-[200%] h-[200%] -left-[50%] -top-[50%]"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage: "linear-gradient(to right, rgba(203, 185, 158, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 185, 158, 0.1) 1px, transparent 1px)",
          transform: "rotateX(60deg) translateY(-100px) translateZ(-200px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-transparent" />
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="group relative p-1 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 dark:to-transparent border border-white/10 hover:border-cinelineGold/40 transition-colors"
    >
      <div className="absolute inset-0 bg-cinelineGold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative p-7 h-full bg-[var(--bg)]/80 backdrop-blur-xl rounded-xl">
        <div className="w-14 h-14 rounded-full bg-cinelineGold/10 flex items-center justify-center mb-6 text-cinelineGold group-hover:scale-110 group-hover:bg-cinelineGold group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(203,185,158,0.15)]">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-display font-medium mb-3 text-cinelineDark dark:text-white group-hover:text-cinelineGold transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- MAIN PAGE ---

export default function AboutPage() {
  const containerRef = useRef(null);

  // OPTIMIZATION: Track window scroll instead of container to avoid conflict with Lenis/SmoothScroll
  const { scrollYProgress } = useScroll();

  // Parallax for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;
      mouseX.set((clientX / innerWidth - 0.5) * 40); // Move range -20 to 20
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden font-sans selection:bg-cinelineGold/30 relative">

      <AtmosphericDust />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Dynamic Backgrounds */}
        <div className="absolute inset-0 z-0">
          <PerspectiveGrid />
          <motion.div style={{ x: springX, y: springY }} className="absolute inset-0 flex items-center justify-center">
            <GeometricAperture />
          </motion.div>
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-[var(--bg)]" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-cinelineGold/50 text-cinelineGold text-xs font-bold tracking-[0.2em] uppercase bg-cinelineGold/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cinelineGold animate-pulse" />
              Est. 2024
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none text-cinelineDark dark:text-white">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold via-yellow-200 to-cinelineGold animate-text-shimmer bg-[length:200%_auto]">
              THE INVISIBLE
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500/80 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            A multidisciplinary creative house tailored for those who demand
            uncompromising quality and deep emotional resonance.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cinelineGold/50"
        >
          <ArrowRight className="rotate-90" size={24} />
        </motion.div>
      </section>

      {/* VISION SECTION */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text Side */}
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Not just production. <br />
                <span className="text-cinelineGold font-display italic">Pure Alchemy.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-cinelineGold/20 pl-8">
                <p>
                  Founded on the belief that every frame should tell a story, we merge
                  technical precision with artistic intuition. We don't just capture moments;
                  we construct atmospheres that linger in the mind long after the screen goes dark.
                </p>
                <p>
                  From high-end commercial campaigns to intimate narratives, our approach remains
                  consistent: obsessive attention to detail and a relentless pursuit of beauty.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <Link href="/manifesto" className="inline-flex items-center gap-3 px-8 py-4 bg-cinelineDark dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform">
                  Explore Manifesto <ArrowRight size={18} />
                </Link>
              </div>
            </FadeIn>

            {/* Visual Side */}
            <FadeIn delay={0.2} className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gray-900 border border-white/10" />

              {/* Complex Layered Composition - Standardized to Next/Image for performance */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000">
                <Image
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
                  alt="Cinematography"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Overlay Graphics */}
              <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-20 h-20 border border-dashed border-white/20 rounded-full" />
              </div>

              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-end justify-between border-b border-white/20 pb-6 mb-6">
                  <div>
                    <div className="text-cinelineGold text-sm font-bold tracking-widest uppercase mb-2">Since Day One</div>
                    <div className="text-5xl font-bold text-white">500+</div>
                  </div>
                  <div className="text-right text-white/60 text-sm max-w-[100px]">
                    Happy Clients Worldwide
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-cinelineGold"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* FOUNDER DETAILED SECTION */}
      <FounderNote />

      {/* CORE VALUES (Transparent Cards) */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Cineline Philosophy</h2>
            <p className="text-gray-500 text-xl">Three pillars that define every single pixel we polish.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Camera}
              title="Cinematic Precision"
              desc="We utilize state-of-the-art equipment and techniques to ensure industry-leading visual fidelity."
              delay={0.1}
            />
            <ValueCard
              icon={Heart}
              title="Emotional Resonance"
              desc="Technical quality is nothing without soul. We focus on the feeling behind the frame."
              delay={0.2}
            />
            <ValueCard
              icon={Award}
              title="Timeless Aesthetic"
              desc="Trends fade. We create work that stands the test of time, remaining relevant for decades."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="h-[60vh] flex items-center justify-center relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 contrast-150" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 text-gray-400"
          >
            Let's Create <span className="text-cinelineGold">History.</span>
          </motion.h2>
          <Link href="/contact" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Start Your Project</span>
              <div className="absolute inset-0 bg-cinelineGold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
              <ArrowRight className="relative z-10 group-hover:text-white transition-colors" />
            </motion.div>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}
