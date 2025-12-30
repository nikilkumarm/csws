"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Heart, Camera, Star, Sparkles, Infinity } from "lucide-react";
import FounderNote from "../components/FounderNote";
import { CinematicGrain } from "../components/Patterns";

// --- VISUAL COMPONENTS ---

function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Soft floating particles (like dust motes in sunlight)
    const p = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cinelineGold mix-blend-screen opacity-30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: 9999, // Workaround for potential Infinity issue in WAAPI
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function LoveCard({ title, desc, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative h-full p-px rounded-2xl overflow-hidden"
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-cinelineGold/50 transition-colors duration-700 rounded-2xl" />

      <div className="relative h-full bg-[#080808] p-8 rounded-2xl flex flex-col items-start gap-6 z-10 transition-colors duration-500 group-hover:bg-[#0a0a0a]">
        <div className="w-16 h-16 rounded-full bg-cinelineGold/5 flex items-center justify-center text-cinelineGold group-hover:bg-cinelineGold group-hover:text-black transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <div>
          <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-cinelineGold transition-colors font-display">{title}</h3>
          <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8 font-display">
      {children}
    </h2>
  )
}

// --- PAGE COMPONENT ---

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen font-sans selection:bg-cinelineGold selection:text-white overflow-hidden">
      <CinematicGrain opacity={0.12} />

      {/* 1. HERO: TIMELESS ELEGANCE */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-cinelineGold/10 via-black to-black opacity-60" />
          <FloatingParticles />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cinelineGold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Est. 2024</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] lg:text-[10vw] leading-[0.9] font-medium tracking-tight text-white mb-8 mix-blend-overlay"
          >
            CAPTURING <br />
            <span className="font-serif italic text-cinelineGold opacity-90">The Unspoken.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4 md:px-0"
          >
            We translate fleeting moments into <span className="text-cinelineGold">eternal memories</span>.
            A sanctuary for love, art, and storytelling.
          </motion.p>
        </div>
      </section>

      {/* 2. NARRATIVE: THE LOVE STORY */}
      <section className="py-20 md:py-32 relative text-center lg:text-left">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text Side */}
            <div className="order-2 lg:order-1 space-y-12">
              <div>
                <span className="text-cinelineGold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Essence</span>
                <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] mb-8 font-display">
                  More than a camera. <br />
                  <span className="text-gray-500 text-3xl md:text-5xl">We are witnesses to love.</span>
                </h2>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
                  Every glance, every touch, every tear holds a universe of emotion. Our mission is to preserve these universes.
                  We don't just document events; we craft a visual legacy that you will cherish for generations.
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  At Cineline Studios, professionalism meets pure heart. We blend technical mastery with a deep sensitivity to the human experience, ensuring that your story is told with the grace it deserves.
                </p>
              </div>

              <div className="flex gap-8 pt-8 border-t border-white/10 justify-center lg:justify-start">
                <div>
                  <span className="block text-4xl font-light text-white mb-1">500+</span>
                  <span className="text-xs uppercase tracking-widest text-cinelineGold">Stories Told</span>
                </div>
                <div className="w-px bg-white/10 h-12" />
                <div>
                  <span className="block text-4xl font-light text-white mb-1">100%</span>
                  <span className="text-xs uppercase tracking-widest text-cinelineGold">Heart</span>
                </div>
              </div>
            </div>

            {/* Image Side - Updated to 1:1 Square */}
            <div className="order-1 lg:order-2 relative group">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/5 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
                  alt="Wedding Emotion"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 opacity-80 hover:scale-105 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-xs transform group-hover:-translate-y-2 transition-transform duration-700">
                  <p className="text-white italic font-serif text-lg">"Love is the only gold."</p>
                </div>
              </div>

              {/* Decorative Frame Brackets - Consistency with Team Page */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cinelineGold/40 group-hover:border-cinelineGold transition-all duration-700" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cinelineGold/40 group-hover:border-cinelineGold transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES: PROFESSIONAL LOVE */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cinelineGold/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 md:mb-8 font-display">The Heart of Cineline</h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
              Built on a foundation of trust, excellence, and genuine care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LoveCard
              icon={Heart}
              title="Emotive Storytelling"
              desc="We look for the authentic moments. The quiet whispers, the loud laughter, the unscripted joy. That is where the magic lives."
              delay={0}
            />
            <LoveCard
              icon={Camera}
              title="Artistic Excellence"
              desc="Our team is composed of seasoned professionals who treat every frame as a painting. Perfection is our love language."
              delay={0.2}
            />
            <LoveCard
              icon={Infinity}
              title="Timeless Connection"
              desc="We build relationships, not just portfolios. We are honored to walk beside you on your most important days."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 4. FOUNDER NOTE (TEAM) */}
      <FounderNote />

      {/* 5. CALL TO ACTION: ELEGANT */}
      <section className="h-[70vh] flex flex-col items-center justify-center relative overflow-hidden bg-black text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-cinelineGold/10 via-transparent to-transparent opacity-50" />

        <div className="relative z-10 px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-8xl font-medium tracking-tight mb-10 text-white font-display">
            Your Story, <br />
            <span className="text-cinelineGold italic font-serif opacity-90">Immoralized.</span>
          </h2>

          <Link href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full overflow-hidden hover:bg-gray-100 transition-colors duration-300">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Begin The Journey</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
