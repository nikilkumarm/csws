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
    image: "/images/team/nikil.jpg",
    bio: "Visionary storyteller crafting narratives that resonate on a primal level. Architecting memories, not just videos.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:nikil@cinelinestudios.com" }
  },
  {
    id: 2,
    name: "Rakshan",
    role: "Co-Founder & Lead Strategist",
    image: "/images/team/rakshan.jpg",
    bio: "The catalyst. Forging great stories in the fires of strategy and pure passion. He ensures the wildest dreams fly.",
    socials: { instagram: "#", linkedin: "#", email: "mailto:rakshan@cinelinestudios.com" }
  },
  {
    id: 3,
    name: "Mokshanand",
    role: "Admin & Operations Head",
    image: "/images/team/mokshanand.JPG",
    bio: "The backbone. Creativity needs chaos, but execution demands order. Ensuring the vision survives reality.",
    socials: { instagram: "#", email: "mailto:mokshanand@cinelinestudios.com" }
  },
  {
    id: 4,
    name: "Sukesan",
    role: "Head of Finance",
    image: "/images/team/sukesh.JPG",
    bio: "The anchor. Sustainable growth is the canvas for artistic freedom. Discipline allows us to dream bigger.",
    socials: { linkedin: "#", email: "mailto:sukesan@cinelinestudios.com" }
  },
  {
    id: 5,
    name: "Allen Matthew",
    role: "Network Admin",
    image: "/images/team/allen.jpg",
    bio: "The digital guardian. Ensuring our infrastructure is as robust as our creative ambition.",
    socials: { linkedin: "#", email: "mailto:allen@cinelinestudios.com" }
  },
  {
    id: 6,
    name: "Jerlin Sam",
    role: "Cinematographer & Editor",
    image: "/images/team/jerry.jpg",
    bio: "Capturing the unseen and weaving it into the narrative. A dual-threat creative force.",
    socials: { instagram: "#", email: "mailto:jerlin@cinelinestudios.com" }
  },
  {
    id: 7,
    name: "Sam Asir",
    role: "Cinematographer & Editor",
    image: "/images/team/sam.jpg",
    bio: "Visual poet with a lens. Turning fleeting moments into cinematic monuments.",
    socials: { instagram: "#", email: "mailto:samasir@cinelinestudios.com" }
  },
  {
    id: 8,
    name: "Judah Fonarcus",
    role: "Photographer",
    image: "/images/team/judah.jpeg",
    bio: "Freezing time with precision and soul. Every still tells a moving story.",
    socials: { instagram: "#", email: "mailto:judah@cinelinestudios.com" }
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
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-6 md:py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={14} className="md:w-4 md:h-4" />
          </div>
          <span className="text-[10px] md:text-sm font-medium tracking-widest uppercase">Home</span>
        </Link>
      </nav>

      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-10 text-center px-4 relative">
          <h1 className="text-[14vw] md:text-[12vw] leading-[0.85] font-black text-white tracking-tighter mix-blend-difference">
            <span className="block">THE</span>
            <span className="block text-transparent stroke-text">STUDIO</span>
          </h1>
          <p className="mt-8 text-cinelineGold tracking-[0.5em] uppercase text-xs font-mono">Collective. Visionaries. Storytellers.</p>
        </motion.div>
      </section>

      {/* Team Narrative Archive - High-End Studio Layout */}
      <section className="relative z-10 pb-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {TEAM_MEMBERS.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-32 py-16 md:py-48 border-b border-white/5 last:border-0 group`}
              >
                {/* PORTRAIT HALF - 1:1 SQUARE */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-[600px] aspect-square overflow-hidden bg-[#0a0a0a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-[1.5s] ease-out scale-105 group-hover:scale-110"
                    />
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    {/* Index Marker */}
                    <div className={`absolute top-8 ${isEven ? 'right-8' : 'left-8'} flex items-center gap-3`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-cinelineGold animate-pulse" />
                      <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">MEMBER_0{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* CONTENT HALF */}
                <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 text-center lg:text-left">
                  <div className="space-y-4">
                    <div className="overflow-hidden flex justify-center lg:justify-start">
                      <span className="inline-block text-cinelineGold text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                        {member.role}
                      </span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-tight tracking-tighter uppercase transform group-hover:translate-x-0 lg:group-hover:translate-x-8 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]">
                      {member.name}
                    </h2>
                  </div>

                  <div className="max-w-md mx-auto lg:mx-0 space-y-8">
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed border-l-2 lg:border-l border-cinelineGold/30 pl-6 py-1 mx-4 lg:mx-0">
                      “{member.bio}”
                    </p>

                    <div className="flex justify-center lg:justify-start gap-8 md:gap-10">
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} className="group/link flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                          <span className="text-xs font-mono uppercase tracking-widest border-b border-transparent group-hover/link:border-white/20 pb-1">Instagram</span>
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="group/link flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                          <span className="text-xs font-mono uppercase tracking-widest border-b border-transparent group-hover/link:border-white/20 pb-1">LinkedIn</span>
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 md:py-40 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Your Vision. <br /> <span className="text-cinelineGold italic font-serif">Our Canvas.</span></h2>
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
