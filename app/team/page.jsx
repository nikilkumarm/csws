"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Instagram, Linkedin, Mail } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Nikilkumar",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "A visionary storyteller with an eye for the unseen. Nikil believes that every frame should speak a thousand words, crafting visual narratives that resonate on a primal level.",
    socials: {
      instagram: "#",
      linkedin: "#",
      email: "mailto:nikil@cinelinestudios.com"
    }
  },
  {
    name: "Rakshan",
    role: "Co-Founder & Head of Production",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    bio: "The architect of execution. Rakshan ensures that the wildest creative dreams are grounded in flawless technical delivery, overseeing every shoot with precision and calm.",
    socials: {
      instagram: "#",
      linkedin: "#",
      email: "mailto:rakshan@cinelinestudios.com"
    }
  },
  {
    name: "Sarah Jenkins",
    role: "Lead Cinematographer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    bio: "Master of light and shadow. Sarah brings a painterly approach to cinematography, treating every scene as a canvas waiting to be illuminated.",
    socials: {
      instagram: "#",
      email: "mailto:sarah@cinelinestudios.com"
    }
  },
  {
    name: "David Chen",
    role: "Senior Editor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    bio: "The rhythm creator. David weaves raw footage into emotional tapestries, finding the perfect beat to cut on to maximize impact.",
    socials: {
      linkedin: "#",
      email: "mailto:david@cinelinestudios.com"
    }
  }
];

export default function TeamPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-cinelineGold selection:text-black">

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-widest uppercase">Back to Home</span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <motion.div style={{ y }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cinelineGold/5 blur-[150px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-cinelineGold text-sm font-bold tracking-[0.3em] uppercase mb-6">The Architects</h2>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Meet the <span className="italic font-serif text-gray-500">Minds.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            We are a collective of dreamers, technician, and artists united by a single obsession: to capture the uncapturable.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#080808] text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">Are you a visionary?</h3>
          <p className="text-gray-400 mb-10">
            We are always looking for exceptional talent to join our ranks. Photographers, editors, and dreamers welcome.
          </p>
          <a href="mailto:careers@cinelinestudios.com" className="inline-block px-10 py-4 border border-white/20 rounded-full hover:bg-cinelineGold hover:text-black hover:border-cinelineGold transition-all duration-300 uppercase tracking-widest text-sm font-bold">
            Join the Collective
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-black text-center text-xs text-zinc-600 border-t border-white/5">
        <p>© {new Date().getFullYear()} Cineline Studios. All rights reserved.</p>
      </footer>

    </div>
  );
}

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-gray-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Social Overlay */}
        <div className="absolute bottom-6 left-6 flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          {member.socials.instagram && (
            <a href={member.socials.instagram} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cinelineGold hover:text-black transition-colors">
              <Instagram size={18} />
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cinelineGold hover:text-black transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {member.socials.email && (
            <a href={member.socials.email} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cinelineGold hover:text-black transition-colors">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-4 relative">
        {/* Decorative Line */}
        <div className="absolute -left-6 top-2 w-[1px] h-0 bg-cinelineGold group-hover:h-full transition-all duration-500 delay-200 hidden md:block" />

        <div>
          <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-cinelineGold transition-colors duration-300">{member.name}</h3>
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">{member.role}</p>
        </div>
        <p className="text-gray-400 leading-relaxed font-light text-lg max-w-md">
          {member.bio}
        </p>
      </div>
    </motion.div>
  )
}
