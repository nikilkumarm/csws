"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { Video, Camera, Package, MonitorPlay, ArrowUpRight } from "lucide-react";
import TrustedPartners from "../components/TrustedPartners";
import Image from "next/image";
import Link from "next/link";
import { CinematicGrain, SubtleGrid, DotGrid } from "../components/Patterns";

// Data
const SERVICES = [
  {
    title: "Cinematic Wedding Films",
    desc: "We don't just record events; we craft legacies. Every frame is composed with a cinematographer's eye, capturing the raw emotion and grandeur of your union.",
    icon: Video,
    slug: "wedding-films",
    image: "/images/services/wedding.jpg" // Placeholder path, using gradients for now if image fails
  },
  {
    title: "Event Photography",
    desc: "From high-society galas to intimate private celebrations, we document the essence of the moment with an editorial flair that rivals fashion magazines.",
    icon: Camera,
    slug: "event-photography",
    image: "/images/services/event.jpg"
  },
  {
    title: "Product Campaigns",
    desc: "Elevate your brand with high-fidelity visuals. We create product imagery that speaks visual language of desire, precision, and luxury.",
    icon: Package,
    slug: "product-campaigns",
    image: "/images/services/product.jpg"
  },
  {
    title: "Broadcast\u00A0& Commercials",
    desc: "End-to-end production for commercials and documentaries. We handle everything from conceptualization to the final color grade.",
    icon: MonitorPlay,
    slug: "broadcast-commercials",
    image: "/images/services/commercial.jpg"
  },
];

function PremiumCard({ service, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/services/${service.slug}`} className="block w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative w-full h-[500px] bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-cinelineGold/30 transition-all duration-700"
        onMouseMove={handleMouseMove}
      >
        <DotGrid opacity={0.05} />
        {/* 1. Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-soft-light z-10"
          style={{
            background: useMotionTemplate`
                radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
                )
            `,
          }}
        />

        {/* 2. Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-0 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 mix-blend-overlay" />

        {/* Subtle Background Glow on Hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cinelineGold/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* 3. Content */}
        <div className="relative h-full flex flex-col justify-between p-10 z-20">

          {/* Top: Icon & Number */}
          <div className="flex justify-between items-start">
            <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-cinelineGold group-hover:text-black group-hover:border-cinelineGold transition-all duration-500 text-white">
              <service.icon strokeWidth={1.5} size={40} />
            </div>
            <span className="font-mono text-xs text-white/30 group-hover:text-cinelineGold transition-colors duration-500">0{index + 1}</span>
          </div>

          {/* Bottom: Text Info */}
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase leading-none tracking-tighter mb-4">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>

            <div className="w-12 h-[1px] bg-cinelineGold mb-6 group-hover:w-full transition-all duration-700" />

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-500">
              {service.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-cinelineGold transition-colors duration-500">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">Explore Service</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform -translate-x-2 group-hover:translate-x-0" />
            </div>
          </div>

        </div>

      </motion.div>
    </Link>
  );
}

export default function ServicesPage() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-cinelineGold selection:text-white relative overflow-hidden font-sans">

      {/* GLOBAL BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <CinematicGrain opacity={0.06} />
        <SubtleGrid opacity={0.04} />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cinelineGold/5 blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 pt-40 pb-20">

        {/* HERO SECTION */}
        <div className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Cinematic Label */}
            <div className="flex flex-col items-center md:items-start relative z-10">
              <span className="block text-cinelineGold text-sm md:text-base font-bold uppercase tracking-[1em] mb-4 pl-1 opacity-80">
                Our
              </span>

              {/* Massive Cinematic Title */}
              <h1 className="relative text-8xl md:text-[13rem] font-black uppercase leading-[0.8] tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600">
                Services
                {/* Bloom Effect Duplicate */}
                <span className="absolute inset-0 text-white opacity-20 blur-2xl -z-10" aria-hidden="true">
                  Services
                </span>
              </h1>
            </div>

            {/* Cinematic Divider */}
            <div className="w-full max-w-[200px] h-[2px] bg-gradient-to-r from-cinelineGold to-transparent mb-12" />
            <div className="flex flex-col md:flex-row justify-between items-start pt-8 gap-8">
              <p className="max-w-xl text-sm md:text-base text-gray-400 font-light leading-relaxed">
                We deliver a comprehensive suite of creative production services. From the initial spark of an idea to the final master export, perfection is our baseline.
              </p>
              <div className="hidden md:flex gap-12">
                <div>
                  <span className="block text-4xl font-bold text-white mb-2">4+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Core Disciplines</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-white mb-2">Top</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Tier Gear</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden relative">
          {SERVICES.map((service, index) => (
            <PremiumCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* TRUSTED PARTNERS SECTION */}
        <div className="mt-32 border-t border-white/5">
          <TrustedPartners />
        </div>

      </main>

    </div>
  );
}
