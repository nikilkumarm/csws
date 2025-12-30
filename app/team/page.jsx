"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Nikilkumar",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "Visionary storyteller crafting narratives that resonate on a primal level.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:nikil@cinelinestudios.com" }
  },
  {
    name: "Rakshan",
    role: "Co-Founder & Head of Production",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    bio: "The architect of execution. Ensuring flawless technical delivery for every dream.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:rakshan@cinelinestudios.com" }
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Cinematographer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    bio: "Master of light. Treating every scene as a canvas waiting to be illuminated.",
    socials: { instagram: "#", email: "mailto:sarah@cinelinestudios.com" }
  },
  {
    name: "David Chen",
    role: "Senior Editor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    bio: "The rhythm creator. Weaving emotional tapestries from raw footage.",
    socials: { linkedin: "#", email: "mailto:david@cinelinestudios.com" }
  }
];

export default function TeamPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax Effects
  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black overflow-hidden relative">

      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-[#050505] to-[#050505] z-0" />

        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 text-center px-6">
          <div className="mb-6 overflow-hidden">
            <motion.p
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-cinelineGold text-sm font-bold tracking-[0.5em] uppercase"
            >
              The Architects
            </motion.p>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-8 mix-blend-difference">
            <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="block">MEET THE</motion.span></span>
            <span className="block overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 italic font-serif">MINDS.</motion.span></span>
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cinelineGold to-transparent" />
        </motion.div>
      </section>

      {/* Creative Team Grid */}
      <section className="relative px-4 pb-40">
        <div className="max-w-[1600px] mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <ParallaxMember key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Join CTA - Redesigned */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            ARE YOU A <span className="text-cinelineGold italic font-serif">VISIONARY?</span>
          </h3>
          <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-light">
            We don't just hire employees; we recruit dreamers. If you see the world differently, we want to see it with you.
          </p>
          <a href="mailto:careers@cinelinestudios.com" className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full overflow-hidden transition-all hover:pr-8">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Join the Collective</span>
            <div className="absolute inset-0 bg-cinelineGold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
            <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </section>

    </div>
  );
}

function ParallaxMember({ member, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 md:mb-48 ${isEven ? '' : 'md:flex-row-reverse'}`}>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/3 relative group"
      >
        <div className="relative aspect-[3/4] w-2/3 md:w-full mx-auto overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-cinelineGold/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-110"
          />

          {/* Floating Name Overlay - Creative Typography */}
          <h2 className={`absolute ${isEven ? '-right-8 md:-right-16' : '-left-8 md:-left-16'} top-8 text-5xl md:text-8xl font-black text-transparent stroke-text z-20 pointer-events-none opacity-30 select-none`}>
            {member.name.split(' ')[0]}
          </h2>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 space-y-8"
      >
        <div className="space-y-2">
          <h3 className="text-5xl md:text-7xl font-display italic font-medium text-white tracking-tighter">{member.name}</h3>
          <p className="text-cinelineGold font-sans text-xs uppercase tracking-[0.3em]">{member.role}</p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-sm">
          {member.bio}
        </p>

        {/* Minimal Socials */}
        <div className="flex gap-6 pt-4 border-t border-white/10 w-fit">
          {member.socials.instagram && (
            <a href={member.socials.instagram} className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          )}
          {member.socials.email && (
            <a href={member.socials.email} className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
          )}
        </div>
      </motion.div>

      <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
                }
            `}</style>
    </div>
  )
}
