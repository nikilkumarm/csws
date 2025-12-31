"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Info,
  Film,
  Camera,
  Users,
  Calendar,
  ChevronRight,
  Instagram,
  Youtube,
  Menu as MenuIcon,
  X
} from "lucide-react";

// Navbar Items
const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home, num: "01" },
  { label: "About", href: "/about", icon: Info, num: "02" },
  { label: "Portfolio", href: "/portfolio", icon: Film, num: "03" },
  { label: "Services", href: "/services", icon: Camera, num: "04" },
  { label: "Team", href: "/team", icon: Users, num: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="fixed top-8 left-0 right-0 z-[9999]">
      <div className="max-w-full mx-auto px-4">

        {/* NAVBAR CONTAINER WITH CINEMATIC ROTATION */}
        <div className="relative z-[11000] flex w-full items-center justify-between rounded-full px-6 py-2.5 transition-all duration-500">

          {/* GOD MODE: ULTIMATE BLACK GLASS LAYER */}
          {/* Base Dark Glass with Gradient */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]" />

          {/* Top Edge Highlight - Cinematic Shine */}
          <div className="absolute -z-10 inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />

          {/* Bottom Edge Reflection */}
          <div className="absolute -z-10 inset-x-12 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

          {/* CONTENT CONTAINER */}
          <div className="flex w-full items-center justify-between pl-4 pr-1">

            {/* LOGO */}
            <div className="cinematic-item text-white">
              <Link href="/">
                <Image
                  src="/cs_logo_only_w_t.png"
                  alt="Cineline Studios"
                  width={48}
                  height={28}
                  className="w-auto h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  priority
                />
              </Link>
            </div>

            {/* DESKTOP LINKS - LUXURY TYPOGRAPHY */}
            <div className="hidden md:flex items-center gap-10 text-white">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    relative group py-2
                    text-[10px] font-bold uppercase tracking-[0.25em] text-white/70
                    transition-all duration-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
                  "
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </Link>
              ))}

              {/* BOOK BUTTON - PREMIUM PILL */}
              <Link
                href="/booking"
                className="
                  px-7 py-2.5 rounded-full bg-white text-black 
                  text-[10px] font-black uppercase tracking-[0.2em]
                  shadow-[0_0_20px_-5px_rgba(255,255,255,0.4),0_0_40px_-10px_rgba(255,255,255,0.2)]
                  hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.8),0_0_60px_-10px_rgba(255,255,255,0.4)]
                  hover:scale-105 active:scale-95
                  transition-all duration-500 ease-out
                "
              >
                Book
              </Link>
            </div>
          </div>


          {/* MOBILE MENU BUTTON - PREMIUM PILL */}
          {!open && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setOpen(true)}
              className="md:hidden relative group pl-5 pr-4 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center gap-3 transition-all duration-500 hover:bg-black/60 hover:border-white/40 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              aria-label="Toggle Menu"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Menu
              </span>

              <div className="flex flex-col gap-[4px] w-5 relative h-3 justify-center">
                <span className="w-full h-[1.5px] bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                <span className="w-2/3 h-[1.5px] bg-white rounded-full ml-auto shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
              </div>
            </motion.button>
          )}

        </div>
      </div>

      {/* MOBILE MENU - THE OBSIDIAN CINÉMATHÈQUE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99999] bg-[#030303] flex flex-col text-white overscroll-none"
          >
            {/* ATMOSPHERIC BACKGROUND LAYER - THE OBSIDIAN ATMOSPHERE */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

              {/* Cinematic Grain Texture */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

              {/* Ethereal Light Leaks */}
              {/* Ethereal Light Leaks - OPTIMIZED */}
              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-[0.03]" />
              <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-[0.02]" />

              {/* Minimalist Vector Geometry */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outermost Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="w-[110vw] h-[110vw] border-[0.5px] border-white/5 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10" />
                </motion.div>

                {/* Second Orbit (Dashed) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85vw] h-[85vw] border-[0.5px] border-dashed border-white/10 rounded-full"
                />

                {/* Technical Centering Crosshair */}
                <div className="absolute w-full h-[0.5px] bg-white/[0.03]" />
                <div className="absolute h-full w-[0.5px] bg-white/[0.03]" />
              </div>

              {/* HUD Accents (Simplified & Aesthetic) */}
              <div className="absolute top-12 left-12 flex flex-col gap-1">
                <span className="text-[6px] font-mono tracking-[0.5em] text-white/30 uppercase">System: Online</span>
                <span className="text-[6px] font-mono tracking-[0.5em] text-white/10 uppercase">Frame: 24FPS</span>
              </div>
              <div className="absolute top-12 right-12 text-[6px] font-mono tracking-[0.5em] text-white/20 uppercase">CS Archive // 2025</div>
              <div className="absolute bottom-12 left-12 text-[6px] font-mono tracking-[0.5em] text-white/10 uppercase">34.0522° N, 118.2437° W</div>
              <div className="absolute bottom-12 right-12 text-[6px] font-mono tracking-[0.5em] text-white/30 uppercase">Cineline Studios</div>
            </div>



            {/* TOP BAR: CLOSE COMMAND */}
            <div className="relative z-20 pt-24 pb-8 px-8 flex justify-end items-center">
              <button
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 py-2 px-1 focus:outline-none"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Close</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/5 bg-white/[0.03] group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <X size={18} strokeWidth={1.5} />
                </div>
              </button>
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 flex-1 flex flex-col">
              {/* CENTERED CONTENT HUB */}
              <div className="flex-1 flex flex-col justify-center items-center px-8 text-center pb-4 mt-[-8%]">

                {/* LOGO (BROUGHT DOWN) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <Image
                    src="/cs_logo_only_w_t.png"
                    alt="CS"
                    width={50}
                    height={30}
                    className="opacity-90 w-auto h-auto"
                  />
                </motion.div>

                {/* EDITORIAL NAVIGATION */}
                <div className="flex flex-col gap-5 mb-6 bg-transparent">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-transparent"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block group bg-transparent"
                      >
                        <span className="text-3xl font-medium tracking-tight text-white/50 group-hover:text-white transition-all duration-500 hover:scale-105 inline-block">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* MINIMALIST SUB-SECTION */}
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "60px" }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="h-[1px] bg-white/10 mb-6"
                />


                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="max-w-[280px] text-[10px] font-medium leading-relaxed tracking-[0.2em] text-white/60 uppercase mb-8"
                >
                  We capture the extraordinary through a lens of digital precision and cinematic flair.
                </motion.p>

                {/* MOVED BUTTON: THE COMMISSION CALL */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="w-full max-w-xs px-6"
                >
                  <Link
                    href="/booking"
                    onClick={() => setOpen(false)}
                    className="
                    w-full py-4 rounded-full bg-white text-black
                    flex items-center justify-center gap-3
                    text-[10px] font-black uppercase tracking-[0.3em]
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-500
                    shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)]
                  "
                  >
                    Book a Session
                    <ChevronRight size={14} />
                  </Link>
                </motion.div>
              </div>

              {/* MINIMAL FOOTER: SOCIALS ONLY */}
              <div className="pb-16 flex flex-col items-center">
                <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-white/10">
                  <Instagram size={16} className="hover:text-white transition-colors cursor-pointer" />
                  <Youtube size={16} className="hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Define the subtle 3D floating animation */
        @keyframes cinematicFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0px); }
        }

        .cinematic-glass {
          /* Give it 3D depth perspective */
          perspective: 1000px;
          transform-style: preserve-3d;
          /* Apply the slow, continuous animation */
          /* animation: cinematicFloat 20s ease-in-out infinite; */
          /* Optimize performance */
          /* will-change: transform; */
          /* Slight shadow to enhance 3D effect */
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        /* Optional: Ensure items inside remain sharp during rotation */
        .cinematic-item {
          transform: translateZ(1px);
        }
      `}</style>
    </header>
  );
}