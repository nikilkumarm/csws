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
            className="fixed inset-0 z-[99999] bg-black flex flex-col text-white overscroll-none"
          >
            {/* TOP BAR: CLOSE ONLY */}
            <div className="relative z-10 p-8 flex justify-end items-center">
              <button
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 py-2 px-1 focus:outline-none"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Close</span>
                <X size={20} strokeWidth={1.5} className="text-white/60 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* CENTERED CONTENT HUB */}
            <div className="flex-1 flex flex-col justify-center items-center px-8 text-center pb-20">

              {/* LOGO (BROUGHT DOWN) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
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
              <div className="flex flex-col gap-8 mb-12 bg-transparent">
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
                      <span className="text-4xl font-medium tracking-tight text-white/50 group-hover:text-white transition-all duration-500 hover:scale-105 inline-block">
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
                className="h-[1px] bg-white/10 mb-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-[280px] text-[10px] font-medium leading-relaxed tracking-[0.2em] text-white/60 uppercase"
              >
                We capture the extraordinary through a lens of digital precision and cinematic flair.
              </motion.p>
            </div>

            {/* BOTTOM ACTION: THE COMMISSION CALL */}
            <div className="p-12 flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="w-full max-w-xs"
              >
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="
                   w-full py-5 rounded-full bg-white text-black 
                   flex items-center justify-center gap-3
                   text-[11px] font-black uppercase tracking-[0.3em]
                   hover:scale-[1.02] active:scale-[0.98] transition-all duration-500
                   shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]
                 "
                >
                  Book a Session
                  <ChevronRight size={14} />
                </Link>
              </motion.div>

              <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.5em] text-white/10">
                <Instagram size={16} className="hover:text-white transition-colors cursor-pointer" />
                <Youtube size={16} className="hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Define the subtle 3D floating animation */
        @keyframes cinematicFloat {
          0% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
          25% { transform: rotateX(1.5deg) rotateY(1deg) translateY(-2px); }
          50% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
          75% { transform: rotateX(-1.5deg) rotateY(-1deg) translateY(-2px); }
          100% { transform: rotateX(0deg) rotateY(0deg) translateY(0px); }
        }

        .cinematic-glass {
          /* Give it 3D depth perspective */
          perspective: 1000px;
          transform-style: preserve-3d;
          /* Apply the slow, continuous animation */
          animation: cinematicFloat 20s ease-in-out infinite;
          /* Optimize performance */
          will-change: transform;
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