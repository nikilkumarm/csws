"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Video, Camera, Package, MonitorPlay, ArrowUpRight, ArrowLeft } from "lucide-react";
import TrustedPartners from "../components/TrustedPartners";
import Image from "next/image";
import Link from "next/link";
import { CinematicGrain, SubtleGrid } from "../components/Patterns";

// Data
const SERVICES = [
  {
    title: "Cinematic Wedding Films",
    desc: "We don't just record events; we craft legacies. Every frame is composed with a cinematographer's eye, capturing the raw emotion and grandeur of your union.",
    icon: Video,
    slug: "wedding-films",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Event Photography",
    desc: "From high-society galas to intimate private celebrations, we document the essence of the moment with an editorial flair that rivals fashion magazines.",
    icon: Camera,
    slug: "event-photography",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Product Campaigns",
    desc: "Elevate your brand with high-fidelity visuals. We create product imagery that speaks visual language of desire, precision, and luxury.",
    icon: Package,
    slug: "product-campaigns",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Broadcast & Commercials",
    desc: "End-to-end production for commercials and documentaries. We handle everything from conceptualization to the final color grade.",
    icon: MonitorPlay,
    slug: "broadcast-commercials",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-cinelineGold selection:text-white relative overflow-hidden font-sans">

      {/* GLOBAL BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <CinematicGrain opacity={0.06} />
        <SubtleGrid opacity={0.04} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cinelineGold/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <div className="p-2 rounded-full border border-white/20 group-hover:border-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium tracking-widest uppercase">Home</span>
        </Link>
      </nav>

      <main className="relative z-10 pt-40 pb-20">

        {/* HERO SECTION - ARCHIVE STYLE */}
        <div className="container mx-auto px-6 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start relative z-10">
              <span className="block text-cinelineGold text-xs font-bold uppercase tracking-[0.8em] mb-4 opacity-80">
                The Master Catalogue
              </span>

              <h1 className="text-[15vw] lg:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-white mb-12">
                Services<span className="text-cinelineGold italic font-serif text-[8vw] lg:text-[5vw] lowercase block lg:inline lg:ml-8">Archive</span>
              </h1>
            </div>

            <div className="w-24 h-[1px] bg-cinelineGold/50 mb-12 mx-auto lg:mx-0" />

            <p className="max-w-2xl text-xl md:text-2xl text-gray-400 font-light leading-relaxed mx-auto lg:mx-0">
              A high-fidelity suite of creative production services. From conceptual narrative to the final cinematic export.
            </p>
          </motion.div>
        </div>

        {/* SERVICES NARRATIVE - Alternating Rows */}
        <div className="container mx-auto px-6 space-y-32 md:space-y-64">
          {SERVICES.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>

        {/* TRUSTED PARTNERS SECTION */}
        <div className="mt-40 md:mt-64 border-t border-white/5">
          <TrustedPartners />
        </div>

      </main>

    </div>
  );
}

function ServiceRow({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-32 group`}
    >
      {/* IMAGE HALF - CINEMATIC RATIO */}
      <div className="w-full lg:w-3/5 flex justify-center">
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover filter grayscale contrast-125 opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

          {/* Viewfinder Decorative Corner */}
          <div className="absolute top-8 left-8 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cinelineGold animate-pulse" />
            <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">SV-ARCHIVE_0{index + 1}</span>
          </div>

          {/* Gold Focus Brackets */}
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-cinelineGold/0 group-hover:border-cinelineGold transition-all duration-700" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-cinelineGold/0 group-hover:border-cinelineGold transition-all duration-700" />
        </div>
      </div>

      {/* TEXT HALF */}
      <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <div className="overflow-hidden flex justify-center lg:justify-start">
            <span className="inline-block text-cinelineGold text-xs font-bold uppercase tracking-[0.6em] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
              {index < 9 ? `0${index + 1}` : index + 1} / Strategy
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase transform group-hover:translate-x-4 transition-transform duration-1000">
            {service.title}
          </h2>
        </div>

        <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed border-l-2 lg:border-l border-cinelineGold/30 pl-8 mx-4 lg:mx-0 py-2">
          “{service.desc}”
        </p>

        <div className="pt-4 flex justify-center lg:justify-start">
          <Link href={`/services/${service.slug}`} className="group/btn relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold uppercase text-[10px] tracking-[0.3em] overflow-hidden hover:bg-cinelineGold transition-colors duration-500">
            <span className="relative z-10 transition-colors group-hover/btn:text-black">Explore Catalogue</span>
            <ArrowUpRight size={16} className="relative z-10 group-hover/btn:rotate-45 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
