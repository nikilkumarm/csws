"use client";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { Video, Camera, Package, MonitorPlay } from "lucide-react";

const services = [
  {
    title: "Cinematic Wedding Films",
    desc: "Every love story deserves a masterpiece. We craft wedding films that feel like cinema.",
    icon: Video,
    slug: "wedding-films",
  },
  {
    title: "Event Photography",
    desc: "From corporate galas to private celebrations, we capture the essence of every moment.",
    icon: Camera,
    slug: "event-photography",
  },
  {
    title: "Product Campaigns",
    desc: "Identify your brand's visual language with high-fidelity product photography.",
    icon: Package,
    slug: "product-campaigns",
  },
  {
    title: "Broadcast & Commercials",
    desc: "End-to-end production for commercials, documentaries, and live broadcasts.",
    icon: MonitorPlay,
    slug: "broadcast-commercials",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[var(--text)] relative overflow-hidden">

      {/* ATMOSPHERE LAYERS - VISIBLE & PREMIUM */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Mesh Gradient - Warmer and clearer */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(circle,rgba(203,185,158,0.25),transparent_60%)] blur-[80px]" />

        {/* Bottom Right Luxe Glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-[#cbb99e] via-[#e8e0d5] to-transparent opacity-20 blur-[100px]" />

        {/* Top Left Subtle Cool light for Contrast */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-b from-gray-200 to-transparent opacity-40 blur-[90px]" />
      </div>

      {/* DISTINCT TEXTURE: Tech Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />



      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 relative z-10">

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-cinelineDark"
          >
            Our <span className="text-cinelineGold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            We provide a comprehensive suite of creative production services.
            From initial concept to final cut, perfection is our baseline.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={item} className="h-full">
              <ServiceCard
                index={i}
                title={s.title}
                desc={s.desc}
                icon={s.icon}
                slug={s.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

    </div>
  );
}
