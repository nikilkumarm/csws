"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, Linkedin, Mail, ArrowUpRight, Plus, Minus } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Nikilkumar",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1000&auto=format&fit=crop", // Moody, dark studio
    bio: "Visionary storyteller crafting narratives that resonate on a primal level. Nikil sees the world in frames, textures, and unwritten emotions.",
    quote: "We don't capture moments; we construct memories.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:nikil@cinelinestudios.com" }
  },
  {
    id: 2,
    name: "Rakshan",
    role: "Co-Founder & Head of Production",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop", // Dramatic lighting
    bio: "The architect of execution. Rakshan ensures that the wildest creative dreams are grounded in flawless technical delivery.",
    quote: "Precision is the ultimate form of art.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:rakshan@cinelinestudios.com" }
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Lead Cinematographer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop", // Artistic, moody
    bio: "Master of light. Treating every scene as a canvas waiting to be illuminated. Sarah paints with shadows.",
    quote: "Light is a language, and I speak it fluently.",
    socials: { instagram: "#", email: "mailto:sarah@cinelinestudios.com" }
  },
  {
    id: 4,
    name: "David Chen",
    role: "Senior Editor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop", // Serious, dark background
    bio: "The rhythm creator. Weaving emotional tapestries from raw footage. David finds the pulse in the silence.",
    quote: "The cut is the heartbeat of the film.",
    socials: { linkedin: "#", email: "mailto:david@cinelinestudios.com" }
  }
];

export default function TeamPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black overflow-hidden relative cursor-none">

      {/* Custom Cursor Follower would go here if we implemented one globally */}

      {/* Grain & Fog */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none z-40" />


      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>
      </nav>

      {/* Title - Fixed Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
        <h1 className="text-[15vw] font-black text-transparent stroke-text leading-none whitespace-nowrap">
          THE COLLECTIVE
        </h1>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-40 px-4 md:px-0">

        {/* List Layout */}
        <div className="max-w-[1920px] mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberRow
              key={member.id}
              member={member}
              index={index}
              setHovered={setHoveredMember}
              isHovered={hoveredMember === member.id}
            />
          ))}
        </div>

        {/* Join CTA */}
        <section className="py-60 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cinelineGold/5 to-transparent opacity-50" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <p className="text-cinelineGold text-sm font-bold tracking-[0.5em] uppercase mb-6">Join Us</p>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">
              BECOME A <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">LEGEND.</span>
            </h2>
            <a href="mailto:careers@cinelinestudios.com" className="inline-block border-b border-white pb-1 text-xl text-white hover:text-cinelineGold hover:border-cinelineGold transition-all duration-300 cursor-pointer">
              Apply Now
            </a>
          </motion.div>
        </section>

      </main>

      <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 1);
                }
                .cursor-none {
                    cursor: auto; /* Fallback */
                }
                /* Hide scrollbar for cleaner look */
                ::-webkit-scrollbar {
                    width: 0px;
                    background: transparent;
                }
            `}</style>
    </div>
  );
}

function TeamMemberRow({ member, index, setHovered, isHovered }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(member.id)}
      onMouseLeave={() => setHovered(null)}
      className="group relative border-t border-white/5 py-12 md:py-24 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-20">

        {/* 01. Index & Name & Role */}
        <div className="flex items-start gap-8 md:gap-12 flex-1 relative z-20 pointer-events-none">
          <span className="text-xs md:text-sm font-mono text-cinelineGold/50 mt-4">0{member.id}</span>
          <div className="group-hover:translate-x-4 transition-transform duration-500">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase transition-colors duration-500 group-hover:text-transparent group-hover:stroke-text pointer-events-auto">
              {member.name}
            </h2>
            <p className="text-cinelineGold font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-medium mt-2 md:mt-4 pointer-events-auto">
              {member.role}
            </p>
          </div>
        </div>

        {/* 02. Hover Image Reveal (Desktop) - Cinematic Wide */}
        <div className="hidden md:block absolute left-[40%] top-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22, 1, 0.36, 1] scale-95 group-hover:scale-100 group-hover:translate-x-12">
          <div className="relative w-full h-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black border border-white/10">
            {/* Film Grain Overlay */}
            <div className="absolute inset-0 z-30 opacity-20 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-all duration-1000 scale-110 group-hover:scale-100 grayscale contrast-125 brightness-75 group-hover:grayscale-[20%] group-hover:contrast-110 group-hover:brightness-100"
            />

            {/* Cinematic Letterbox Bars */}
            <div className="absolute top-0 left-0 w-full h-[12%] bg-black z-20" />
            <div className="absolute bottom-0 left-0 w-full h-[12%] bg-black z-20" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 z-10" />
          </div>
        </div>

        {/* 02. Mobile Image (Always visible but small) */}
        <div className="md:hidden w-full h-[400px] relative overflow-hidden mb-4">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* 03. Bio & Quote */}
        <div className="w-full md:w-1/3 flex flex-col justify-between items-start md:items-end text-left md:text-right space-y-8 relative z-10">
          <p className="text-lg text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors duration-300">
            {member.bio}
          </p>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex items-center gap-6">
            {member.socials.instagram && (
              <a href={member.socials.instagram} className="text-cinelineGold hover:text-white transition-colors"><Instagram size={24} /></a>
            )}
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} className="text-cinelineGold hover:text-white transition-colors"><Linkedin size={24} /></a>
            )}
            {member.socials.email && (
              <a href={member.socials.email} className="text-cinelineGold hover:text-white transition-colors"><Mail size={24} /></a>
            )}
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="hidden md:block transition-all duration-500 group-hover:rotate-45 group-hover:scale-125">
          <ArrowUpRight size={40} className="text-gray-700 group-hover:text-white" />
        </div>

      </div>
    </motion.div>
  )
}
