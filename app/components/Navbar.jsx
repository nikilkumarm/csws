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
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[10001] relative"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>

        </div>
      </div>

      {/* MOBILE MENU - MINIMALIST CLEAN */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-[10000] flex flex-col justify-center items-center gap-12 transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible delay-200"
          }`}
      >
        <nav className="flex flex-col gap-8 text-center z-10 w-full px-6">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-3xl font-light tracking-wide text-black hover:text-cinelineGold transition-all duration-500 transform ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={`mt-8 w-full flex justify-center transition-all duration-700 delay-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="px-10 py-3 rounded-full bg-black text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-cinelineGold transition-colors shadow-lg"
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