"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Nikilkumar",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "Visionary storyteller crafting narratives that resonate on a primal level.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:nikil@cinelinestudios.com" }
  },
  {
    id: 2,
    name: "Rakshan",
    role: "Co-Founder & Head of Production",
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop",
    bio: "The architect of execution. Rakshan ensures that the wildest creative dreams are grounded in flawless technical delivery.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:rakshan@cinelinestudios.com" }
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Lead Cinematographer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
    bio: "Master of light. Treating every scene as a canvas waiting to be illuminated.",
    socials: { instagram: "#", email: "mailto:sarah@cinelinestudios.com" }
  },
  {
    id: 4,
    name: "David Chen",
    role: "Senior Editor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    bio: "The rhythm creator. Weaving emotional tapestries from raw footage.",
    socials: { linkedin: "#", email: "mailto:david@cinelinestudios.com" }
  }
];

export default function TeamPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Parallax & Fade for Hero
  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black relative">

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>
      </nav>

      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-block py-1 px-3 border border-cinelineGold/30 rounded-full text-cinelineGold text-xs uppercase tracking-widest">
              The Ensemble
            </span>
          </motion.div>
          <h1 className="text-[12vw] leading-[0.85] font-black text-white tracking-tighter mix-blend-difference">
            <span className="block">CREATIVE</span>
            <span className="block text-transparent stroke-text">MINDS</span>
          </h1>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-500"
        >
          Scroll to Meet
        </motion.div>
      </section>

      {/* Team Grid - Magazine Style */}
      <section className="relative z-10 px-4 md:px-12 pb-40">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-32">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-40 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Your Vision. <br /> <span className="text-cinelineGold italic font-serif">Our Canvas.</span></h2>
          <a href="mailto:careers@cinelinestudios.com" className="inline-flex items-center gap-3 text-lg text-white border-b border-cinelineGold pb-1 hover:text-cinelineGold transition-colors">
            Join the Team <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                }
            `}</style>

    </div>
  );
}

function TeamCard({ member, index }) {
  // Stagger layout: even items pushed down on desktop
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:translate-y-24' : ''}`}>

      {/* Square Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative aspect-square w-full overflow-hidden bg-gray-900 border border-white/5"
      >
        {/* Image */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-all duration-1000 scale-[1.01] group-hover:scale-110 grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
        />

        {/* Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">

          <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
            {/* Role with Line */}
            <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <div className="h-[1px] w-8 bg-cinelineGold" />
              <span className="text-cinelineGold text-xs uppercase tracking-[0.2em] font-medium">{member.role}</span>
            </div>

            {/* Name */}
            <h2 className="text-4xl md:text-6xl font-black text-white text-uppercase tracking-tighter leading-none mb-2">
              {member.name}
            </h2>
          </div>

          {/* Bio Reveal */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[0.22, 1, 0.36, 1]">
            <div className="overflow-hidden">
              <p className="text-gray-400 font-light leading-relaxed pt-6 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                {member.bio}
              </p>
              {/* Socials */}
              <div className="flex gap-4 pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                {member.socials.instagram && <a href={member.socials.instagram} className="text-white hover:text-cinelineGold"><Instagram size={20} /></a>}
                {member.socials.linkedin && <a href={member.socials.linkedin} className="text-white hover:text-cinelineGold"><Linkedin size={20} /></a>}
                {member.socials.email && <a href={member.socials.email} className="text-white hover:text-cinelineGold"><Mail size={20} /></a>}
              </div>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ArrowUpRight className="text-white" size={32} />
        </div>

      </motion.div>

    </div>
  )
}
