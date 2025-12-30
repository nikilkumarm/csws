"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Youtube,
  ArrowUp,
  ArrowRight
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

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
    <footer ref={footerRef} className="w-full relative bg-[#050505] text-gray-300 overflow-hidden font-sans">

      {/* 0. Scrolling Marquee Border */}
      <div className="relative z-20 w-full border-t border-b border-white/5 bg-[#080808] overflow-hidden py-3">
        <div className="absolute inset-0 bg-cinelineGold/5 blur-xl"></div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-cinelineGold">
              <span>Visual Legacies</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cinelineGold/50" />
              <span>We pursue perfection in every frame</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cinelineGold/50" />
              <span>Cinematic Excellence</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cinelineGold/50" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative pt-24 pb-10">

        {/* --- GOD LEVEL BACKGROUND ELEMENTS --- */}
        <Grain />

        {/* Kinetic Typography */}
        <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.04] pointer-events-none select-none leading-none z-0">
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
            className="whitespace-nowrap text-[18vw] font-black text-gray-300 mix-blend-overlay"
          >
            CINELINE STUDIOS
          </motion.div>
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cinelineGold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />

        {/* --- MAIN CONTENT --- */}

        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

            {/* Brand Column */}
            <div className="md:col-span-5 space-y-8">
              <Link href="/" className="inline-block group relative">
                <div className="absolute -inset-4 bg-cinelineGold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Image
                  src="/cs_logo_w_t.png"
                  width={260}
                  height={90}
                  alt="Cineline Logo"
                  className="relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </Link>

              <div className="space-y-6 max-w-md ml-2">
                <p className="text-2xl md:text-3xl font-display text-white italic leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinelineGold via-white to-cinelineGold bg-[length:200%_auto] animate-text-shimmer">
                    Capturing emotions effortlessly.
                  </span>
                </p>
                <p className="text-gray-500 leading-relaxed text-base font-light border-l border-white/10 pl-6">
                  Tailored for those who demand uncompromising quality. We utilize light, shadow, and silence to construct timeless atmospheres.
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1" />

            {/* Explore Links */}
            <div className="md:col-span-2 space-y-8">
              <h3 className="flex items-center gap-3 font-display font-bold text-white tracking-widest text-xs uppercase text-cinelineGold/80 mb-6">
                <span className="w-8 h-[1px] bg-cinelineGold/50" /> Explore
              </h3>
              <ul className="space-y-2">
                <li><FooterLink href="/about">Our Story</FooterLink></li>
                <li><FooterLink href="/portfolio">Portfolio</FooterLink></li>
                <li><FooterLink href="/services">Services</FooterLink></li>
                <li><FooterLink href="/manifesto">Manifesto</FooterLink></li>
              </ul>
            </div>

            {/* Support & Connect */}
            <div className="md:col-span-4 space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="flex items-center gap-3 font-display font-bold text-white tracking-widest text-xs uppercase text-cinelineGold/80 mb-6">
                    <span className="w-8 h-[1px] bg-cinelineGold/50" /> Support
                  </h3>
                  <ul className="space-y-2">
                    <li><FooterLink href="/contact">Contact</FooterLink></li>
                    <li><FooterLink href="/booking">Booking</FooterLink></li>
                    <li><FooterLink href="/faq">FAQ</FooterLink></li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-3 font-display font-bold text-white tracking-widest text-xs uppercase text-cinelineGold/80 mb-6">
                    <span className="w-8 h-[1px] bg-cinelineGold/50" /> Social
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <SocialLink href="https://instagram.com" icon={Instagram} />
                    <SocialLink href="https://threads.net" icon={MessageCircle} />
                    <SocialLink href="https://youtube.com" icon={Youtube} />
                    <SocialLink href="https://linkedin.com" icon={Linkedin} />
                    <SocialLink href="mailto:cinelinestudio24@gmail.com" icon={Mail} />
                  </div>
                </div>
              </div>

              {/* Contact Box */}
              <div className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-cinelineGold/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cinelineGold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Project Enquiries</p>
                    <a href="mailto:cinelinestudio24@gmail.com" className="text-xl text-white font-medium hover:text-cinelineGold transition-colors">cinelinestudio24@gmail.com</a>
                  </div>
                  <ArrowRight className="text-cinelineGold -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-6 text-xs text-gray-600 font-medium">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500">© {new Date().getFullYear()} Cineline Studios.</span>
              <span className="text-gray-700">Crafted with precision & soul.</span>
            </div>
            <div className="flex flex-wrap gap-8 items-center">
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <BackToTopButton show={showTop} onClick={scrollToTop} />
      </div>
    </footer>
  );
}

// --- SUBCOMPONENTS ---

function Grain() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0 mix-blend-overlay"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
  );
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center aspect-square rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-black hover:bg-cinelineGold hover:border-cinelineGold transition-all duration-300 group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="flex items-center justify-between py-2 text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 group border-b border-transparent hover:border-white/10 w-full">
      <span>{children}</span>
      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-cinelineGold transition-all duration-300" />
    </Link>
  );
}

function BackToTopButton({ show, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-10 right-10 z-50 group p-4 rounded-full bg-[#111] border border-white/10 text-white 
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
        transition-all duration-700 ease-[0.22, 1, 0.36, 1]
        hover:scale-110 hover:border-cinelineGold
        ${show ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}
    >
      <div className="absolute inset-0 rounded-full border border-cinelineGold opacity-0 group-hover:animate-ping" />
      <ArrowUp size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300 text-cinelineGold" />
    </button>
  );
}
