
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ContactForm from "./ContactForm";
import {
  Instagram,
  Linkedin,
  Mail,
  Youtube,
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Zap,
  Compass
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(scrollYSpring, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYSpring, [0, 0.5], [0, 1]);

  useEffect(() => {
    const handler = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="w-full relative bg-[#050505] text-gray-300 overflow-hidden font-sans border-t border-white/5">

      {/* 1. CONTACT FORM SECTION - THE CONVERSATION */}
      <div className="relative z-20 pt-20 pb-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-cinelineGold text-xs font-semibold uppercase tracking-[0.3em] block">Legacy Starts Here</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                Got a vision? <br />
                <span className="block text-white/90 font-extralight lowercase text-4xl md:text-6xl leading-none mt-2 tracking-tighter">let's make it real.</span>
              </h2>
              <div className="w-12 h-1 bg-cinelineGold/50" />
              <p className="text-gray-500 max-w-md text-sm leading-relaxed font-light">
                Fill out the form to discuss your project. Whether it’s a global campaign or an intimate story, we are here to define its visual atmosphere.
              </p>
            </div>

            <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-24 pb-12">
        {/* --- DYNAMIC AMBIENCE --- */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cinelineGold/5 rounded-full blur-[200px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3 z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

        {/* --- MAIN FOOTER GRID --- */}
        <motion.div style={{ scale, opacity }} className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

            {/* COLUMN 1: BRAND & MANIFESTO */}
            <div className="md:col-span-5 space-y-10">
              <Link href="/" className="inline-block">
                <Image src="/cs_logo_w_t.png" width={220} height={80} alt="Logo" className="opacity-90 hover:opacity-100 transition-opacity w-[180px] md:w-[220px] h-auto" />
              </Link>

              <div className="space-y-6">
                <p>
                  <span className="text-sm md:text-base font-semibold italic text-cinelineGold border-b border-cinelineGold/30 pb-1">“Capturing emotions effortlessly.”</span>
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed max-w-md">
                  We specialize in high-fidelity visual storytelling, constructing immersive narratives for brands and souls that demand perfection.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cinelineGold/80 block">Location</span>
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  Tamilnadu, India <br />
                  <span className="text-white/40">Available Globally</span>
                </p>
              </div>
            </div>

            {/* COLUMN 2: ARCHIVE NAV */}
            <div className="md:col-span-3 grid grid-cols-1 gap-12">
              <div>
                <h3 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-cinelineGold/40" /> Archive
                </h3>
                <ul className="space-y-4">
                  <li><FooterArchiveLink href="/about" label="Concept" /></li>
                  <li><FooterArchiveLink href="/portfolio" label="Showcase" /></li>
                  <li><FooterArchiveLink href="/services" label="Solutions" /></li>
                  <li><FooterArchiveLink href="/manifesto" label="Vision" /></li>
                </ul>
              </div>
            </div>

            {/* COLUMN 3: CONNECT */}
            <div className="md:col-span-4 space-y-12">
              <div className="space-y-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cinelineGold/80 block">Direct Inquiry</span>
                <a href="mailto:cinelinestudio24@gmail.com" className="text-lg md:text-xl text-white font-medium hover:text-cinelineGold transition-colors border-b border-white/10 pb-2 block w-max">
                  cinelinestudio24@gmail.com
                </a>
                <div className="flex items-center gap-6 pt-2">
                  <a href="https://instagram.com" className="text-white/40 hover:text-cinelineGold transition-colors"><Instagram size={20} /></a>
                  <a href="https://youtube.com" className="text-white/40 hover:text-cinelineGold transition-colors"><Youtube size={20} /></a>
                  <a href="https://linkedin.com" className="text-white/40 hover:text-cinelineGold transition-colors"><Linkedin size={20} /></a>
                  <a href="mailto:cinelinestudio24@gmail.com" className="text-white/40 hover:text-cinelineGold transition-colors"><Mail size={20} /></a>
                </div>
              </div>

              <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="p-4 bg-white/5 border border-white/5 flex flex-col items-center justify-center flex-1">
                  <Globe size={18} className="text-cinelineGold mb-2" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Worldwide</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 flex flex-col items-center justify-center flex-1">
                  <Zap size={18} className="text-cinelineGold mb-2" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Performance</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 flex flex-col items-center justify-center flex-1">
                  <Compass size={18} className="text-cinelineGold mb-2" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">Strategic</span>
                </div>
              </div>
            </div>

          </div>

          {/* FINAL BOTTOM BAR */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-sans font-medium text-white/50 uppercase tracking-normal">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} Cineline Studios</span>
              <span className="w-1 h-1 rounded-full bg-cinelineGold/40" />
              <span>All visuals protected</span>
            </div>

            <div className="flex items-center gap-10">
              <Link href="/terms" className="hover:text-cinelineGold transition-colors">Legal</Link>
              <Link href="/privacy" className="hover:text-cinelineGold transition-colors">Privacy</Link>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <BackToTopButton show={showTop} onClick={scrollToTop} />
      </div>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          color: rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
}

// --- SUBCOMPONENTS ---

function FooterArchiveLink({ href, label }) {
  return (
    <Link href={href} className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-cinelineGold/30 transition-all duration-500">
      <span className="text-gray-400 group-hover:text-white group-hover:pl-4 transition-all duration-500 font-light text-lg">
        {label}
      </span>
      <ArrowRight size={16} className="text-cinelineGold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
    </Link>
  );
}

function BackToTopButton({ show, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-32 right-10 z-50 group p-4 bg-black border border-white/10 text-white rounded-full transition-all duration-700 ease-out 
        hover:border-cinelineGold shadow-2xl
        ${show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform text-cinelineGold" />
    </button>
  );
}
