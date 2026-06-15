"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Layers, MonitorPlay, Film, Sparkles, ArrowUpRight } from "lucide-react";
import { CinematicGrain, SubtleGrid } from "../components/Patterns";

const EXPERTISES = [
  {
    icon: Film,
    title: "Narrative Films",
    desc: "Emotive color palettes designed to reinforce the psychological subtext of your story. Every shadow and highlight is meticulously sculpted."
  },
  {
    icon: MonitorPlay,
    title: "Commercials",
    desc: "Vibrant, high-fidelity color pipelines that ensure brand consistency and immediately capture the audience's attention."
  },
  {
    icon: Sparkles,
    title: "Look Development",
    desc: "Custom film emulation and bespoke LUTs crafted from the ground up for directors and cinematographers seeking a unique aesthetic signature."
  },
  {
    icon: Layers,
    title: "Restoration",
    desc: "Flawless shot-to-shot matching and archival restoration. Precision engineering of color spaces for multi-camera continuity."
  }
];

export default function ColourPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "80%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#030303] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black relative">
      {/* Patterns & Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <CinematicGrain opacity={0.06} />
        <SubtleGrid opacity={0.03} />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-cinelineGold/5 blur-[200px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-white/[0.02] blur-[200px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen flex flex-col justify-center items-center overflow-hidden px-4 border-b border-white/5">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-10 text-center w-full max-w-6xl mx-auto pt-20">
          <span className="text-cinelineGold font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-8 block opacity-80 animate-pulse">
            Post-Production
          </span>
          <h1 className="text-[14vw] md:text-[11vw] font-black uppercase leading-[0.8] tracking-tighter text-white mb-8 flex flex-col items-center mix-blend-difference">
            <span className="block drop-shadow-2xl">Colour</span>
            <span className="block text-transparent stroke-text italic font-serif opacity-90 mt-2">Grading</span>
          </h1>
          <div className="w-[1px] h-24 bg-gradient-to-b from-cinelineGold/60 to-transparent mx-auto mb-10" />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            The final brushstroke. We translate raw data into pure emotion, mastering the visual spectrum to give your film its ultimate soul.
          </p>
        </motion.div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="relative z-10 py-32 md:py-48 bg-[#0A0A0A] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
              Painting with <br /> <span className="text-cinelineGold italic font-serif lowercase">light</span>
            </h2>
            <div className="w-16 h-[1px] bg-white/20 mb-8" />
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-cinelineGold/30 pl-6">
              Color grading is not merely correction; it is an invisible language. We leverage industry-leading software and methodology to push the boundaries of visual storytelling.
            </p>
            <p className="text-gray-500 font-light leading-relaxed pl-6 md:pl-8">
              Whether it is evoking the nostalgic warmth of 35mm celluloid or the surgical precision of modern HDR commercial standards, our studio is engineered to deliver uncompromised aesthetic brilliance to every single frame.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
          >
            <Image
              src="/images/colour/color-grading-suite.webp"
              alt="DaVinci Resolve Color Grading Studio"
              fill
              className="object-cover transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />

            {/* Animated Focus Points Overlay */}
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/20 group-hover:border-cinelineGold transition-colors duration-700" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-white/20 group-hover:border-cinelineGold transition-colors duration-700" />
          </motion.div>

        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="relative z-10 py-32 md:py-48 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 flex flex-col items-center">
            <span className="text-cinelineGold text-[10px] font-mono uppercase tracking-[0.4em] mb-4">Mastery</span>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mix-blend-difference">
              Our <span className="text-gray-600">Discipline</span>
            </h3>
            <div className="mt-10 w-16 h-[1px] bg-gradient-to-r from-transparent via-cinelineGold to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {EXPERTISES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0A0A] p-10 lg:p-14 rounded-[2rem] border border-white/5 hover:border-cinelineGold/30 hover:bg-[#0c0c0c] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <item.icon size={120} />
                </div>

                <item.icon size={36} className="text-white/40 mb-8 group-hover:text-cinelineGold transition-colors duration-500" />
                <h4 className="text-2xl pt-2 font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed relative z-10">{item.desc}</p>

                <div className="w-0 h-[1px] bg-cinelineGold mt-10 group-hover:w-full transition-all duration-700 ease-in-out opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DI SUITE / TECH CTA */}
      <section className="relative z-10 py-32 md:py-48 bg-black overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] opacity-90 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop"
            alt="Studio Environment"
            fill
            className="object-cover opacity-20 grayscale mix-blend-luminosity"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <span className="text-cinelineGold text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] mb-6 block">The DI Suite</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-[1]">Engineered for perfection</h2>
          <p className="text-gray-400 text-lg md:text-xl mx-auto font-light leading-relaxed mb-16 max-w-2xl">
            Housed within our creative facility is a state-of-the-art Digital Intermediate suite. We guarantee that the final export translates flawlessly to the silver screen, broadcasting networks, and mobile devices alike.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/booking" className="group/btn relative inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full transition-all duration-700 overflow-hidden shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:bg-cinelineGold">
              <span className="font-bold uppercase text-[10px] md:text-xs tracking-[0.3em] z-10 transition-colors group-hover/btn:text-white">Book the Suite</span>
              <ArrowUpRight size={18} className="z-10 group-hover/btn:rotate-45 transition-transform duration-500 group-hover/btn:text-white" />
              <div className="absolute inset-0 bg-[#111] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}
