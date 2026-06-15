"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, ArrowUpRight, Camera, Film, Crown, Sparkles, Gem } from "lucide-react";
import { CinematicGrain } from "../components/Patterns";

const easeModern = { type: "spring", bounce: 0, duration: 1.5 };

function BentoCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay, ...easeModern }}
      className={`relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden group hover:border-cinelineGold/30 transition-all duration-700 ${className}`}
    >
      {/* Glow Hover */}
      <div className="absolute top-[-20%] right-[-20%] w-3/4 h-3/4 bg-cinelineGold/15 blur-[120px] rounded-full group-hover:bg-cinelineGold/30 transition-colors duration-[2s] pointer-events-none z-0" />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

function CircularLogoItem({ name, role, image, imgScale = 1 }) {
  return (
    <div className="flex flex-col items-center gap-6 group">
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white flex items-center justify-center p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] transition-all duration-500 cursor-pointer flex-shrink-0">
        <div className="relative w-full h-full" style={{ transform: `scale(${imgScale})` }}>
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
      </div>

      <div className="text-center space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">{name}</h3>
        {role && <p className="text-cinelineGold text-[10px] uppercase tracking-[0.2em] font-bold">{role}</p>}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#FAFAFA] min-h-screen font-sans selection:bg-cinelineGold selection:text-black overflow-hidden relative">
      <CinematicGrain opacity={0.1} />

      {/* Futuristic Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cinelineGold/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 blur-[180px] rounded-full mix-blend-screen" />
      </div>

      {/* 1. HERO: Luminous Glass */}
      <section className="relative h-[90vh] min-h-[800px] flex items-center justify-center z-10 px-6">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="container mx-auto max-w-7xl flex flex-col items-center text-center relative"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeModern, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <Sparkles className="w-4 h-4 text-cinelineGold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90">Beyond Ordinary</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeModern, delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] leading-[0.9] font-serif tracking-tighter mb-12 flex flex-col"
          >
            <span className="text-white uppercase font-sans font-black tracking-tighter block drop-shadow-2xl">Visual</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-cinelineGold via-cinelineGold to-cinelineGold/40 italic font-light lowercase tracking-normal -mt-2 md:-mt-6">architects.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl text-lg md:text-xl text-white/50 font-light leading-relaxed"
          >
            We don't just capture moments. We engineer breathtaking cinematic experiences that outlive time itself.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE ETHOS (Premium Gallery Layout) */}
      <section className="py-32 md:py-48 relative z-10 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col gap-32 md:gap-64 mt-12 md:mt-24">

            {/* Block 1: Capturing the Unseen (Avant-Garde Manifesto) */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ...easeModern }}
                className="lg:w-1/2 relative z-10 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-cinelineGold" />
                  <span className="text-cinelineGold text-[10px] uppercase tracking-[0.5em] font-bold">Chapter One</span>
                </div>

                <h2 className="text-6xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl mb-8">
                  Capturing <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold to-yellow-600 block mt-2 md:mt-4">The Unseen.</span>
                </h2>

                <div className="pl-6 border-l-2 border-cinelineGold/50 mb-8">
                  <p className="text-white/80 text-xl md:text-2xl font-serif italic leading-relaxed">
                    "Aesthetics without profound emotion is empty."
                  </p>
                </div>

                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                  We strip away the superficial to focus on raw authenticity, framing every heartbeat like a high-fashion editorial.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ...easeModern }}
                className="lg:w-5/12 w-full relative group"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5">
                  <Image src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" fill className="object-cover grayscale brightness-[0.7] contrast-125 group-hover:grayscale-0 transition-all duration-[2s] ease-[0.16,1,0.3,1]" alt="Editorial Precision" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cinelineGold/10 rounded-full blur-[60px] pointer-events-none" />
              </motion.div>
            </div>

            {/* Block 2: Cinematic Grading */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ...easeModern }}
                className="lg:w-6/12 w-full relative group"
              >
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-cinelineGold/10 rounded-full blur-[60px] pointer-events-none z-0" />
                <div className="relative z-10 aspect-video w-full overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5">
                  <Image src="https://images.unsplash.com/photo-1623916298642-1e9bfef53715?q=80&w=1200&auto=format&fit=crop" fill className="object-cover grayscale brightness-[0.7] contrast-125 group-hover:grayscale-0 transition-all duration-[2s] ease-[0.16,1,0.3,1]" alt="Cinematic Grading" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ...easeModern }}
                className="lg:w-5/12 relative z-10 flex flex-col justify-center lg:items-end lg:text-right"
              >
                <div className="flex items-center gap-4 mb-8 lg:flex-row-reverse">
                  <span className="w-12 h-[2px] bg-cinelineGold" />
                  <span className="text-cinelineGold text-[10px] uppercase tracking-[0.5em] font-bold">Chapter Two</span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl mb-8 flex flex-col lg:items-end">
                  <span>Cinematic</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold to-yellow-600 block mt-2 md:mt-4">Grading.</span>
                </h2>

                <div className="pr-0 lg:pr-6 border-l-2 lg:border-l-0 lg:border-r-2 pl-6 lg:pl-0 border-cinelineGold/50 mb-8">
                  <p className="text-white/80 text-xl md:text-2xl font-serif italic leading-relaxed">
                    "Rejecting fleeting trends."
                  </p>
                </div>

                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                  Our color science emulates perfectly exposed 35mm motion picture film. We manipulate light and shadow to create skin tones that glow and environments that breathe.
                </p>
              </motion.div>
            </div>

            {/* Block 3: Stats (Avant-Garde Monolithic Block) */}
            <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ...easeModern }}
                 className="w-full mt-24 md:mt-32 flex flex-col md:flex-row items-center bg-[#050505] rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl relative"
            >
               <div className="md:w-1/2 w-full p-16 md:p-24 flex flex-col items-center justify-center text-center relative z-10 group">
                  <div className="absolute inset-0 bg-cinelineGold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px] pointer-events-none" />
                  <h3 className="text-[6rem] md:text-[8rem] leading-[0.8] font-sans font-black text-white tracking-tighter mb-4 drop-shadow-lg">
                    100<span className="text-transparent bg-clip-text bg-gradient-to-t from-cinelineGold to-yellow-500">+</span>
                  </h3>
                  <span className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-bold">Stories Preserved</span>
               </div>

               <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent relative z-10" />
               <div className="md:hidden h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10" />

               <div className="md:w-1/2 w-full p-16 md:p-24 flex flex-col items-center justify-center text-center relative z-10 group">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px] pointer-events-none" />
                  <h3 
                    className="text-[4rem] lg:text-[6.5rem] leading-[0.8] font-sans font-black uppercase text-transparent tracking-tighter mb-4"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}
                  >
                    Infinity
                  </h3>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">Moments Captured</span>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. THE ALLIANCE */}
      <section className="py-20 md:py-32 relative z-10 bg-black/50 border-y border-white/10">
        <div className="container mx-auto px-6 mb-24 md:mb-32 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-cinelineGold mb-4">
            <Crown className="w-4 h-4" /> The Alliance
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight">Trusted Collaborators</h2>
        </div>

        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-20">
            <CircularLogoItem name="Ramo Photography" role="Cinematic Photography" image="/images/team/ramo photography logo.webp" imgScale={1.85} />
            <CircularLogoItem name="BRNDX" role="Visual Identity" image="/images/team/BRNDX Logo.webp" />
            <CircularLogoItem name="Just Cliks" role="Digital Presence" image="/images/team/just clicks.webp" />
            <CircularLogoItem name="Just Sappaduu" role="Culinary Art" image="/images/team/just sappaduu.webp" />
          </div>
        </div>
      </section>

      {/* 4. THE GRAND FINALE (Premium Minimalist CTA) */}
      <section className="py-32 md:py-48 relative border-t border-white/10 bg-[#020202] text-center flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ...easeModern }}
            className="space-y-10 flex flex-col items-center"
          >
            <span className="inline-block border-b border-cinelineGold/40 pb-3 text-cinelineGold text-[10px] uppercase tracking-[0.5em] font-bold">The Next Chapter</span>

            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium text-white leading-[1.05] tracking-tight">
              Ready to be <br />
              <span className="font-serif italic text-white/50 font-light block mt-4 tracking-normal">Immortalized?</span>
            </h2>

            <p className="max-w-xl text-white/40 text-lg font-light leading-relaxed mx-auto">
              Join us in crafting a visual legacy that transcends time. We accept a strictly limited number of commissions annually.
            </p>

            <div className="pt-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-6 pb-4 border-b border-white/20 hover:border-cinelineGold transition-colors duration-500"
              >
                <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-medium group-hover:text-cinelineGold transition-colors duration-500">Initiate Contact</span>
                <MoveRight className="w-5 h-5 text-white/40 group-hover:text-cinelineGold group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
