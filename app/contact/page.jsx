"use client";
import ContactForm from "../components/ContactForm";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x * 50); // Amplify movement
    mouseY.set(y * 50);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-cinelineGold selection:text-black"
    >

      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Grain */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* 2. Interactive Perspective Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none perspective-1000">
        <motion.div
          style={{ rotateX: 20, x: springX, y: springY }}
          className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* 3. Floating Orbitals */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cinelineGold/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 4. Giant Outline Text */}
      <div className="absolute top-32 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none z-0">
        <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }} className="whitespace-nowrap text-[15vw] font-black italic text-transparent stroke-text">
          LETS CREATE MAGIC
        </motion.div>
      </div>


      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 pt-32 pb-40 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="mb-20 md:mb-32 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-cinelineGold mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-bold text-gray-400 tracking-tighter mb-8 leading-[0.20]"
            >
              Start a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold via-white to-cinelineGold animate-text-shimmer bg-[length:200%_auto]">Legacy.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed border-l border-white/10 pl-6"
            >
              We construct atmospheres, not just content. Tell us your vision, and we will translate it into a timeless visual experience.
            </motion.p>
          </div>

          {/* Marquee Divider */}
          <div className="w-full overflow-hidden py-8 border-t border-b border-white/5 mb-24 opacity-50">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex whitespace-nowrap gap-12"
            >
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-4xl font-display italic text-gray-700 uppercase">
                  Open for Commissions <span className="text-cinelineGold mx-4">•</span> Global Availability <span className="text-cinelineGold mx-4">•</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left Column: Interactive Cards */}
            <motion.div
              style={{ y }}
              className="space-y-8"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cinelineGold/80 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cinelineGold animate-pulse" /> Connect
              </h3>

              <div className="grid gap-6">
                {/* Email Card */}
                <ContactCard
                  icon={Mail}
                  label="Email Us"
                  value="cinelinestudio24@gmail.com"
                  href="mailto:cinelinestudio24@gmail.com"
                  delay={0.4}
                />

                {/* Phone Card */}
                <ContactCard
                  icon={Phone}
                  label="Call Us"
                  value="+91 81248 87577"
                  href="tel:+918124887577"
                  delay={0.5}
                />

                {/* Location Card */}
                <ContactCard
                  icon={MapPin}
                  label="Location"
                  value="Tamilnadu, India"
                  sub="Available Globally"
                  delay={0.6}
                />
              </div>

              <div className="pt-12 mt-12 border-t border-white/5 relative z-10">
                <div className="absolute top-0 left-0 w-20 h-[1px] bg-cinelineGold" />
                <p className="text-gray-300 font-display text-2xl leading-relaxed">
                  "We don't just capture moments;<br /> we construct <span className="text-white font-medium">atmospheres.</span>"
                </p>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cinelineGold/30" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cinelineGold/30" />

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .stroke-text {
           -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, sub, href, delay }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`block group ${!href ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cinelineGold/30 transition-all duration-500 group-hover:bg-white/[0.07]">
        <div className="absolute inset-0 bg-gradient-to-r from-cinelineGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex items-start gap-6">
          <div className="p-4 rounded-full bg-white/5 text-cinelineGold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(203,185,158,0.1)]">
            <Icon size={28} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">{label}</p>
            <p className="text-xl md:text-2xl font-medium text-white group-hover:text-cinelineGold transition-colors duration-300">{value}</p>
            {sub && <p className="text-gray-500 mt-1 text-sm">{sub}</p>}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
