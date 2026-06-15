"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Video, Camera, Package, MonitorPlay, ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CinematicGrain, SubtleGrid } from "../components/Patterns";

const SERVICES = [
  {
    title: "Cinematic Wedding Films",
    desc: "We don't just record events; we craft legacies. Every frame is composed with a cinematographer's eye, capturing the raw emotion and grandeur of your union.",
    icon: Video,
    slug: "wedding-films",
    image: "https://camouflageclicks.com/assets/uploads/blog/9492088.jpg"
  },
  {
    title: "Event Photography",
    desc: "From high-society galas to intimate private celebrations, we document the essence of the moment with an editorial flair that rivals fashion magazines.",
    icon: Camera,
    slug: "event-photography",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Product Campaigns",
    desc: "Elevate your brand with high-fidelity visuals. We create product imagery that speaks visual language of desire, precision, and luxury.",
    icon: Package,
    slug: "product-campaigns",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Broadcast & Commercials",
    desc: "End-to-end production for commercials and documentaries. We handle everything from conceptualization to the final color grade.",
    icon: MonitorPlay,
    slug: "broadcast-commercials",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
  },
];

const StickyCard = ({ service, index }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const yShift = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 pb-[10vh]">
      <motion.div
        className="w-full max-w-[1400px] h-auto min-h-[70vh] lg:h-[80vh] mx-4 sm:mx-8 rounded-[2rem] overflow-hidden bg-[#0A0A0A] flex flex-col lg:flex-row group border border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.6)]"
      >
        {/* CONTENT SIDE */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center relative z-10 bg-[#0A0A0A] bg-opacity-90 backdrop-blur-md">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cinelineGold font-mono text-[10px] tracking-[0.5em] uppercase mb-4 lg:mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-cinelineGold/50" />
            0{index + 1} — Core Capability
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-700"
          >
            {service.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base md:text-xl font-light leading-relaxed mb-10 max-w-xl pl-4 lg:pl-6 border-l border-white/10"
          >
            {service.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href={`/services/${service.slug}`} className="group/btn relative inline-flex items-center gap-6 px-6 lg:px-8 py-4 lg:py-5 bg-transparent text-white hover:text-black rounded-full transition-all duration-700 overflow-hidden border border-white/20 hover:border-white w-fit">
              <span className="font-bold uppercase text-[10px] md:text-xs tracking-[0.3em] z-10 transition-colors">Explore</span>
              <ArrowUpRight size={18} className="z-10 group-hover/btn:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
            </Link>
          </motion.div>
        </div>

        {/* IMAGE SIDE (Desktop Parallax & Grayscale -> Color Hover) */}
        <div className="w-full lg:w-1/2 relative h-full overflow-hidden hidden lg:block bg-black">
          <motion.div style={{ scale: imageScale, y: yShift }} className="w-full h-[140%] absolute top-0 left-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              quality={75}
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          </motion.div>
        </div>

        {/* MOBILE IMAGE SIDE */}
        <div className="w-full h-48 sm:h-64 relative lg:hidden mt-auto bg-black border-t border-white/10">
          <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" priority={index === 0} quality={60} className="object-cover grayscale opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}

export default function ServicesPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#030303] text-white selection:bg-cinelineGold selection:text-white relative font-sans">

      {/* GLOBAL BACKGROUND ATMOSPHERE (Hidden on Mobile for Performance) */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block">
        <CinematicGrain opacity={0.06} />
        <SubtleGrid opacity={0.04} />
      </div>

      <main className="relative z-10">

        {/* RE-ENGINEERED HERO SECTION */}
        <section ref={heroRef} className="h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="text-center z-10 w-full max-w-6xl mx-auto">
            <span className="text-cinelineGold font-mono text-xs md:text-sm tracking-[0.8em] uppercase mb-8 block opacity-80 animate-pulse">
              The Master Catalogue
            </span>

            <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white mb-12 flex flex-col items-center">
              <span className="block drop-shadow-2xl">Services</span>
              <span className="block text-transparent stroke-text mt-2 sm:mt-4 italic font-serif opacity-80">Arsenal</span>
            </h1>

            <div className="w-full max-w-sm mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

            <p className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed mx-auto">
              A high-fidelity suite of creative production services. <br />From conceptual narrative to the final cinematic export.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
          >
            <ArrowDown size={20} />
          </motion.div>
        </section>

        {/* STICKY STACKING SERVICES */}
        <section className="relative pb-[10vh]">
          {SERVICES.map((service, index) => (
            <StickyCard key={index} service={service} index={index} />
          ))}
        </section>

      </main>

      <style jsx global>{`
          .stroke-text {
              -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          }
      `}</style>
    </div>
  );
}
