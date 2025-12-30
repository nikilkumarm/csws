"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Navbar Items
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="fixed top-8 left-0 right-0 z-[9999]">
      <div className="max-w-full mx-auto px-4">

        {/* NAVBAR CONTAINER WITH CINEMATIC ROTATION */}
        <div
          className="
            cinematic-glass
            flex items-center justify-between w-full
            rounded-full border border-gray-200
            px-8 py-3
            bg-white/20 backdrop-blur-lg
          "
        >
          {/* LOGO */}
          <div className="cinematic-item">
            <Link href="/">
              <Image
                src="/cs_logo_only_b_t.png"
                alt="Cineline Studios"
                width={58}
                height={34}
                className="w-auto h-auto"
                priority
              />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-normal text-black cinematic-item">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative px-1 py-1 group
                  transition-colors duration-300
                "
              >
                {item.label}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}

            {/* BOOK BUTTON */}
            <Link
              href="/booking"
              className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              Book
            </Link>
          </div>

          {/* MOBILE MENU BUTTON - ANIMATED */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[10001] relative group"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "rotate-45 translate-y-2 bg-cinelineGold" : "group-hover:bg-cinelineGold"
                }`}
            />
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "opacity-0" : "group-hover:bg-cinelineGold"
                }`}
            />
            <span
              className={`w-8 h-[1.5px] bg-black transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${open ? "-rotate-45 -translate-y-2 bg-cinelineGold" : "group-hover:bg-cinelineGold"
                }`}
            />
          </button>

        </div>
      </div>

      {/* MOBILE MENU - STATIC NO ANIMATION */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-[10000] flex-col justify-center items-center ${open ? "flex" : "hidden"
          }`}
      >
        <nav className="flex flex-col gap-0 text-center z-10 w-full px-8 max-w-lg mx-auto">

          {/* Menu Logo */}
          <div className="mb-16 flex justify-center">
            <Image
              src="/cs_logo_w_t.png"
              alt="Cineline Studios"
              width={160}
              height={50}
              className="w-40 h-auto"
            />
          </div>

          {/* Links - Static List */}
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group py-6 flex items-center justify-between text-3xl font-light tracking-wide text-white hover:text-cinelineGold"
              >
                <span>{item.label}</span>
                <span className="w-2 h-2 rounded-full bg-cinelineGold opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="mt-16 w-full flex justify-center">
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="w-full py-5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-cinelineGold hover:text-black hover:border-cinelineGold"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>

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